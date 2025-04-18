import * as React from "react";
import { Mail, Github, Linkedin, GraduationCap } from "lucide-react";

export function Contacts() {
    const contacts = [
        {
            url: "mailto:yfcheung2@cse.cuhk.edu.hk",
            icon: <Mail className="h-7 w-7" />,
        },
        {
            url: "https://github.com/iafcy",
            icon: <Github className="h-7 w-7" />,
        },
        {
            url: "https://linkedin.com/in/yiu-fai-cheung",
            icon: <Linkedin className="h-7 w-7" />,
        },
    ];

    return (
        <div className="flex justify-center gap-4 flex-row">
            {contacts.map(contact => (
                <a href={contact.url} className="h-7 w-7">
                    {contact.icon}
                </a>
            ))}
        </div>
    );
}