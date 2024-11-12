import Link from "next/link";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full px-6 py-4 bg-black flex items-center justify-between z-50">
            
            {/* LOGO CONTENT */}
            <div className="flex items-center">
                <h2 className="text-orange-400 text-xl sm:text-2xl font-bold">The Perfume</h2>
                <span className="text-green-500 ml-1">🍃</span>
            </div>

            {/* Centered LINK MENU for Desktop */}
            <div className="hidden md:flex flex-1 justify-center space-x-6 text-white text-lg">
                <Link href="/" className="hover:text-orange-400">Home</Link>
                <Link href="/product" className="hover:text-orange-400">Product</Link>
                <Link href="/about" className="hover:text-orange-400">About</Link>
                <Link href="/contact" className="hover:text-orange-400">Contact</Link>
            </div>

            {/* MENU CONTENT for Mobile */}
            <Sheet>
                <SheetTrigger className="md:hidden">
                    <Menu className="text-white w-8 h-8" />
                </SheetTrigger>
                <SheetContent className="bg-black text-white">
                    {/* Logo */}
                    <div className="flex items-center justify-start px-4 py-2">
                        <h2 className="text-orange-400 text-xl sm:text-2xl font-bold">The Perfume</h2>
                        <span className="text-green-500 ml-1">🍃</span>
                    </div>
                    <ul className="mt-4 space-y-4 text-lg px-4">
                        <li>
                            <SheetClose asChild>
                                <Link href="/" className="hover:text-orange-400">Home</Link>
                            </SheetClose>
                        </li>
                        <li>
                            <SheetClose asChild>
                                <Link href="/product" className="hover:text-orange-400">Product</Link>
                            </SheetClose>
                        </li>
                        <li>
                            <SheetClose asChild>
                                <Link href="/about" className="hover:text-orange-400">About</Link>
                            </SheetClose>
                        </li>
                        <li>
                            <SheetClose asChild>
                                <Link href="/contact" className="hover:text-orange-400">Contact</Link>
                            </SheetClose>
                        </li>
                    </ul>
                </SheetContent>
            </Sheet>
        </header>
    );
}
