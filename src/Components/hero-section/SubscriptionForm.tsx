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
      className={`bg-white rounded-3xl p-6 shadow-lg w-full max-w-2xl font-alexandria font-medium ${displayClasses}`}
    >
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-fit bg-yellow-400 hover:bg-yellow-500 text-black  py-2 px-6 rounded-full mb-5 transition-colors"
      >
        Get More Info & New Updates
      </motion.button>

      {/* Label */}
      <h3 className="text-black text-lg mb-4">Enter Your Email ID</h3>

      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="email"
          placeholder="Enter Your Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-6 py-3 bg-gray-200 text-black placeholder-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
        />

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full transition-colors whitespace-nowrap"
        >
          {isSubmitted ? "✓ Subscribed!" : "Subscribe Now"}
        </motion.button>
      </form>
    </motion.div>
  )
}
