import { motion } from "framer-motion";
import { FiCalendar, FiUser } from "react-icons/fi";
import { LuBookOpen, LuChartColumn, LuCreditCard } from "react-icons/lu";
import { Link } from "react-router-dom";

const Cources = () => {
  const courseData = [
    {
      title: "Web Application Development",
      code: "CSC3543",
      instructor: "Asad Kamal",
      credits: 3.0,
      attendance: 86.0,
      status: "Active",
    },
    {
      title: "Operating Systems - Lab",
      code: "CSC3551",
      instructor: "Qaisar Aslam",
      credits: 1.0,
      attendance: 92.0,
      status: "Active",
    },
    {
      title: "Software Engineering",
      code: "CSC3813",
      instructor: "M. Basit Ali Gillani",
      credits: 3.0,
      attendance: 79.0,
      status: "Active",
    },
    {
      title: "Operating Systems",
      code: "CSC3553",
      instructor: "Dr Adnan Ghafoor",
      credits: 3.0,
      attendance: 81.0,
      status: "Active",
    },
    {
      title: "Withdrawn Course",
      code: "CSC9999",
      instructor: "Mr Javed Khan",
      credits: 1.0,
      attendance: 15.8,
      status: "Withdraw",
    },
  ];

  const getBadgeStyle = (value) => {
    const percentage = typeof value === "number" ? value : 0;
    if (percentage >= 81) return "bg-green-200 text-green-800";
    if (percentage >= 65) return "bg-yellow-200 text-yellow-800";
    if (percentage >= 55) return "bg-red-200 text-red-800";
    return "bg-gray-200 text-gray-700";
  };

  const summary = {
    program: "BS Computer Science",
    semester: "Spring 2025",
    totalCourses: 4,
  };

  motion;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto"
    >
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 mt-6 w-full mx-auto border border-gray-100">
        <div className="flex gap-4 lg:justify-start mx-auto ms-3 items-center mb-6">
          <div className="p-3 bg-[#f3d7b2] rounded-2xl shadow-md">
            <LuBookOpen color="#d97706" className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Current Courses</h2>
            <ul className="flex gap-2 text-sm text-gray-500 mt-1">
              <li>{summary.semester}</li>
              <li>• {summary.totalCourses} Enrolled Courses</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 lg:justify-start justify-center items-stretch">
          {courseData.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="lg:w-[340px] md:w-[280px] w-[300px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
            >
              <div className="bg-[#f9f3ec] px-4 py-3">
                <h3 className="text-lg font-semibold text-[#b45309]">
                  {course.title}
                </h3>
                <div className="mt-2 flex justify-between items-center">
                  <p className="text-sm text-gray-600">{course.code}</p>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      course.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {course.status}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 p-4 text-sm text-gray-700">
                <p className="flex items-center gap-2">
                  <FiUser className="text-gray-500" />
                  <span className="font-medium">{course.instructor}</span>
                </p>
                <p className="flex items-center gap-2">
                  <LuCreditCard className="text-gray-500" />
                  <span className="font-medium">
                    Credits: {course.credits}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <LuChartColumn className="text-gray-500" />
                  <span className="font-medium">
                    Grades:{" "}
                    <Link
                      to="/Courses"
                      className="text-[#b45309] font-medium hover:underline"
                    >
                      view progress
                    </Link>
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <FiCalendar className="text-gray-500" />
                  <span className="font-medium">Attendance:</span>
                  <span
                    className={`ms-2 px-3 py-1 rounded-full text-xs font-bold ${getBadgeStyle(
                      course.attendance
                    )}`}
                  >
                    {course.attendance !== "—"
                      ? `${course.attendance}%`
                      : "—"}
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Cources;
