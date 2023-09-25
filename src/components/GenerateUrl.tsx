'use client'
import React from "react"
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next-intl/client'
import { useSearchParams } from 'next/navigation'

export default function GenerateUrl() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathName = usePathname()

    const handleAddParams = () => {
        router.replace(`${pathName}?test=1`)
    }

    return (
        <div>
            <button onClick={handleAddParams}>Add params</button>
        </div>
    )
};
