import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils"; // Ensure cn function is available
import { useRef } from "react";

export const HighlightText = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.span
      ref={ref}
      initial={{ backgroundSize: "0% 100%" }}
      animate={isInView ? { backgroundSize: "100% 100%" } : {}}
      transition={{ duration: 1.5, ease: "linear", delay: 0.5 }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block bg-gradient-to-r from-indigo-500 to-purple-500 px-1 pb-1 rounded-sm",
        className
      )}
    >
      {children}
    </motion.span>
  );
};
