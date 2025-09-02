import { useState, useEffect } from 'react';
import { subscribeToTicketSettings, type TicketSettings } from '../lib/settings';

interface UseTicketAvailabilityReturn {
  ticketSettings: TicketSettings | null;
  loading: boolean;
  error: string | null;
  isLowAvailability: boolean; // true when available tickets < 20
}

export const useTicketAvailability = (): UseTicketAvailabilityReturn => {
  const [ticketSettings, setTicketSettings] = useState<TicketSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Subscribe to real-time updates
    const unsubscribe = subscribeToTicketSettings((settings) => {
      try {
        if (settings) {
          setTicketSettings(settings);
          setError(null);
        } else {
          setError('No se pudieron cargar los datos de entradas');
        }
      } catch (err) {
        console.error('Error in ticket settings subscription:', err);
        setError('Error al cargar la disponibilidad de entradas');
      } finally {
        setLoading(false);
      }
    });

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  // Determine if availability is low (less than 20 tickets)
  const isLowAvailability = ticketSettings ? ticketSettings.premiumAvailable < 20 : false;

  return {
    ticketSettings,
    loading,
    error,
    isLowAvailability
  };
};