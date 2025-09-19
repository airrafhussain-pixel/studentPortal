import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiMapPin, FiUser } from "react-icons/fi";

const examData = [
  { course: "OOP", instructor: "David Venn", date: "2024-07-13", time: "10:00 - 12:00", venue: "A - 010", num: "#1" },
  { course: "COAL", instructor: "Micheal Croff", date: "2024-07-15", time: "12:00 - 14:00", venue: "A - 010", num: "#2" },
  { course: "MVC", instructor: "Dwayne John", date: "2024-07-16", time: "10:00 - 12:00", venue: "B - 108", num: "#3" },
  { course: "ISL", instructor: "Peter Nyon", date: "2024-07-16", time: "15:00 - 17:00", venue: "A - 010", num: "#4" },
  { course: "DS", instructor: "Micheal Hassy", date: "2024-07-17", time: "12:00 - 14:00", venue: "C - 112", num: "#5" },
];

const DateSheet = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto"
    >
      <h2 className="text-2xl font-extrabold text-[#1d3557] mb-2">📅 Exam Schedule</h2>
      <p className="text-gray-500 mb-6">Spring 2025 examination timetable</p>

      <div className="flex flex-wrap gap-6 lg:justify-start md:justify-start justify-center">
        {examData.map((exam, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="w-[280px] h-[310px] bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] rounded-2xl shadow-lg border border-gray-200 p-5 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold px-4 py-1 text-white bg-[#457b9d] rounded-full shadow-sm">
                {exam.course}
              </span>
              <span className="text-lg font-bold text-gray-600">{exam.num}</span>
            </div>

            <div className="flex flex-col gap-4 text-sm text-gray-700">
              <p className="flex items-center gap-3">
                <FiUser className="text-[#457b9d]" />
                <span className="text-[14px]">
                  <span className="block font-semibold text-gray-600">Instructor</span>
                  <span className="text-gray-800">{exam.instructor}</span>
                </span>
              </p>

              <p className="flex items-center gap-3">
                <FiCalendar className="text-[#457b9d]" />
                <span className="text-[14px]">
                  <span className="block font-semibold text-gray-600">Date</span>
                  <span className="text-gray-800">{exam.date}</span>
                </span>
              </p>

              <p className="flex items-center gap-3">
                <FiClock className="text-[#457b9d]" />
                <span className="text-[14px]">
                  <span className="block font-semibold text-gray-600">Time</span>
                  <span className="text-gray-800">{exam.time}</span>
                </span>
              </p>

              <p className="flex items-center gap-3">
                <FiMapPin className="text-[#457b9d]" />
                <span className="text-[14px]">
                  <span className="block font-semibold text-gray-600">Venue</span>
                  <span className="text-gray-800">{exam.venue}</span>
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DateSheet;
