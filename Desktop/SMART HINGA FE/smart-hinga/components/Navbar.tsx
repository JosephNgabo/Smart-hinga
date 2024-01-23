import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
    return (
        <nav className="border-2 border-red-5 flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image src="/logosmart.PNG" alt="smart hinga" width={80} height={80} />
            </Link>
            <ul className="hidden h-ful gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link
                        href={link.href}
                        key={link.href}
                        className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                    >
                        {link.label}
                    </Link>
                ))}
            </ul>
            <div className="lg:flexCenter hidden">
                <Button
                    type='button'
                    title='Get started'
                    icon="/user.svg"
                    variant='btn_dark_green'
                />
            </div>
            <Image src="/menu.svg" alt="menu" width={30} height={30} 
            className="inline-block cursor-pointer lg:hidden"/>
        </nav>
    );
};

export default Navbar;
