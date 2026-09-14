import { Mail, Github, Linkedin, GraduationCap } from "lucide-react";
import type { CSSProperties } from "react";

export function Contacts() {
    const contacts = [
        {
            url: "https://scholar.google.com/citations?hl=en&user=MJ4E5ykAAAAJ",
            icon: <GraduationCap className="h-7 w-7" />
        },
        {
            url: "https://github.com/iafcy",
            icon: <Github className="h-7 w-7" />,
        },
        {
            url: "https://linkedin.com/in/yiu-fai-cheung",
            icon: <Linkedin className="h-7 w-7" />,
        },
        {
            url: "mailto:yfcheung@link.cuhk.edu.hk",
            icon: <Mail className="h-7 w-7" />,
        },
    ];

    return (
        <div className="flex justify-center gap-4 flex-row">
            {contacts.map((contact, i) => (
                <div
                    key={contact.url}
                    className="overflow-hidden h-7 contacts-mask"
                    style={{ "--hero-delay": `${i * 70}ms` } as CSSProperties}
                >
                    <a href={contact.url} className="h-7 w-7 block">
                        {contact.icon}
                    </a>
                </div>
            ))}
        </div>
    );
}