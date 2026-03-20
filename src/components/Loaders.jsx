// External Modules
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AppProgress() {
  // Constants, States & References
  const [APP_LOAD_PROGRESS, UPDATE_APP_LOAD_PROGRESS] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      UPDATE_APP_LOAD_PROGRESS((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 100 / 45;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-dvh flex flex-col items-center justify-center gap-8">
      <h1
        className="text-white text-5xl font-semibold sm:font-medium tracking-wider"
        style={{ fontFamily: "Damion, sans-serif" }}
      >
        Taggs
      </h1>
      <div className="max-w-50 min-w-50 sm:max-w-60 sm:min-w-60 p-1 sm:p-1.8 border border-[#1E1E1E] rounded-full">
        <div
          className={`p-1 sm:p-2 bg-[#2E3440] sm:bg-[#0A0F1C] ${APP_LOAD_PROGRESS > 98 ? "rounded-full" : "rounded-bl-full rounded-tl-full"}`}
          style={{ width: `${APP_LOAD_PROGRESS}%` }}
        ></div>
      </div>
    </div>
  );
}

export function AppStatic() {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <h1
        className="text-white text-5xl font-semibold sm:font-medium tracking-wider"
        style={{ fontFamily: "Damion, sans-serif" }}
      >
        Taggs
      </h1>
    </div>
  );
}

export function CircularCoolBlue({ size = 14, color = "#0353a4" }) {
  return (
    <motion.div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: `${size / 6}px solid rgba(0,0,0,0.15)`,
        borderTop: `${size / 6}px solid ${color}`,
      }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 0.8,
        ease: "linear",
      }}
    />
  );
}
