import { ReactNode } from "react";
import Accordion from "./accordion";

type CardType = {
  question: ReactNode;
  answer: ReactNode;
  twolines?: boolean;
  id: number;
  selectedCardId: number;
  onClick: (id: number) => void;
};

export default function Card({
  question,
  answer,
  twolines,
  id,
  selectedCardId,
  onClick,
}: CardType) {
  return (
    <div className="flex flex-row items-center">
      {twolines ? (
        <>
          <div className="flex flex-col items-center mr-[-3px] mt-[88px]">
            <div className="w-0.5 h-20 bg-gray-light" />
            <div className="w-2 h-2 rounded bg-gray-light" />
          </div>
          <div className="w-12 h-0.5 bg-gray-light" />
        </>
      ) : (
        <>
          <div className="w-2 h-2 rounded bg-gray-light" />
          <div className="w-20 sm:w-28 h-0.5 bg-gray-light" />
        </>
      )}
      <Accordion {...{ question, answer, id, selectedCardId, onClick }} />
    </div>
  );
}
