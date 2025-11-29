"use client";

import React from "react";
import { motion } from "framer-motion";

interface FormProps {
  heading?: string;
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
  className?: string;
}

const Form: React.FC<FormProps> = ({
  heading,
  children,
  onSubmit,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={`bg-white rounded-2xl p-4 sm:p-5 md:p-6 xl:p-4 shadow-2xl w-full ${className}`}
    >
      {heading && (
        <h4 className="text-lg font-medium text-gray-500 mb-6 xl:text-base 2xl:text-lg xl:mb-3.5 2xl:mb-6">{heading}</h4>
      )}
      <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4 xl:space-y-2 2xl:space-y-3">
        {children}
      </form>
    </motion.div>
  );
};

export default Form;