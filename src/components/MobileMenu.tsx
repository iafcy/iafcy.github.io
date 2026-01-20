import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { Menu } from "lucide-react";

type NavProps = {
    navItems: { title: string; path: string }[];
};

export function MobileMenu({ navItems }: NavProps) {
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger>
                <Menu className="h-[1.2rem] w-[1.2rem]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="end">
                {navItems.map((item) => (
                    <DropdownMenuItem key={item.title} asChild>
                        <a href={item.path}>{item.title}</a>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
