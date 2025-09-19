import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logoutUser from "../store/authSlice"; 
import { LogOut } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    const name = user?.email
        ? user.email.split("@")[0].charAt(0).toUpperCase() + user.email.split("@")[0].slice(1).toLowerCase()
        : "John Doe";

    const handleLogout = () => {
        dispatch(logoutUser()); 
        navigate("/login");      
    };

    motion
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#fff6ef] via-[#fefefe] to-[#EBC9A4] px-6">
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
                <div className="bg-gradient-to-r from-[#de8628] to-[#f0ad4e] p-6 text-center">
                    <motion.img
                        src={user?.photoURL || "/p1.png"}
                        alt="Profile"
                        className="w-28 h-28 mx-auto rounded-full border-4 border-white shadow-md"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                    <h2 className="mt-4 text-2xl font-bold text-white">{name}</h2>
                    <p className="text-white/90 text-sm">{user?.email}</p>
                </div>

                <div className="px-6 py-6 text-center">
                    <p className="text-gray-600 text-sm mb-6">
                        Welcome to <span className="font-semibold text-[#de8628]">DevXcript Portal</span>.  
                        You're logged in via <span className="capitalize">{user?.provider}</span>.
                    </p>

                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-medium bg-[#de8628] text-white shadow-md hover:bg-[#c96f15] transition-transform transform hover:scale-[1.02]"
                    >
                        <LogOut className="w-5 h-5" />
                        Logout
                    </button>
                </div>
            </motion.div>
        </div>
    );
};
