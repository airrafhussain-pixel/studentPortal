import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { SearchIcon } from "lucide-react";

const resultsData = [
  { id: 1, term: "Spring 2023", gp: 63.34, cgp: 63.34, cr: 19, totalCr: 19, sgpa: 3.33 },
  { id: 2, term: "Fall 2023", gp: 52.32, cgp: 115.6, cr: 17, totalCr: 36, sgpa: 3.08 },
  { id: 3, term: "Spring 2024", gp: 59.3, cgp: 174.9, cr: 16, totalCr: 52, sgpa: 3.49 },
  { id: 4, term: "Fall 2024", gp: 61.25, cgp: 236.15, cr: 18, totalCr: 70, sgpa: 3.06 },
  { id: 5, term: "Spring 2025", gp: 70.35, cgp: 306.5, cr: 10, totalCr: 90, sgpa: 3.93 },
];

const Results = () => {
  const [search, setSearch] = useState("");
  const [termFilter, setTermFilter] = useState("All Terms");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredResults = resultsData.filter((item) => {
    const matchSearch =
      item.term.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toString().includes(search) ||
      item.sgpa.toString().includes(search) ||
      item.cgp.toString().includes(search);

    const matchTerm =
      termFilter === "All Terms" || item.term.toLowerCase().includes(termFilter.toLowerCase());

    return matchSearch && matchTerm;
  });

  motion
  return (
    <div className="lg:px-6 md:px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">📊 Academic Results</h2>

      {/* Search + Filter */}
      <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        {/* Search Input */}
        <div className="flex items-center gap-3 w-full px-3 py-2 border border-gray-200 rounded-lg focus-within:ring-2 focus-within:ring-[#de8628] bg-gray-50">
          <SearchIcon size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by Term, ID, SGPA, CGPA..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          />
        </div>

        {/* Dropdown Filter */}
        <div className="relative w-full md:w-1/4">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full flex justify-between items-center px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
          >
            <span className="text-gray-700 font-medium">{termFilter}</span>
            <motion.span
              animate={{ rotate: dropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`text-xl ${dropdownOpen ? "text-[#de8628]" : "text-gray-600"}`}
            >
              <FiChevronDown />
            </motion.span>
          </button>

          {dropdownOpen && (
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg mt-2 shadow-md overflow-hidden"
            >
              {["All Terms", "Spring", "Fall"].map((term) => (
                <li
                  key={term}
                  onClick={() => {
                    setTermFilter(term);
                    setDropdownOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 transition"
                >
                  {term}
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>

      {/* Results Table */}
      <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100">
        <table className="min-w-[600px] w-full text-center bg-white rounded-xl">
          <thead className="bg-[#fff5ed]">
            <tr className="text-[#de8628] font-semibold uppercase text-sm">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Term</th>
              <th className="px-4 py-3">Grading Points</th>
              <th className="px-4 py-3">Cumulative GP</th>
              <th className="px-4 py-3">CR</th>
              <th className="px-4 py-3">Total CR</th>
              <th className="px-4 py-3">SGPA</th>
            </tr>
          </thead>
          <tbody>
            {filteredResults.map((item) => (
              <tr
                key={item.id}
                className="border-t border-gray-200 hover:bg-gray-50 text-gray-700 transition"
              >
                <td className="px-4 py-3 font-medium">{item.id}</td>
                <td className="px-4 py-3 text-[#de8628] font-semibold hover:underline cursor-pointer">
                  {item.term}
                </td>
                <td className="px-4 py-3">{item.gp}</td>
                <td className="px-4 py-3">{item.cgp}</td>
                <td className="px-4 py-3">{item.cr}</td>
                <td className="px-4 py-3">{item.totalCr}</td>
                <td className="px-4 py-3 text-[#18b580] font-semibold">{item.sgpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;
