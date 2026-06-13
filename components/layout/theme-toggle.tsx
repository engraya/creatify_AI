"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="size-9" />;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="rounded-full"
    >
      {theme === "dark" ? (
        <Icons.sun className="size-[18px] text-foreground/80 transition-colors hover:text-foreground" />
      ) : (
        <Icons.moon className="size-[18px] text-foreground/80 transition-colors hover:text-foreground" />
      )}
    </Button>
  );
}
