"use client";
import CountUp from "react-countup";
// import { formatAmount } from "../../lib/utils";

const AnimatedCounter: React.FC = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        decimal="."
        prefix="$"
        end={amount}
        duration={0.5}
        decimals={2}
      />
    </div>
  );
};

export default AnimatedCounter;
