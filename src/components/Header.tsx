'use client'
import React from "react";
import Link from "next/link";
import { useLocale } from 'next-intl'
import LanguageSwitcher from "./LanguageSwitcher";
import GenerateUrl from "./GenerateUrl";

export default function Header() {
    const locale = useLocale()
    console.log(locale)

    return (
        <header className="p-4 flex justify-around">
            <nav className="flex gap-2">
                <Link href={`/${locale}`}>Home</Link>
                <Link href={`/${locale}/blogs`}>BLogs</Link>
            </nav>
            <GenerateUrl />
            <LanguageSwitcher />
        </header>
    )
};
