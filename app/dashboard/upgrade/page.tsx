"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import UpgradeCard from "./_components/UpgradeCard";

const UpgradePage = () => {
  const router = useRouter();

  const handleOnClick = async () => {
    const response = await axios.post("/api/upgrade/checkout");
    router.push(response.data.url);
  };

  return (
    <div className="p-5">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-foreground">
          Upgrade Credits
        </h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          One-time purchase — no subscriptions, no recurring charges
        </p>
      </div>

      <div className="max-w-md">
        <UpgradeCard handleOnClick={handleOnClick} />
      </div>
    </div>
  );
};

export default UpgradePage;
