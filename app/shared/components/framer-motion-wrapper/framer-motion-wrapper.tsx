"use client";

import { motion, AnimatePresence } from "framer-motion";

export const FramerMotionWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <>
    <AnimatePresence>
      <motion.div>{children}</motion.div>
    </AnimatePresence>
  </>
);
