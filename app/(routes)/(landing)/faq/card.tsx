type CardType = {
  text: string;
  twolines?: boolean;
};

export default function Card({ text, twolines }: CardType) {
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
      <div className="flex  justify-center items-center px-6 py-3 rounded-[20px] border-2 border-gray-light bg-shadow-gradient-light">
        <h2 className="text-xl font-normal text-gray-light">{text}</h2>
      </div>
    </div>
  );
}
