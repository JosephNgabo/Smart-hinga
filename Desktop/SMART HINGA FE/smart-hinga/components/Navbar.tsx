'use client'
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { useRouter } from 'next/navigation';




const Navbar = () => {
    const router = useRouter();
    const handleGetStartedClick = () => {
        router.push('/users');
      };

    return (
        <nav className="border-1 border-red-5 flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image src="/HINGAS.svg" alt="smart hinga" width={150} height={150} />
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
                    onClick={handleGetStartedClick}
                    />
            </div>
            <Image src="/menu.svg" alt="menu" width={30} height={30} 
            className="inline-block cursor-pointer lg:hidden"/>
        </nav>
    );
};

export default Navbar;
