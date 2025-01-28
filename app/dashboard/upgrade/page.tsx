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
      <div className="mt-5 rounded bg-white px-4 py-6">
        <h1 className="flex items-center justify-center bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-2xl font-black text-transparent">
        Upgrade Credit
          </h1>
      </div>
      <UpgradeCard handleOnClick={handleOnClick}/>
    </div>
  );
};

export default Upgrade;
