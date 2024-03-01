"use client";

import { AnimatePresence } from "framer-motion";

export const FramerMotionWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => <AnimatePresence>{children}</AnimatePresence>;
