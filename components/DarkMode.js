import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function DarkMode() {
  const [icon, setIcon] = useState("🌝");
  const [toggle, setToggle] = useState(false);
  const { setTheme } = useTheme();
  useEffect(() => {
    switch (icon) {
      case "🌞":
        setIcon("🌝");
        setTheme("dark");
        break;
      case "🌝":
        setIcon("🌞");
        setTheme("light");
        break;
    }
  }, [toggle]);

  useEffect(() => {
    setTheme("light");
  }, []);
  return <button onClick={() => setToggle((prev) => !prev)}>{icon}</button>;
}
