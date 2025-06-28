import { motion } from "framer-motion";

type HeadingProps = {
    text: string;
};

export default function HeadingWithUnderline({ text }: HeadingProps) {
    return (
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
            {text}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                exit={{ width: 0 }}
                transition={{ duration: 0.75, ease: "circInOut" }}
                viewport={{ amount: 1 }}
                className="absolute -z-10 h-4 w-full bg-mizugaki/50 dark:bg-mizugaki/70 -bottom-1"
            ></motion.div>
            <noscript>
                <div className="absolute -z-10 h-4 w-full bg-mizugaki/50 dark:bg-mizugaki/70 -bottom-1" />
            </noscript>
        </h2>
    );
}
