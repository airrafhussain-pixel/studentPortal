import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { clearUser } from "../store/authSlice";
import { motion } from "framer-motion";
import { HiOutlineBell, HiOutlineMenu } from "react-icons/hi";
import {
  LuLayoutDashboard,
  LuBookOpen,
  LuClipboardList,
  LuCalendarDays,
} from "react-icons/lu";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { TbCheckbox } from "react-icons/tb";
import Cources from "./Cources";
import Results from "./Results";
import DateSheet from "./DateSheet";
import Invoices from "./Invoices";
import Attendance from "./Attendance";
import Home from "./Home";
import { Profile } from "./Profile";
import { LogOut } from "lucide-react";
import { CgProfile } from "react-icons/cg";

const Dashboard = () => {
  const [sideBar, setSideBar] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [showLogout, setShowLogout] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", icon: <LuLayoutDashboard /> },
    { name: "Courses", icon: <LuBookOpen /> },
    { name: "Results", icon: <LuClipboardList /> },
    { name: "Date Sheet", icon: <LuCalendarDays /> },
    { name: "Invoices", icon: <LiaFileInvoiceSolid /> },
    { name: "Attendance", icon: <TbCheckbox /> },
    { name: "Profile", icon: <CgProfile /> },
  ];

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(clearUser());
    navigate("/login");
  };

  const renderContent = () => {
    const variants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    };

    return (
      <motion.div
        key={activeTab}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        variants={variants}
        className="space-y-4"
      >
        {activeTab === "Dashboard" && <Home />}
        {activeTab === "Courses" && <Cources />}
        {activeTab === "Results" && <Results />}
        {activeTab === "Date Sheet" && <DateSheet />}
        {activeTab === "Invoices" && <Invoices />}
        {activeTab === "Attendance" && <Attendance />}
        {activeTab === "Profile" && <Profile />}
      </motion.div>
    );
  };

  return (
    <section className="min-h-screen bg-gray-50 flex overflow-hidden">
      <div
        className={`w-64 fixed top-0 bottom-0 left-0 bg-white border-r border-gray-200 flex flex-col justify-between z-50 transition-transform duration-300 ${
          sideBar ? "translate-x-0" : "md:translate-x-0 -translate-x-full"
        }`}
      >
        <div>
          <div className="md:hidden flex justify-end px-4 pt-4">
            <button
              onClick={() => setSideBar(false)}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              ❌
            </button>
          </div>

          <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-200">
            <div className="bg-[#DE8628] text-white px-2 py-1 rounded-md font-semibold">
              DX
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">DevXcript</h1>
              <p className="text-sm text-gray-500">Student Portal</p>
            </div>
          </div>

          <nav className="mt-4 space-y-1 px-4">
            {menuItems.map((item, index) => {
              const isActive = activeTab === item.name;
              return (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    setActiveTab(item.name);
                    setSideBar(false);
                  }}
                  className={`w-full flex justify-between items-center gap-3 px-4 py-4 rounded-md text-left transition-all duration-300 ${
                    isActive
                      ? "border border-[#EBC9A4] bg-white"
                      : "border border-transparent bg-white hover:bg-gray-50"
                  }`}
                >
                  <span className="flex gap-3 items-center">
                    <span
                      className={`text-[20px] ${
                        isActive
                          ? "text-[#de8628]"
                          : "text-gray-500 hover:text-gray-600"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        isActive
                          ? "text-[#de8628]"
                          : "text-gray-500 hover:text-gray-600"
                      }`}
                    >
                      {item.name}
                    </span>
                  </span>
                  {isActive && (
                    <div className="ml-auto w-[7px] h-[7px] bg-[#EBC9A4] rounded-full"></div>
                  )}
                </motion.button>
              );
            })}
          </nav>
        </div>

        <div className="p-4 text-center text-xs text-gray-500 border-t border-gray-100">
          Developed by BushraJan
        </div>
      </div>

      {sideBar && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-25 md:hidden"
          onClick={() => setSideBar(false)}
        ></div>
      )}

      <div className="flex-1 md:ml-64 flex flex-col min-h-screen overflow-hidden">
        <header className="flex items-center justify-between w-full px-4 bg-white border-b border-gray-200 h-16">
          <button
            className="flex gap-3 items-center md:hidden text-gray-600"
            onClick={() => setSideBar(true)}
          >
            <HiOutlineMenu className="w-6 h-6" />
            <span className="text-[20px] font-bold">Dashboard</span>
          </button>

          <div className="hidden md:flex items-center px-3 py-1 rounded-md w-96">
            <h1 className="text-lg font-bold text-gray-700">Dashboard</h1>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-500 lg:block md:block hidden relative hover:bg-gray-100 rounded p-2">
              <HiOutlineBell className="w-6 h-6" />
              <div className="absolute top-[5px] right-[5px] w-[7px] h-[7px] bg-[#DE8628] rounded-full"></div>
            </button>

            <div className="relative">
              <button
                onClick={() => setShowLogout(!showLogout)}
                className="flex gap-4 hover:bg-gray-100 p-2 rounded items-center"
              >
                <span className="p-1 border border-[#DE8628] rounded-full">
                  <img
                    src={user?.photoURL || "/p1.png"}
                    alt="user"
                    className="w-6 h-6 rounded-full"
                  />
                </span>
                <span className="lg:flex flex-col md:flex hidden">
                  <span className="font-semibold text-[13px]">
                    {user?.email
                      ? user.email.split("@")[0].charAt(0).toUpperCase() +
                        user.email.split("@")[0].slice(1).toLowerCase()
                      : "John Doe"}
                  </span>
                  <span className="text-[11px]">
                    {user?.email || "johndoe@gmail.com"}
                  </span>
                </span>
              </button>

              {showLogout && (
                <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md z-50">
                  <button
                    onClick={handleLogout}
                    className="flex gap-3 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                  >
                    <LogOut className="w-5" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-4 lg:py-6 md:py-6 lg:px-10 text-gray-600">
          {renderContent()}
        </main>
      </div>
    </section>
  );
};

export default Dashboard;
