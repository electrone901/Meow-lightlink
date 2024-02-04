'use client';

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiArrowDownCircle } from "react-icons/hi2";
import { BsHeartFill } from "react-icons/bs";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { useAccount } from "wagmi";
import { formatEther } from "viem";


function StatusCat() {
  const router = useRouter();
  const { address } = useAccount();

  const { data: XPToken } = useScaffoldContractRead({
    contractName: "XPToken",
    functionName: "balanceOf",
    args: [address],
  });

  const { data: background } = useScaffoldContractRead({
    contractName: "Meow",
    functionName: "ownerToBackground",
    args: [address],
  });

  return (
    <div style={{
      backgroundImage: `url(${background || "/assets/background.jpg"})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "104vh", // Set to full height of the viewport
    }}>
      <p className="text-right mr-[100px] mt-10">Current Points: {formatEther(XPToken || 0)}</p>
      <div className="flex items-center justify-center">
        <div className=" mt-10">
          

          <div className="grid grid-cols-4 gap-10">
            <div className="p-4 col-span-2 flex flex-col items-center justify-center">
              <p className="font-semibold text-3xl text-black px-2 py-2">Check MOMOTO’s status</p>
              <Image
                src="/assets/cat 001.png"
                width={1900}
                height={1900}
                alt="pet"
                className={`object-cover w-[300px] h-[400px] `}
              />
            </div>

            <div className="grid grid-cols-2 gap-1">
              <div className="flex flex-col items-center justify-center bg-[#F5F1F1] mr-10 cursor-pointer" onClick={() => router.push("/dailyPoints")}>
                <Image
                  src="/assets/feedtrophy.svg"
                  width={40}
                  height={40}
                  alt="pet"
                />
                <p className="font-semibold text-2xl text-black px-4 py-3">Daily Points</p>
              </div>
              <div className="flex flex-col items-center justify-center bg-[#F5F1F1] cursor-pointer" onClick={() => router.push("/selectFood")}>
                <Image
                  src="/assets/fish.svg"
                  width={40}
                  height={40}
                  alt="pet"
                />
                <p className="font-semibold text-2xl text-black px-4 py-3">Feed Cat</p>
              </div>
              <div className="flex flex-col items-center justify-center bg-[#F5F1F1] cursor-pointer" onClick={() => router.push("/customize")}>
                <Image
                  src="/assets/customize.svg"
                  width={40}
                  height={40}
                  alt="pet"
                />
                <p className="font-semibold text-2xl text-black px-4 py-3">Customize</p>
              </div>
              <div className="flex flex-col items-center justify-center bg-[#F5F1F1] cursor-pointer">
                <Image
                  src="/assets/marketplace.svg"
                  width={40}
                  height={40}
                  alt="pet"
                />
                <p className="font-semibold text-2xl text-black px-4 py-3">Market Place</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusCat;
