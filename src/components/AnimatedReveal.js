"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
  once = false,
}) => {
  const variants = {
    up: { opacity: 0, y: 50 },
    down: { opacity: 0, y: -50 },
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
    fade: { opacity: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={variants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedReveal;
