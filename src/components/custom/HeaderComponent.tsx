"use client"
import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HeaderComponent = () => {
    const pathname = usePathname();
    // Filter out empty segments and ignore the first empty segment from split("/")
    const breadcrumbs = pathname.split("/").filter(Boolean).filter(item => item !== "");

    return (
        <header className='flex items-center justify-between border-b border-neutral-700 h-[50px] bg-neutral-800 px-4'>
            <div className='flex items-center gap-2.5'>
                <SidebarTrigger className='hover:bg-neutral-700 text-white hover:text-neutral-50' />
                <div className='flex items-center gap-2'>
                    <Link href="/">
                        <p className='text-neutral-50 font-medium hover:underline'>Dashboard</p>
                    </Link>

                    {breadcrumbs.map((item: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2">
                            <Image
                                src="../../../assets/arrow-right.svg"
                                width={14}
                                height={14}
                                alt="Separator"
                                className="text-neutral-400"
                            />
                            <p className="capitalize text-neutral-50 font-medium">
                                {item.replace(/-/g, ' ')} {/* Replace hyphens with spaces */}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex items-center gap-4'>
                <Link href="#" >
                    <Image
                        src="../../../assets/mail.svg"
                        width={20}
                        height={20}
                        alt='Notifications'
                    />
                </Link>
                <Link href="#" >
                    <Image
                        src="../../../assets/account.svg"
                        width={24}
                        height={24}
                        alt='User Profile'
                    />
                </Link>
            </div>
        </header>
    )
}

export default HeaderComponent