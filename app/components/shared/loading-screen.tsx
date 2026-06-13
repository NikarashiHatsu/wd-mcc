import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "~/hooks/useReducedMotion";
import { refreshScrollTriggers } from "~/hooks/useLenis";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setLoading(false);
      return;
    }
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, [reducedMotion]);

  useEffect(() => {
    if (!loading) {
      refreshScrollTriggers();
    }
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--background)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          aria-hidden="true"
        >
          <div className="text-center">
            <motion.div
              className="font-display text-4xl font-bold gradient-text"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              WD-MCC
            </motion.div>
            <motion.div
              className="mt-4 h-0.5 w-32 overflow-hidden rounded-full bg-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
