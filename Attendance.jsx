
import { motion } from "framer-motion";

const attendanceData = [
  { course: "Web Development", total: 42, present: 36 },
  { course: "Object Oriented Program...", total: 38, present: 32 },
  { course: "Database Systems", total: 45, present: 41 },
  { course: "Computer Networks", total: 40, present: 35 },
  { course: "AI Fundamentals", total: 35, present: 28 },
  { course: "Cyber Security", total: 48, present: 30 },
];

const getStatus = (percentage) => {
  if (percentage >= 85) {
    return {
      label: "Good Standing",
      icon: <span className="text-green-600 text-lg">✓</span>,
      bar: "bg-green-500",
    };
  } else if (percentage >= 75) {
    return {
      label: "Average",
      icon: <span className="text-yellow-500 text-lg">⚠</span>,
      bar: "bg-yellow-400",
    };
  } else {
    return {
      label: "Below Average",
      icon: <span className="text-red-500 text-lg">✗</span>,
      bar: "bg-red-400",
    };
  }
};

const getBadgeStyle = (percentage) => {
  if (percentage >= 81) return "bg-green-100 text-green-500";
  if (percentage >= 65) return "bg-yellow-100 text-yellow-500";
  if (percentage >= 55) return "bg-red-100 text-red-500";
  return "bg-gray-100 text-gray-500";
};

motion
const Attendance = () => {
  return (
    <div className="lg:p-6 md:p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-black mb-2">Attendance Overview</h2>
      <p className="text-gray-500 mb-6">Your attendance record across all courses</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {attendanceData.map(({ course, total, present }, index) => {
          const absent = total - present;
          const percentage = ((present / total) * 100).toFixed(1);
          const status = getStatus(percentage);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition duration-300"
            >
              {/* Header */}
              <div className="flex justify-between items-center flex-wrap mb-3">
                <h3 className="text-lg font-bold lg:text-[17px] md:text-[17px] text-[14px] text-gray-800">{course}</h3>
                <span
                  className={`border p-1 rounded-full px-4 lg:text-[14px] md:text-[14px] text-[10px] font-bold ${getBadgeStyle(percentage)}`}
                >
                  {percentage}%
                </span>
              </div>

              {/* Stats */}
              <div className="flex justify-around items-center gap-6 text-center text-sm text-gray-600 mb-4">
                <p className="flex flex-col">
                  <span className="font-bold text-[24px]">{total}</span>
                  <span className="text-[13px]">Total</span>
                </p>
                <p className="flex flex-col">
                  <span className="font-bold text-[24px] text-green-500">{present}</span>
                  <span className="text-[13px]">Present</span>
                </p>
                <p className="flex flex-col">
                  <span className="font-bold text-[24px] text-red-500">{absent}</span>
                  <span className="text-[13px]">Absent</span>
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                <div
                  className={`h-full ${status.bar}`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>

              {/* Status */}
              <p className="text-sm font-semibold text-gray-700 flex items-center gap-2 justify-center">
                {status.icon}
                <span>{status.label}</span>
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Attendance;
