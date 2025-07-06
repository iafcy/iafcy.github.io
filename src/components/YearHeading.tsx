import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function YearHeading({ year }: { year: number }) {
    const [isJsEnabled, setIsJsEnabled] = useState(false);

    useEffect(() => {
        setIsJsEnabled(true);
    }, []);

    const StaticLine = () => (
        <span className="flex-1 h-px bg-sumi dark:bg-shironeri" />
    );

    return (
        <h2 className="flex items-center gap-4 my-8">
            {isJsEnabled ? (
                <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.75, ease: "circInOut" }}
                    viewport={{ amount: 0.5 }}
                    className="flex-1 h-px bg-sumi dark:bg-shironeri origin-right"
                />
            ) : (
                <StaticLine />
            )}
            
            <span className="text-2xl font-bold px-4">{year}</span>
            
            {isJsEnabled ? (
                <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.75, ease: "circInOut" }}
                    viewport={{ amount: 0.5 }}
                    className="flex-1 h-px bg-sumi dark:bg-shironeri origin-left"
                />
            ) : (
                <StaticLine />
            )}
        </h2>
    );
}
