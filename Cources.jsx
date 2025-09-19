<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="max-w-7xl mx-auto px-4"
>
  {/* Summary Section */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-white/80 backdrop-blur-md rounded-2xl p-6 flex flex-wrap justify-between gap-5 w-full shadow-lg border border-gray-100 mt-6"
  >
    <div className="flex gap-3 items-center mb-4">
      <div className="p-4 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl shadow-md">
        <LuBookOpen color="white" className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-800">All Courses</h2>
        <h2 className="flex gap-2 text-xs font-semibold text-orange-600 bg-orange-100 rounded-full px-2 py-0.5 w-fit mt-1">
          <LuGraduationCap className="w-4 h-4" /> {summary.program}
        </h2>
        <p className="flex gap-2 text-xs text-gray-600 bg-gray-100 rounded-full px-2 py-0.5 w-fit mt-1">
          <CiCalendar className="w-4 h-4" /> {summary.semester}
        </p>
      </div>
    </div>

    {/* Stats */}
    <div className="flex flex-wrap justify-center gap-4 text-sm">
      <div className="bg-gray-50 hover:bg-gray-100 w-[120px] p-3 rounded-xl text-center shadow-sm">
        <p>Total</p>
        <p className="font-bold text-blue-500 text-lg">{summary.totalCourses}</p>
      </div>
      <div className="bg-green-50 hover:bg-green-100 w-[120px] p-3 rounded-xl text-center shadow-sm">
        <p>Active</p>
        <p className="font-bold text-green-600 text-lg">{summary.activeCourses}</p>
      </div>
      <div className="bg-red-50 hover:bg-red-100 w-[120px] p-3 rounded-xl text-center shadow-sm">
        <p>Withdrawn</p>
        <p className="font-bold text-red-500 text-lg">{summary.withdrawnCourses}</p>
      </div>
      <div className="bg-yellow-50 hover:bg-yellow-100 w-[120px] p-3 rounded-xl text-center shadow-sm">
        <p>Credits</p>
        <p className="font-bold text-yellow-600 text-lg">{summary.currentCredits}</p>
      </div>
    </div>
  </motion.div>

  {/* Course List Section */}
  <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-5 mt-6 border border-gray-100">
    <div className="flex flex-wrap justify-between items-center mb-5">
      <h2 className="text-xl font-bold text-orange-600">Course List</h2>
      <div className="flex gap-2">
        {["All", "Active", "Withdraw"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              filter === type
                ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md"
                : "border border-gray-300 text-gray-600 hover:border-orange-400 hover:text-orange-500"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>

    {/* Course Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {filteredCourses.map((course, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all"
        >
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 px-4 py-3">
            <h3 className="text-lg font-semibold text-orange-600">{course.title}</h3>
            <div className="flex justify-between items-center mt-1">
              <p className="text-sm text-orange-600">{course.code}</p>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  course.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-500"
                }`}
              >
                {course.status}
              </span>
            </div>
          </div>
          <div className="p-4 space-y-3 text-sm text-gray-600">
            <p className="flex items-center gap-2">
              <FiUser className="text-gray-400" />
              <span>{course.instructor}</span>
            </p>
            <p className="flex items-center gap-2">
              <LuCreditCard className="text-gray-400" />
              <span>Credits: {course.credits}</span>
            </p>
            <p className="flex items-center gap-2">
              <LuChartColumn className="text-gray-400" />
              <span>
                Grades:
                <Link to="/Courses" className="text-orange-600 hover:underline ml-1">
                  view progress
                </Link>
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FiCalendar className="text-gray-400" />
              <span>Attendance:</span>
              <span
                className={`ml-2 px-3 py-0.5 rounded-full font-bold text-xs ${getBadgeStyle(
                  course.attendance
                )}`}
              >
                {course.attendance}%
              </span>
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Footer */}
    <div className="flex justify-between items-center border-t border-gray-200 pt-3 mt-6 text-sm text-gray-500">
      <div className="flex gap-4">
        <span className="flex items-center gap-1">
          <Circle className="w-3 text-orange-500 fill-orange-500" /> Active ({activeCount})
        </span>
        <span className="flex items-center gap-1">
          <Circle className="w-3 text-red-500 fill-red-500" /> Withdraw ({withdrawCount})
        </span>
      </div>
      <span>
        Showing {filteredCourses.length} of {courseData.length} courses
      </span>
    </div>
  </div>
</motion.div>
