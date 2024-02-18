import React from 'react'
import "./style.css";
import defaultProfilePic from "../../assets/man.png";
import internetComputerIcon from "../../assets/internet-computer.png";
import { CiMoneyCheck1 } from "react-icons/ci"

export const Main=()=>{
    return(
        <div className="h-[100vh]">
            <div className="py-3">
                <h1 className="text-2xl">Welcome To FairTrade {""}</h1>
                <p className="text-gray-400 pt-3">Here is what happening to your account today</p>
            </div>
            <h1 className="mt-10 mb-5">Transact</h1>
          <div className="flex justify-between w-1/2">
            <div className="border rounded-md p-7 flex flex-col items-center cursor-pointer">
                <CiMoneyCheck1 size={34} className="text-red-700"/>
                <h1>Deposit</h1>
            </div>
            <div className="border rounded-md p-7 flex flex-col items-center cursor-pointer">
                <CiMoneyCheck1 size={34} className="text-red-700"/>
                <h1>Withdraw</h1>
            </div>
            <div className="border rounded-md p-7 flex flex-col items-center cursor-pointer">
                <CiMoneyCheck1 size={34} className="text-red-700"/>
                <h1>Buy or sell</h1>
            </div>
          </div>
            <div className="mt-[100px]">
                <h1 className="border-b pb-4">Recently Transactions</h1>
                <p className="text-red-500 text-center my-5">No transctions recorded recently</p>
            </div>
        </div>
    )
}