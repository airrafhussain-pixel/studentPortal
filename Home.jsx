import Cources from '../components/Cource'
import Classes from '../components/Classes'
import { motion } from "framer-motion";
import { LuBookOpen, LuGraduationCap } from "react-icons/lu";
import { useSelector } from "react-redux";
import Chart from '../components/Chart'; 

const Home = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl py-6 flex flex-wrap justify-between gap-6 w-full bg-gradient-to-br from-white to-gray-50 shadow-lg mt-6 border border-gray-200"
            >
                {/* Header */}
                <div className="flex flex-wrap lg:gap-5 gap-4 justify-center lg:justify-between items-center lg:items-start mx-auto">
                    <div className="p-4 bg-[#457b9d] rounded-xl shadow-md">
                        <LuBookOpen color="white" className="w-8 h-8" />
                    </div>
                    <div className="text-center lg:text-left">
                        <h2 className="text-2xl mb-1 font-extrabold text-gray-800">
                            {user?.email
                                ? user.email.split('@')[0].charAt(0).toUpperCase() + user.email.split('@')[0].slice(1).toLowerCase()
                                : "John Doe"}
                        </h2>
                        <h2 className="text-[14px] font-medium text-gray-600 mb-1">L1PCBCS56</h2>
                        <p className="text-[13px] text-gray-500 mb-2">
                            Faculty of Information Technology and Computer Science
                        </p>
                        <span className="inline-flex gap-2 items-center text-sm px-3 py-1 bg-blue-50 border border-blue-300 text-blue-600 rounded-full shadow-sm">
                            <LuGraduationCap className="text-blue-600" /> BS Computer Science
                        </span>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="flex flex-wrap justify-center items-center mx-auto gap-5 text-sm">
                    <div className="bg-gray-50 hover:bg-gray-100 transition p-4 w-[120px] rounded-xl text-center shadow-sm">
                        <p className="text-[13px] text-gray-500">CGPA</p>
                        <p className="font-bold text-lg text-gray-700 lg:text-xl">3.23</p>
                    </div>
                    <div className="bg-green-50 hover:bg-green-100 transition p-4 w-[120px] rounded-xl text-center shadow-sm">
                        <p className="text-[13px] text-gray-500">Earned Credits</p>
                        <p className="font-bold text-lg text-green-600 lg:text-xl">69</p>
                    </div>
                    <div className="bg-gray-50 hover:bg-gray-100 transition p-4 w-[120px] rounded-xl text-center shadow-sm">
                        <p className="text-[13px] text-gray-500">Total Credits</p>
                        <p className="font-bold text-lg text-gray-700 lg:text-xl">133</p>
                    </div>
                    <div className="bg-red-50 hover:bg-red-100 transition p-4 w-[120px] rounded-xl text-center shadow-sm">
                        <p className="text-[13px] text-gray-500">In Progress</p>
                        <p className="font-bold text-lg text-red-500 lg:text-xl">10</p>
                    </div>
                </div>
            </motion.div>

            <Chart />
            <Classes />
            <Cources />
        </div>
    )
}

export default Home;
