import damianImg from "../assets/speakers/damian.jpg";
import frankImg from "../assets/speakers/frank.jpeg";
import jimyImg from "../assets/speakers/jimy.jpg";
import eduardImg from "../assets/speakers/eduar.jpg";
import franklinImg from "../assets/speakers/franklin.jpeg";
import leslyImg from "../assets/speakers/lesly.jpg";
import ferminImg from "../assets/speakers/fermin.png";

export interface Speaker {
  id: string;
  name: string;
  position: string;
  image: string;
  linkedin: string;
}

const speakers: Speaker[] = [
  {
    id: "1",
    name: "Damian Sire",
    position: "Google Developer Expert Angular",
    image: damianImg,
    linkedin: "https://www.linkedin.com/in/damiansire/",
  },
  {
    id: "2",
    name: "Frank García",
    position: "Coordinador de Innovación Educativa - USIL",
    image: frankImg,
    linkedin: "https://www.linkedin.com/in/frankgarciacruz/",
  },
  {
    id: "3",
    name: "Lesly Zerna",
    position: "Google Developer Expert Machine Learning",
    image: leslyImg,
    linkedin: "https://www.linkedin.com/in/lesly-zerna/",
  },
  {
    id: "4",
    name: "Jimy Dolores",
    position: "Software Architect - Fundador Angular Perú",
    image: jimyImg,
    linkedin: "https://www.linkedin.com/in/jimyhuachodolores/",
  },
  {
    id: "5",
    name: "Eduar Apaza",
    position: "Senior Software Engineer - Exabeam",
    image: eduardImg,
    linkedin: "https://www.linkedin.com/in/eduarapaza/",
  },
  {
    id: "6",
    name: "Franklin Bustamante",
    position: "Emprendedor tecnológico - Fundador codigo369",
    image: franklinImg,
    linkedin:
      "https://www.linkedin.com/in/franklin-jhon-bustamante-alejandria-1539772a6/?originalSubdomain=pe",
  },
  {
    id: "7",
    name: "Fermín Blanco",
    position: "Software Engineer - GDG Lead Cúcuta",
    image: ferminImg,
    linkedin: "https://www.linkedin.com/in/ferminblanco/",
  },
];

const Speakers = () => {
  return (
    <section id="speakers" className="bg-gray-50 py-24">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-google-blue mb-4">Speakers</h2>
          <p className="text-lg text-gray-600">
            Conoce a los expertos que compartirán su conocimiento en DevFest
            Tacna 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
          {speakers.map((speaker) => (
            <a
              key={speaker.id}
              href={speaker.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group cursor-pointer hover:opacity-80 transition-opacity duration-300"
            >
              <div className="mb-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {speaker.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {speaker.position}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <p className="text-gray-600">
            ¿Quieres ser ponente?
            <a
              href="https://sessionize.com/devfest-tacna/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-google-blue hover:text-blue-700 font-medium ml-2"
            >
              Envía tu propuesta aquí →
            </a>
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Speakers;
