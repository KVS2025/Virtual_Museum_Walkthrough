import { useState } from "react";  //Helps to store and update values

// Museum Array containing data
const museums = [
  {
    id: 1,
    name: "Louvre Museum",
    country: "France",
    year: "1793",
    image:
      "https://cdn-imgix.headout.com/tour/11225/TOUR-IMAGE/43b09356-a98d-4f44-ab36-8995ec72a716-6157-paris-skip-the-line-louvre-museum-guided-tour?auto=compress&fm=webp&w=1200&h=750&crop=faces&fit=min",
    desc: "World's largest art museum, home to the Mona Lisa.",
    fact: "Originally a fortress in the late 12th century, the Louvre became a royal palace before turning into a public museum."
  },
  {
    id: 2,
    name: "British Museum",
    country: "UK",
    year: "1753",
    image:
      "https://cdn.londonandpartners.com/asset/british-museum_museum-frontage-image-courtesy-of-the-british-museum_f0b0a5a3c53f8fc1564868c561bd167c.jpg",
    desc: "Famous for the Rosetta Stone and ancient artifacts.",
    fact: "It was the first public national museum in the world, free for all 'studious and curious persons'."
  },
  {
    id: 3,
    name: "Metropolitan Museum of Art",
    country: "USA",
    year: "1870",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/61/95/89/the-met-fifth-avenue.jpg?w=900&h=500&s=1",
    desc: "One of the most visited museums in the world.",
    fact: "The Met's collection spans 5,000 years, with over 2 million works of art from every corner of the globe."
  },
  {
    id: 4,
    name: "Vatican Museums",
    country: "Vatican City",
    year: "1506",
    image:
      "https://thevaticanmuseums.com/wp-content/uploads/2020/11/Vatican-city-cover.jpg",
    desc: "Known for the Sistine Chapel ceiling by Michelangelo.",
    fact: "The museums hold the world’s most extensive collection of Renaissance masterpieces and classical sculptures."
  },
  {
    id: 5,
    name: "Hermitage Museum",
    country: "Russia",
    year: "1764",
    image:
      "https://cdn.britannica.com/39/117239-050-9315F482/Hermitage-St-Petersburg.jpg",
    desc: "One of the world’s largest and oldest museums.",
    fact: "Catherine the Great founded the Hermitage after purchasing a collection of 225 paintings from Berlin."
  },
  {
    id: 6,
    name: "Uffizi Gallery",
    country: "Italy",
    year: "1767",
    desc: "One of the most famous art museums in Florence, known for Renaissance masterpieces.",
    fact: "The Uffizi was never meant to be a museum—it was originally built as offices for Florentine magistrates in 1560.",
    image:
      "https://www.artnews.com/wp-content/uploads/2023/10/GettyImages-1455076848-1.jpg?w=1200",
  }
]; //Acts as a database

export default function App() {
  const [selected, setSelected] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  return (  //Tailwind
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-gray-900"
      }`}
    >
      {/* Header with Toggle */}
      <div className="flex justify-between items-center w-full max-w-6xl mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center flex-1">
          🏰 Virtual Museum Walkthrough
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 px-4 py-2 rounded-xl shadow-md bg-gradient-to-r from-yellow-500 to-red-600 text-white hover:scale-105 transition"
        >
          {darkMode ? "🌞 Light Mode " : "🌙 Dark Mode "}
        </button>
      </div>

      {/* Museum Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {museums.map((museum) => (
          <div
            key={museum.id}
            onClick={() => setSelected(museum)}
            className={`rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <img
              src={museum.image}
              alt={museum.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">{museum.name}</h2>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 text-center">
              <p className="text-lg font-bold text-white">
                {museum.flag} {museum.country}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for details(Popup) */}   
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4">
          <div
            className={`rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative ${
              darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            }`}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl"
            >
              ✖
            </button>
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-3xl font-bold mb-2">{selected.name}</h2>
            <p className="text-gray-400 mb-2">
              📍 {selected.country} | 🏛️ Established: {selected.year}
            </p>
            <p className="mb-3">{selected.desc}</p>
            <p className="italic text-yellow-400">💡 {selected.fact}</p>
          </div>
        </div>
      )}
    </div>
  );
}
