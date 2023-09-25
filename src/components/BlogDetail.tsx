'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl';

export default function BlogDetail() {
    const { id } = useParams();
    const t = useTranslations('Index')

    return (
        <section className="text-center bg-emerald-700">
            <h1>{t('blogDetail.title')} {id}</h1>
        </section>
    )
};
