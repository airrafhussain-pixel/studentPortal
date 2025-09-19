import { motion } from "framer-motion"; 
import { CiCalendar } from "react-icons/ci";
import { FiBook } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";

const Classes = () => {
    const courseData = [
        {
            title: "Web Application Development",
            code: "CSC3543",
            instructor: "Asad Kamal",
            time: "09:00 AM - 10:30 AM",
            location: "Lab 1",
            class: "Lab",
            icon: <FiBook className="w-4 h-4 text-orange-500" />
        },
        {
            title: "Operating Systems - Lab",
            code: "CSC3551",
            instructor: "Qaisar Aslam",
            time: "11:00 AM - 12:30 PM",
            location: "Room 301",
            class: "Lecture",
            icon: <TbUsers className="w-4 h-4 text-indigo-500" />
        },
        {
            title: "Software Engineering",
            code: "CSC3813",
            instructor: "M. Basit Ali Gillani",
            time: "02:00 PM - 03:30 PM",
            location: "Room 205",
            class: "Lecture",
            icon: <TbUsers className="w-4 h-4 text-indigo-500" />
        },
    ];

    const currentDate = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        day: "2-digit",
        month: "short",
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-6 mt-6 w-full mx-auto"
        >
            {/* Header */}
            <div className="flex gap-3 items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-xl">
                    <CiCalendar className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">Today's Classes</h2>
                    <p className="text-sm text-gray-500">{currentDate}</p>
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="h-[280px] overflow-y-auto pr-2">
                <div className="space-y-4 flex flex-col">
                    {courseData.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="w-full p-4 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex justify-between items-center mb-3">
                                <div className="flex gap-3 items-center">
                                    <div className="p-3 bg-gray-100 rounded-lg flex items-center justify-center">
                                        {course.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-sm font-medium text-gray-800">{course.title}</h2>
                                        <p className="text-xs text-gray-500">{course.code}</p>
                                    </div>
                                </div>
                                <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200">
                                    {course.class}
                                </span>
                            </div>

                            <div className="flex flex-col gap-1 text-sm text-gray-600">
                                <span className="flex items-center gap-2">
                                    <TbUsers className="text-gray-400" />
                                    {course.instructor}
                                </span>
                                <span className="flex items-center gap-2">
                                    <LuClock className="text-gray-400" />
                                    {course.time}
                                </span>
                                <span className="flex items-center gap-2">
                                    <IoLocationOutline className="text-gray-400" />
                                    {course.location}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="mt-5 pt-3 flex justify-between items-center border-t border-gray-200 text-sm">
                <span className="text-gray-600">{courseData.length} classes scheduled</span>
                <span className="text-orange-500 font-medium cursor-pointer hover:underline">
                    View Full Schedule
                </span>
            </div>
        </motion.div>
    );
};

export default Classes;
