import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState("🌞");

  // Initialize theme on component mount
  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  // Effect to handle theme switching
  useEffect(() => {
    if (theme === "light") {
      setIcon("🌞");
    } else {
      setIcon("🌝");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <button onClick={toggleTheme}>{icon}</button>;
}
