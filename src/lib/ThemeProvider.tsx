import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
	theme: Theme;
	toggle: () => void;
	setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	const [theme, setThemeState] = useState<Theme>(() => {
		try {
			const stored = localStorage.getItem("theme");
			if (stored === "dark" || stored === "light") return stored as Theme;
		} catch (e) {}
		return "light";
	});

	useEffect(() => {
		const root = document.documentElement;
		if (theme === "dark") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
		try {
			localStorage.setItem("theme", theme);
		} catch (e) {}
	}, [theme]);

	const toggle = () => setThemeState((prev) => (prev === "dark" ? "light" : "dark"));

	return <ThemeContext.Provider value={{ theme, toggle, setTheme: setThemeState }}>{children}</ThemeContext.Provider>;
};

export function useTheme() {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
	return ctx;
}
