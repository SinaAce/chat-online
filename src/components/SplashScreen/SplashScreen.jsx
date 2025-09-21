import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/Logo.svg";

const SplashScreen = ({ onFinish }) => {
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // بعد از 3 ثانیه متن و حباب چت نمایش داده شود
    const textTimer = setTimeout(() => setShowText(true), 3000);

    // بعد از 6 ثانیه، شروع fade-out
    const fadeTimer = setTimeout(() => setFadeOut(true), 6000);

    // بعد از 6.8 ثانیه، SplashScreen بسته شود و برویم MainLayout
    const finishTimer = setTimeout(() => onFinish(), 6800);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          className="w-screen h-screen flex flex-col justify-center items-center bg-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* لوگو */}
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            <img src={logo} alt="logo" />
          </motion.div>

          {/* حباب چت با متن */}
          <AnimatePresence>
            {showText && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center items-center border-4 border-blue-400 rounded-full w-56 h-56 text-center p-4"
              >
                <p className="text-blue-600 font-semibold text-lg leading-snug">
                  Stay Connected
                </p>
                <p className="text-blue-600 font-semibold text-lg leading-snug">
                  Stay Chatting
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* نسخه برنامه */}
          <motion.p
            className="mt-8 text-sm text-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: showText ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            Version 2.1.0
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
