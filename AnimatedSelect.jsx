"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedSelect = ({ label, options }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(label);

  return (
    <div className="relative w-full">
      <div className="w-full flex justify-between items-center bg-white/70 backdrop-blur-lg px-4 py-3 text-gray-700 text-left rounded-xl shadow-md border border-gray-200 transition-all duration-300">
        <span className="text-sm font-medium tracking-wide">{selected}</span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="ml-2 text-blue-600 cursor-pointer"
          onClick={() => setOpen(!open)}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="m17 14l-5-5m0 0l-5 5"
          />
        </motion.svg>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute mt-2 w-full bg-white/90 backdrop-blur-lg shadow-xl rounded-xl border border-gray-100 overflow-hidden z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {options.map((option, i) => (
              <motion.div
                key={option}
                className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
              >
                {option}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedSelect;
