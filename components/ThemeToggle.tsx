"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const KEY = "prorouter-theme";
const THEME_EVENT = "prorouter-theme-change";

function readTheme(): "dark" | "light" {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* private mode */
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme: "dark" | "light") {
  const root = document.documentElement;
  root.classList.toggle("light", theme === "light");
  root.classList.toggle("dark", theme === "dark");
}

/**
 * Theme toggle — switches between dark and light by toggling the `light`
 * class on <html>. The pre-paint script in the root layout applies the saved
 * choice before first paint; this component keeps React state and the DOM in
 * sync and re-applies the class when React remounts <html> in development.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useLayoutEffect(() => {
    const initial = readTheme();
    setTheme(initial);
    applyTheme(initial);
    // React resets <html>'s class list on Strict Mode remounts in dev only.
  }, []);

  useEffect(() => {
    // Keep multiple toggles on the page (desktop nav + mobile drawer) in sync.
    function onChange(e: Event) {
      const next = (e as CustomEvent<string>).detail;
      if (next === "light" || next === "dark") setTheme(next);
    }
    window.addEventListener(THEME_EVENT, onChange);
    return () => window.removeEventListener(THEME_EVENT, onChange);
  }, []);

  function toggle() {
    const next: "dark" | "light" = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* private mode — theme still applies for this page view */
    }
    window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: next }));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex size-9 cursor-pointer items-center justify-center rounded-md text-mut transition-colors duration-200 hover:bg-white/[0.06] hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {theme === "dark" ? (
        <Sun className="size-4" strokeWidth={1.75} aria-hidden="true" />
      ) : (
        <Moon className="size-4" strokeWidth={1.75} aria-hidden="true" />
      )}
    </button>
  );
}
