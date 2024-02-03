'use client';

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiArrowDownCircle } from "react-icons/hi2";
import { BsHeartFill } from "react-icons/bs";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { useAccount } from "wagmi";
import { formatEther } from "viem";

const backgroundImageStyle = {
  backgroundImage: 'url("/assets/background.jpg")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "104vh", // Set to full height of the viewport
};

function DailyPoints() {
  const router = useRouter();
  const { address } = useAccount();

  const { data: XPToken } = useScaffoldContractRead({
    contractName: "XPToken",
    functionName: "balanceOf",
    args: [address],
  });

  return (
    <div style={backgroundImageStyle}>
      <p className="text-right mr-[100px] mt-10">Current Points: {formatEther(XPToken || 0)}</p>
      <div className="flex items-center justify-center">
        <div className=" mt-10">
          <p className="font-semibold text-3xl text-black px-2 py-2">Check MOMOTO’s status</p>

          <div className="grid grid-cols-5 gap-10">
            <div className=" p-4 col-span-2 flex items-center justify-center">
              <Image
                src="/assets/cat 001.png"
                width={1900}
                height={1900}
                alt="pet"
                className={`object-cover w-[300px] h-[400px] `}
              />
            </div>

            <div className="bg-white col-span-3 border-8 border-[#FED595] rounded-md">
              <div className="flex items-center justify-center bg-[#F5F1F1] mb-4">
                <Image
                  src="/assets/feedtrophy.svg"
                  width={40}
                  height={40}
                  alt="pet"
                />
                <p className="font-semibold text-2xl text-black px-4 py-3">Daily Points</p>
              </div>
              <div className="flex items-center justify-center bg-[#F5F1F1] mb-4">
                <Image
                  src="/assets/calendar.svg"
                  width={40}
                  height={40}
                  alt="pet"
                />
                <p className="font-semibold text-2xl text-black px-4 py-3">Daily Log in</p>
              </div>
              <div className="flex items-center justify-center bg-[#F5F1F1] mb-4">
                <Image
                  src="/assets/quiz.svg"
                  width={40}
                  height={40}
                  alt="pet"
                />
                <p className="font-semibold text-2xl text-black px-4 py-3">Daily Quiz</p>
              </div>
              <div className="flex items-center justify-center bg-[#F5F1F1]">
                <Image
                  src="/assets/feedcat.svg"
                  width={40}
                  height={40}
                  alt="pet"
                />
                <p className="font-semibold text-2xl text-black px-4 py-3">Feed Cat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyPoints;
