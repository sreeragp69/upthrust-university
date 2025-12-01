"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"

interface Props {
  display: "hidden" | "block"
}

export default function SubscriptionForm({ display }: Props) {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setEmail("")
        setIsSubmitted(false)
      }, 2000)
    }
  }

    const displayClasses =
    display === "hidden"
      ? "hidden lg:block"
      : "block lg:hidden"


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.7 }}
      className={`bg-white rounded-2xl 4xl:rounded-4xl p-6 xl:p-3 2xl:p-6 h-fit! shadow-2xl w-full  xl:pt-10  md:w-xl xl:w-sm 2xl:w-xl 4xl:w-xl font-alexandria relative font-medium ${displayClasses} 2xl:-mt-10 3xl:-mt-0`}
    >
      <motion.button
     
        className="w-fit bg-yellow-400  text-black text-lg xl:text-[10px] 2xl:text-lg rounded-b-3xl rounded-bl-none rounded-tr-none py-2 px-6 rounded-2xl 4xl:rounded-tl-4xl 4xl:rounded-br-4xl mb-5  transition-colors absolute top-0 left-0"
      >
        Get More Info & New Updates
      </motion.button>

      {/* Label */}
      <h3 className="text-black text-lg xl:text-[10px] 2xl:text-lg  mb-4 xl:mb-1 2xl:mb-4 xl:pl-3.5 lg:mt-6">Enter Your Email ID</h3>

      <form onSubmit={handleSubmit} className="flex gap-4 md:flex-row flex-col">
        <input
          type="email"
          placeholder="Enter Your Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-6 py-3 xl:text-[10px] text-base xl:py-2.5 xl:px-4  2xl:py-3 2xl:px-8 2xl:text-lg bg-gray-200 text-black placeholder-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
        />

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white xl:font-light xl:text-[10px] 3xl:text-lg text-base py-2.5 lg:px-2  xl:py-2.5 xl:px-4  2xl:py-3 2xl:px-8 rounded-full transition-colors whitespace-nowrap"
        >
          {isSubmitted ? "✓ Subscribed!" : "Subscribe Now"}
        </motion.button>
      </form>


    
    </motion.div>
  )
}
