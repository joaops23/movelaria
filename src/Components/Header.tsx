import Image from "next/image";
import Link from "next/link";
import { FC } from "react"
interface HeaderProps {
    title?: string;
}

const Header: FC<HeaderProps> = ({title = "Movelaria Odara"}) => {
    return (
          <header className="bg-[#E0DEAB] text-[#85685a] p-4 shadow-md">
            <div>
            </div>
            <div className="container mx-auto flex items-center space-x-15">
                <h1 className="text-xl font-bold">
                <Link href="/">{title}</Link>
                </h1>
                <nav className="space-x-4 text-[#85685a]">
                <Link href="/" className="hover:underline font-bold dark:text-sky-400/100">Home</Link>
                <Link href='/Services' className="hover:underline font-bold dark:text-sky-400/100">Portifólio</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;