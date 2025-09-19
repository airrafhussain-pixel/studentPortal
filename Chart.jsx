import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LuBookOpen } from "react-icons/lu";
import { Circle } from "lucide-react";

const Chart = () => {
    const totalCredits = 133;
    const completedCredits = 69;
    const remainingCredits = totalCredits - completedCredits;
    const creditTarget = ((completedCredits / totalCredits) * 100).toFixed(0);

    const gpa = 3.37;
    const maxGPA = 4;
    const gpaTarget = ((gpa / maxGPA) * 100).toFixed(0);
    const grade = "B+";

    const [creditCount, setCreditCount] = useState(0);
    const [gpaCount, setGpaCount] = useState(0);

    useEffect(() => {
        let creditInterval = setInterval(() => {
            setCreditCount((prev) => {
                if (prev < creditTarget) return prev + 1;
                clearInterval(creditInterval);
                return prev;
            });
        }, 20);

        let gpaInterval = setInterval(() => {
            setGpaCount((prev) => {
                if (prev < gpaTarget) return prev + 1;
                clearInterval(gpaInterval);
                return prev;
            });
        }, 20);

        return () => {
            clearInterval(creditInterval);
            clearInterval(gpaInterval);
        };
    }, [creditTarget, gpaTarget]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6"
        >
            <div className="flex lg:flex-row flex-wrap gap-6 lg:justify-between justify-center items-center">
                {/* Credit Hours Card */}
                <div className="lg:w-[49%] w-full rounded-2xl lg:p-6 p-4 shadow-xl bg-white/90 backdrop-blur-md border border-gray-100 lg:h-[400px] flex flex-col justify-between transition-transform hover:scale-[1.01]">
                    <div className="flex gap-3 items-center mb-4">
                        <div className="p-3 bg-orange-100 rounded-xl">
                            <LuBookOpen color="#f97316" className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">Credit Hours</h2>
                            <p className="text-sm text-gray-500">Academic Progress</p>
                        </div>
                    </div>

                    <div className="text-center relative">
                        <svg
                            className="w-[200px] h-[200px] mx-auto rotate-[180deg]"
                            viewBox="0 0 200 200"
                        >
                            <circle cx="100" cy="100" r="70" stroke="#e5e7eb" strokeWidth="18" fill="none" />
                            <circle
                                cx="100"
                                cy="100"
                                r="70"
                                stroke="#f97316"
                                strokeWidth="18"
                                fill="none"
                                strokeDasharray={439.6}
                                strokeDashoffset={439.6 - (439.6 * creditCount) / 100}
                            />
                        </svg>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-orange-500">
                            {creditCount}%
                            <p className="mt-1 text-xs text-gray-600">
                                {completedCredits} / {totalCredits} <br /> Credits
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-2 border-t border-gray-200 pt-3 text-sm text-gray-600">
                        <div className="flex justify-between items-center">
                            <span className="flex gap-2 items-center">
                                <Circle color="#f97316" fill="#f97316" className="w-3" />
                                Completed
                            </span>
                            <span>{completedCredits} hrs</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="flex gap-2 items-center">
                                <Circle color="gray" fill="gray" className="w-3" />
                                Remaining
                            </span>
                            <span>{remainingCredits} hrs</span>
                        </div>
                    </div>
                </div>

                {/* GPA Card */}
                <div className="lg:w-[49%] w-full rounded-2xl lg:p-6 p-4 shadow-xl bg-white/90 backdrop-blur-md border border-gray-100 lg:h-[400px] flex flex-col justify-between transition-transform hover:scale-[1.01]">
                    <div className="flex gap-3 items-center mb-4">
                        <div className="p-3 bg-indigo-100 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-indigo-500 w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 7h6v6"></path>
                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">GPA</h2>
                            <p className="text-sm text-gray-500">Academic Performance</p>
                        </div>
                    </div>

                    <div className="relative w-[200px] h-[200px] mx-auto">
                        <svg className="w-full h-full rotate-[90deg]" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="70" stroke="#e5e7eb" strokeWidth="18" fill="none" />
                            <circle
                                cx="100"
                                cy="100"
                                r="70"
                                stroke="#6366f1"
                                strokeWidth="18"
                                fill="none"
                                strokeDasharray={439.6}
                                strokeDashoffset={439.6 - (439.6 * gpaCount) / 100}
                            />
                        </svg>
                        <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-indigo-500">
                            {gpaCount}%
                            <p className="mt-1 text-xs text-gray-600">
                                {gpa} / {maxGPA} <br /> GPA
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-2 border-t border-gray-200 pt-3 text-sm text-gray-600">
                        <div className="flex justify-between items-center">
                            <span className="flex gap-2 items-center">
                                <Circle color="#6366f1" fill="#6366f1" className="w-3" />
                                Current GPA
                            </span>
                            <span>{gpa}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="flex gap-2 items-center">
                                <Circle color="gray" fill="gray" className="w-3" />
                                Letter Grade
                            </span>
                            <span className="flex gap-2 bg-indigo-50 px-2 py-1 rounded text-indigo-600 border">
                                {grade}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Chart;
