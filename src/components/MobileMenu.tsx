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
                <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="end">
                {navItems.map((item) => (
                    <DropdownMenuItem key={item.title}>
                        <a href={item.path}>{item.title}</a>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
