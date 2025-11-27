"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import type {
  SubscribeProps,
  SubscribeFormData,
} from "../../types/Subscribe.type";
import { SUBSCRIBE_DATA } from "../../constants/Subscribe.data";
import SubscribeSkeleton from "./SubscribeSkeleton";
import SubscribeImg from "../../assets/images/cards/FooterCard.png";

const Subscribe: React.FC<SubscribeProps> = ({ isLoading = false }) => {
  const [formData, setFormData] = useState<SubscribeFormData>({ email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (isLoading) {
    return <SubscribeSkeleton />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Subscribe:", formData);
    setIsSubmitting(false);
    setFormData({ email: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ email: e.target.value });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-[70%] max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8  absolute z-10  -top-[20%] md:-top-[25%] lg:-top-[20%] left-1/2 -translate-x-1/2"
    >
      <div className="bg-linear-to-r from-themePrimary to-themePrimary rounded-4xl md:rounded-[50px] lg:rounded-[53px] shadow-2xl overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3  sm:space-y-4 md:space-y-5 lg:space-y-5 p-4 sm:p-5 md:p-6 lg:p-8 xl:p-12 order-2 lg:order-1 text-center lg:col-span-7 lg:text-left"
          >
            <div className="space-y-2 sm:space-y-3 ">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white/90 text-base sm:text-lg md:text-xl lg:text-xl xl:text-3xl 2xl:text-5xl xl:leading-10 font-bold leading-tight"
              >
                {SUBSCRIBE_DATA.subheading}
              </motion.p>
            </div>

            <div className="text-white/90 text-xs sm:text-sm xl:text-base  2xl:text-lg xl:leading-tight font-alexandria">
              {SUBSCRIBE_DATA.stats.label}
            </div>

            {/* Subscribe Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full max-w-sm sm:max-w-md mx-auto lg:mx-0"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full uppercase sm:w-auto px-4 sm:px-5 md:px-6 xl:px-10 h-10 sm:h-11 md:h-12 lg:h-9 xl:h-11 2xl:h-14 bg-[#30CD00] hover:bg-green-600 text-white font-alexandria text-sm rounded-lg sm:rounded-xl shadow-lg transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "connecting..." : SUBSCRIBE_DATA.buttonText}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 lg:order-2 w-full h-full lg:col-span-5"
          >
            <div className="relative h-full w-full flex items-center justify-center lg:justify-end">
              <img
                src={SubscribeImg}
                alt="3D Character working at computer"
                className="w-full h-full  object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Subscribe;
