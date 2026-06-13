"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import UpgradeCard from "./_components/UpgradeCard";

const UpgradePage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/upgrade/checkout");
      router.push(response.data.url);
    } catch {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-5">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-foreground">
          Upgrade Credits
        </h1>
        <p className="mt-0.5 text-sm text-muted-foreground">
          One-time purchase — no subscriptions, no recurring charges
        </p>
      </div>

      <div className="max-w-md">
        <UpgradeCard handleOnClick={handleOnClick} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default UpgradePage;
