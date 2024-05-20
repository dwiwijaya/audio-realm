import { useTheme } from 'next-themes';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import LogoDark from '@/assets/logo/dark.png';
import LogoLight from '@/assets/logo/light.png';
import Link from 'next/link';
import SignoutToggle from '../elements/toggles/SignoutToggle';
import { useUser } from '@/context/user';

const Navbar = () => {
    const user = useUser();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-color-mode", newTheme);
        setTheme(newTheme);
    };

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <nav className="bg-container p-2 mb-4 ">
            <div className="container mx-auto flex justify-between items-center">
                <div className=" font-bold flex gap-2 items-center">
                    <Image width={24} height={24} src={theme == 'dark' ? LogoDark : LogoLight} alt="Dwi-logo" />
                    <p className='text-title'>Audio Realm</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className='border rounded-md border-stroke p-3 flex items-center justify-center' onClick={toggleTheme}>
                        <i className={`group-active:rotate-90 transition-3s bx bx-${theme == 'dark' ? 'moon' : 'sun'}`} />
                    </button>
                    {!user ? <Link href="auth/signin" className="btn text-title hover:text-gray-300">Login</Link> : <SignoutToggle/>}
                </div>
            </div>
        </nav>

    )
}

export default Navbar