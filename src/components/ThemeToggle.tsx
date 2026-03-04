import * as React from "react";
import { flushSync } from 'react-dom';
import { Moon, Sun } from "lucide-react";

import { Button } from "@components/ui/button";

export function ThemeToggle() {
    const [theme, setTheme] = React.useState<"light" | "dark">("light");
    const ref = React.useRef<HTMLButtonElement>(null);

    const toggleDarkMode = async () => {
        const isDarkMode = theme === "dark";

        if (
            !ref.current ||
            !document.startViewTransition ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            setTheme(isDarkMode ? "light" : "dark");
            return;
        }

        const { top, left, width, height } = ref.current.getBoundingClientRect();
        const x = left + width / 2;
        const y = top + height / 2;
        const right = window.innerWidth - left;
        const bottom = window.innerHeight - top;
        const maxRadius = Math.hypot(
            Math.max(left, right),
            Math.max(top, bottom),
        );

        await document.startViewTransition(() => {
            flushSync(() => {
                setTheme(isDarkMode ? "light" : "dark");
            });
        }).ready;

        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRadius}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration: 600,
                easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
                pseudoElement: '::view-transition-new(root)',
            }
        );

        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRadius}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration: 600,
                easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
                pseudoElement: '::view-transition-new(navbar)',
            }
        );
    };

    React.useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light" || savedTheme === "dark") {
            setTheme(savedTheme);
        } else {
            const isDarkMode = document.documentElement.classList.contains("dark");
            setTheme(isDarkMode ? "dark" : "light");
        }
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
            onClick={toggleDarkMode}
            ref={ref}
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
