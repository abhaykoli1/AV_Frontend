import React from "react";

const counters = [
  {
    value: "400+",
    label: "Website Build",
  },
  {
    value: "550+",
    label: "Build Brand Identity",
  },
  {
    value: "2.5x",
    label: "Your Startup Growth",
  },
];

const Counter = () => {
  return (
    <div className=" px-8 text-center py-20 pt-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {counters.map((counter, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-8xl font-bold text-purple-600">
              {counter.value}
            </h3>
            <p className="mt-2 text-xl font-bold text-white">{counter.label}</p>
          </div>
        ))}
      </div>
      {/* Decorative Divider */}
      <div className="flex justify-center mt-8">
        <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-500"></div>
      </div>
    </div>
  );
};

export default Counter;
