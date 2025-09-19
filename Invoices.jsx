import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { SearchIcon } from "lucide-react";

const InvoiceData = [
  { id: "CH-001", term: "Spring 2023", semester: "4th", sch: 50, fees: " 50,000", fine: 0, status: "Unpaid" },
  { id: "CH-002", term: "Fall 2023", semester: "3th", sch: 30, fees: " 70,000", fine: 500, status: "Paid" },
  { id: "CH-003", term: "Spring 2024", semester: "2th", sch: 20, fees: " 80,000", fine: 1000, status: "Paid" },
  { id: "CH-004", term: "Fall 2024", semester: "2th", sch: 10, fees: " 90,000", fine: 0, status: "Paid" },
  { id: "CH-005", term: "Spring 2025", semester: "Foundation", sch: 0, fees: "100,000", fine: 2000, status: "Paid" },
];

const Invoices = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredInvoices = InvoiceData.filter((item) => {
    const matchSearch =
      item.term.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.semester.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "All Status" || item.status.toLowerCase() === statusFilter.toLowerCase();
      return matchSearch && matchStatus;
    });


  motion
  return (
    <div className="lg:px-4 md:px-4 py-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-black mb-4">Your Invoices</h2>

      {/* Search + Filter */}
      <div className="p-4 bg-white rounded-xl shadow-md flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
        {/* Search Input */}
        <div className="flex items-center gap-3 w-full px-3 py-2 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-[#de8628] bg-white">
          <SearchIcon size={24} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by Term, Semester, or Challan ID ... "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-sm text-gray-500 placeholder-gray-400"
          />
        </div>

        {/* Dropdown Filter */}
        <div className="relative w-full md:w-1/4">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
          >
            <span className="text-gray-700 font-medium">{statusFilter}</span>
            <motion.span
              animate={{ rotate: dropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`text-xl ${dropdownOpen ? "text-[#de8628]" : "text-black"}`}
            >
              <FiChevronDown />
            </motion.span>
          </button>

          {dropdownOpen && (
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute z-10 w-full bg-white border border-gray-200 rounded-md mt-2 shadow-lg"
            >
              {["All Status", "Paid", "Unpaid"].map((status) => (
                <li
                  key={status}
                  onClick={() => {
                    setStatusFilter(status);
                    setDropdownOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                >
                  {status}
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>

      {/* Results Table */}
      <div className="overflow-x-auto rounded-xl shadow-md">
        <table className="min-w-[600px] w-full table-auto text-center border-gray-200 bg-white">
          <thead className="text-[#de8628]">
            <tr className="bg-[#ebc9a484] font-light uppercase">
              <th className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-2 text-[13px]">Term</th>
              <th className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-2 text-[13px]">Semester</th>
              <th className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-2 text-[13px]">Challan ID</th>
              <th className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-2 text-[13px]">Scholarship</th>
              <th className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-2 text-[13px]">Fee</th>
              <th className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-2 text-[13px]">Fine	</th>
              <th className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-2 text-[13px]">Status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {filteredInvoices.map((item) => (
              <tr key={item.id} className="border-t text-gray-700 border-gray-200 hover:bg-gray-50">
                <td className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-4  font-semibold  lg:text-[14px] md:text-[14px] text-[11px] cursor-pointer hover:underline">{item.term} </td>
                <td className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-4 lg:text-[14px] text-[#de8628] font-medium md:text-[14px] text-[11px]">{item.semester}</td>
                <td className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-4 lg:text-[14px] font-medium md:text-[14px] text-[11px]">{item.id}</td>
                <td className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-4 lg:text-[14px] font-medium md:text-[14px] text-[11px]">{item.sch}%</td>
                <td className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-4 lg:text-[14px] font-medium md:text-[14px] text-[11px]">{item.fees} PKR</td>
                <td className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-4 lg:text-[14px] font-medium md:text-[14px] text-[11px] text-red-500">{item.fine} PKR</td>
                <td className="lg:px-4 md:px-4 px-2 lg:py-4 md:py-4 py-4 lg:text-[14px] font-medium md:text-[14px] text-[11px] ">
                  <button
                    className={`px-2 rounded text-white transition duration-300 ${item.status === "Paid"
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-red-500 hover:bg-red-600"
                      }`}
                  >
                    {item.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;