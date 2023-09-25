'use client'
import React from "react";
import Link from "next-intl/link"
import { usePathname } from 'next-intl/client'
import { useSearchParams, usePathname as useNextPathname } from 'next/navigation'

const locales = ['vn', 'en']

export default function LanguageSwitcher() {

    const searchParams = useSearchParams()
    const pathName = usePathname()
    const nextPathName = useNextPathname()

    const redirectedPathName = () => {
        if (!pathName) return '/'
        console.log('pathName', pathName)
        console.log('nextPathName', nextPathName)

        const segments = pathName.split('/')
        // segments.splice(1, 1)
        return segments.join('/') //+ (searchParams.toString().length > 0 ? '?' : '') + searchParams.toString()
    }

    return (
        <div className="text-white flex gap-2">
            {locales.map(locale => (
                <Link
                    href={redirectedPathName()}
                    locale={locale}
                    key={locale}
                    className="border bg-blue-400 px-3"
                >{locale}</Link>
            ))}
        </div>
    )
};
