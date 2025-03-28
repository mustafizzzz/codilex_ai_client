import { useState } from "react";
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  // Rotate the tooltip based on mouse movement
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  // Translate the tooltip
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="group relative -mr-4"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 10 } }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{ translateX: translateX, rotate: rotate, whiteSpace: "nowrap" }}
                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
              >
                <div className="relative z-30 text-base font-bold text-white">{item.name}</div>
                <div className="text-xs text-white">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Image */}
          <img
            onMouseMove={handleMouseMove}
            height={56}
            width={56}
            src={item.image}
            alt={item.name}
            className="h-10 w-10 rounded-full border-2 border-white object-cover transition-transform duration-500 group-hover:z-30 group-hover:scale-105"
          />
        </div>
      ))}
    </>
  );
};

export default AnimatedTooltip;
