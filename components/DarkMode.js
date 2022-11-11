import React, { useEffect, useState } from "react";
// 🌞🌝
export default function DarkMode() {
  const [icon, setIcon] = useState("🌞");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    switch (icon) {
      case "🌞":
        setIcon("🌝");
        break;
      case "🌝":
        setIcon("🌞");
        break;
    }
  }, [toggle]);

  return <button onClick={() => setToggle((prev) => !prev)}>{icon}</button>;
}
