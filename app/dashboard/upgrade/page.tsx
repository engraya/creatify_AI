"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import UpgradeCard from "./_components/UpgradeCard";
const Upgrade = () => {
  const router = useRouter();

  const handleOnClick = async () => {
    const response = await axios.post("/api/upgrade/checkout");
    // push user to the stripe url
    router.push(response.data.url);
  };

  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bg-white rounded">
        <h1 className="bg-clip-text flex justify-center items-center text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-2xl font-black">
        Upgrade Credit
          </h1>
      </div>
      <UpgradeCard handleOnClick={handleOnClick}/>
    </div>
  );
};

export default Upgrade;
