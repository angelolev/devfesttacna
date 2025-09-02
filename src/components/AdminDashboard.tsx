import { useState, useEffect } from "react";
import type { User } from "firebase/auth";
import { getVolunteers, type VolunteerData } from "../lib/volunteers";
import { signOutUser } from "../lib/auth";
import { getTicketSettings, updateTicketSettings, type TicketSettings } from "../lib/settings";

interface AdminDashboardProps {
  user: User;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user }) => {
  const [volunteers, setVolunteers] = useState<VolunteerData[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Ticket settings state
  const [ticketSettings, setTicketSettings] = useState<TicketSettings | null>(null);
  const [ticketLoading, setTicketLoading] = useState(false);
  const [premiumAvailable, setPremiumAvailable] = useState<string>("");
  const [premiumTotal, setPremiumTotal] = useState<string>("");
  const [updateMessage, setUpdateMessage] = useState<string>("");

  useEffect(() => {
    loadVolunteers();
    loadTicketSettings();
  }, []);

  const loadTicketSettings = async () => {
    try {
      const settings = await getTicketSettings();
      if (settings) {
        setTicketSettings(settings);
        setPremiumAvailable(settings.premiumAvailable.toString());
        setPremiumTotal(settings.premiumTotal.toString());
      }
    } catch (error) {
      console.error('Error loading ticket settings:', error);
    }
  };

  const loadVolunteers = async () => {
    setLoading(true);
    try {
      const data = await getVolunteers();
      setVolunteers(data);
    } catch (error) {
      console.error("Error loading volunteers:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOutUser();
  };

  const handleUpdateTicketSettings = async () => {
    if (!premiumAvailable.trim() || !premiumTotal.trim()) {
      setUpdateMessage("Por favor completa todos los campos");
      return;
    }

    const available = parseInt(premiumAvailable);
    const total = parseInt(premiumTotal);

    if (isNaN(available) || isNaN(total)) {
      setUpdateMessage("Por favor ingresa números válidos");
      return;
    }

    if (available < 0 || total < 0) {
      setUpdateMessage("Los valores no pueden ser negativos");
      return;
    }

    if (available > total) {
      setUpdateMessage("Las entradas disponibles no pueden exceder el total");
      return;
    }

    if (total > 1000) {
      setUpdateMessage("El total de entradas no puede exceder 1000");
      return;
    }

    if (available === 0) {
      const confirmUpdate = window.confirm("¿Estás seguro de que quieres marcar todas las entradas premium como agotadas?");
      if (!confirmUpdate) {
        return;
      }
    }

    setTicketLoading(true);
    setUpdateMessage("");

    try {
      await updateTicketSettings(available, total);
      await loadTicketSettings(); // Reload to get updated data
      setUpdateMessage("✓ Configuración actualizada exitosamente");
      setTimeout(() => setUpdateMessage(""), 3000);
    } catch (error) {
      console.error('Error updating ticket settings:', error);
      setUpdateMessage("Error al actualizar la configuración");
    } finally {
      setTicketLoading(false);
    }
  };

  const filteredVolunteers = volunteers.filter((volunteer) => {
    const matchesFilter = filter === "all" || volunteer.status === filter;
    const matchesSearch =
      searchTerm === "" ||
      volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      volunteer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      volunteer.role.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const exportToCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Role",
      "Experience",
      "Availability",
      "Status",
      "Created At",
    ];
    const csvContent = [
      headers.join(","),
      ...filteredVolunteers.map((volunteer) =>
        [
          volunteer.name,
          volunteer.email,
          volunteer.phone,
          volunteer.role,
          volunteer.experience.replace(/,/g, ";"), // Replace commas to avoid CSV issues
          volunteer.availability,
          volunteer.status || "pending",
          volunteer.createdAt?.toDate().toLocaleDateString() || "",
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `volunteers-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-google-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading volunteer data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Administración de DevFest Tacna
              </h1>
              <p className="text-gray-600">Panel de gestión de voluntarios</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Sesión iniciada como</p>
                <p className="font-medium text-gray-900">
                  {user.displayName || user.email}
                </p>
              </div>
              <button
                onClick={handleSignOut}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Solicitudes totales
            </h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {volunteers.length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Pendientes
            </h3>
            <p className="text-3xl font-bold text-yellow-600 mt-2">
              {volunteers.filter((v) => v.status === "pending").length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Aceptados
            </h3>
            <p className="text-3xl font-bold text-green-600 mt-2">
              {volunteers.filter((v) => v.status === "accepted").length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Contactados
            </h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {volunteers.filter((v) => v.status === "contacted").length}
            </p>
          </div>
        </div>

        {/* Ticket Configuration */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Configuración de Entradas</h2>
              <p className="text-sm text-gray-600 mt-1">Gestiona la disponibilidad de entradas premium</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="premiumAvailable" className="block text-sm font-medium text-gray-700 mb-2">
                Entradas Premium Disponibles
              </label>
              <input
                type="number"
                id="premiumAvailable"
                min="0"
                value={premiumAvailable}
                onChange={(e) => setPremiumAvailable(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-google-blue focus:border-transparent"
                placeholder="0"
              />
            </div>

            <div>
              <label htmlFor="premiumTotal" className="block text-sm font-medium text-gray-700 mb-2">
                Total de Entradas Premium
              </label>
              <input
                type="number"
                id="premiumTotal"
                min="0"
                value={premiumTotal}
                onChange={(e) => setPremiumTotal(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-google-blue focus:border-transparent"
                placeholder="0"
              />
            </div>

            <div className="flex flex-col justify-end">
              <button
                onClick={handleUpdateTicketSettings}
                disabled={ticketLoading}
                className={`px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  ticketLoading
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-google-blue text-white hover:bg-blue-700"
                }`}
              >
                {ticketLoading ? "Actualizando..." : "Actualizar Disponibilidad"}
              </button>
            </div>
          </div>

          {updateMessage && (
            <div className={`mt-4 p-3 rounded-lg text-sm ${
              updateMessage.includes("✓") 
                ? "bg-green-100 text-green-800" 
                : "bg-red-100 text-red-800"
            }`}>
              {updateMessage}
            </div>
          )}

          {ticketSettings && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>
                  Estado actual: <strong>{ticketSettings.premiumAvailable}/{ticketSettings.premiumTotal}</strong> entradas disponibles
                </span>
                <span>
                  Última actualización: {ticketSettings.lastUpdated.toDate().toLocaleString()}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div>
                <label
                  htmlFor="filter"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Filtrar por estado
                </label>
                <select
                  id="filter"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-google-blue focus:border-transparent"
                >
                  <option value="all">Todos los estados</option>
                  <option value="pending">Pendiente</option>
                  <option value="contacted">Contactado</option>
                  <option value="accepted">Aceptado</option>
                  <option value="rejected">Rechazado</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="search"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Buscar
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder="Buscar por nombre, correo o rol..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-google-blue focus:border-transparent w-64"
                />
              </div>
            </div>
            <button
              onClick={exportToCSV}
              className="bg-google-blue hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
            >
              <span>📊</span>
              Exportar CSV
            </button>
          </div>
        </div>

        {/* Volunteers Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contacto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rol
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Disponibilidad
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aplicó
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredVolunteers.map((volunteer) => (
                  <tr key={volunteer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-normal">
                      <div className="text-sm font-medium text-gray-900">
                        {volunteer.name}
                      </div>
                      {volunteer.experience && (
                        <div className="text-sm text-gray-500 max-w-xs">
                          {volunteer.experience}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {volunteer.email}
                      </div>
                      {volunteer.phone && (
                        <div className="text-sm text-gray-500">
                          {volunteer.phone}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {volunteer.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {volunteer.availability}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          volunteer.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : volunteer.status === "contacted"
                            ? "bg-blue-100 text-blue-800"
                            : volunteer.status === "accepted"
                            ? "bg-green-100 text-green-800"
                            : volunteer.status === "rejected"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {volunteer.status || "pending"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {volunteer.createdAt?.toDate().toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredVolunteers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No se encontraron voluntarios que coincidan con tus criterios.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
