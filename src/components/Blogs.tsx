'use client'
import React, { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next-intl/client'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export interface IBlog {
    id: number,
    name: string;
    content: string;
}

export default function Blogs() {
    const [blogs, setBlogs] = useState<IBlog[]>([])
    const locale = useLocale()
    const t = useTranslations('Index');

    const router = useRouter()
    const searchParams = useSearchParams()
    const pathName = usePathname()

    const handleCreateBlog = () => {
        console.log('handle create blog')
        setBlogs(prev => [...prev, {
            id: Math.random(),
            name: `Blog ${prev.length + 1}`,
            content: `Content ${prev.length + 1}`
        }])
    }

    return (
        <section>
            <h1>{t('title')}</h1>
            <button onClick={handleCreateBlog}>Create blog</button>

            <ul className='text-white'>
                {blogs.map(b => (
                    <li key={b.id}>
                        <div>
                            <h3><strong>Name: </strong><Link href={`/${locale}/blogs/${b.id}`}>{b.name}</Link></h3>
                            <p><strong>Content: </strong>{b.content}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
};
