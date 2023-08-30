"use client";
import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { FramerMotionWrapper } from "@/app/shared/components/framer-motion-wrapper/framer-motion-wrapper";

type AccordionProps = {
  question: ReactNode;
  answer: ReactNode;
};

const Accordion = ({ question, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FramerMotionWrapper>
      <motion.div
        key="question"
        className="flex flex-col justify-center px-6 py-3 rounded-[20px] cursor-pointer border-2 border-gray-light"
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: isOpen ? "transparent" : "rgba(244, 239, 246, 0.2)" }}
      >
        <motion.p className="text-xl font-normal text-gray-light">
          {question}
        </motion.p>
        {isOpen && (
          <motion.div
            className="flex flex-col w-full"
            key="answer"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div className="w-full h-0.5 mt-2 mb-2 bg-gray-gradient-medium" />
            <motion.p className="text-xl font-normal text-gray-gradient-light">
              {answer}
            </motion.p>
          </motion.div>
        )}
      </motion.div>
    </FramerMotionWrapper>
  );
};

export default Accordion;
