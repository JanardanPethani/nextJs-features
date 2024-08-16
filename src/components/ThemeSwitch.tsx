"use client";
import { useState } from "react";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  return (
    <button
      className="border rounded-md p-1 w-12"
      onClick={() => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);

        if (theme === "light") {
          document?.querySelector("html")?.classList.add("dark");
          document?.querySelector("html")?.classList.remove("light");
        } else {
          document?.querySelector("html")?.classList.add("light");
          document?.querySelector("html")?.classList.remove("dark");
        }
      }}
    >
      {theme}
    </button>
  );
}
