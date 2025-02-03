import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@components/ui/button";

export function ThemeToggle() {
    const [theme, setTheme] = React.useState<"light" | "dark">("light");

    React.useEffect(() => {
        // const savedTheme = localStorage.getItem("theme");
        // if (savedTheme === "light" || savedTheme === "dark") {
        //     setTheme(savedTheme);
        // } else {
        //     const isDarkMode = document.documentElement.classList.contains("dark");
        //     setTheme(isDarkMode ? "dark" : "light");
        // }

        const isDarkMode = document.documentElement.classList.contains("dark");
        setTheme(isDarkMode ? "dark" : "light");
    }, []);

    React.useEffect(() => {
        const isDark = theme === "dark";
        document.documentElement.classList[isDark ? "add" : "remove"]("dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme == "light" ? "dark" : "light")}
            className="hover:bg-mizugaki/50 dark:hover:bg-mizugaki/70"
        >
            {theme == "light" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            )}
        </Button>
    );
}
