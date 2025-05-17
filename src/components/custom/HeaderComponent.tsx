"use client"
import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MailboxIcon, Search, UserCircle2 } from 'lucide-react'

const HeaderComponent = () => {

    const pathname = usePathname()

    return (
        <header className='flex items-center justify-between h-[58.5px] bg-white px-4'>
            <div className='flex items-center gap-2.5'>
                <SidebarTrigger className='hover:bg-neutral-700 text-neutral-400 hover:text-neutral-50' />

                <div className='ms-5 flex items-center gap-x-3'>
                    <Link href="/calendar" className={`${pathname === "/calendar" ? "bg-primary text-white" : "bg-neutral-50"} text-xs px-3 py-1.5 rounded text-neutral-500 hover:bg-primary hover:text-white transition-all duration-200 eas-in-out`}>
                        Calendar
                    </Link>

                    <Link href="/statistic" className={`${pathname === "/statistic" ? "bg-primary text-white" : "bg-neutral-50"} text-xs px-3 py-1.5 rounded text-neutral-500 hover:bg-primary hover:text-white transition-all duration-200 eas-in-out`}>
                        Statistics
                    </Link>

                    <Link href="/employee" className={`${pathname === "/employee" ? "bg-primary text-white" : "bg-neutral-50"} text-xs px-3 py-1.5 rounded text-neutral-500 hover:bg-primary hover:text-white transition-all duration-200 eas-in-out`}>
                        Employee
                    </Link>

                    <div className='text-xs px-2 py-1.5 rounded text-neutral-500 bg-neutral-50 flex items-center gap-2'>
                        <Search size={14} className='text-neutral-400' />
                        <input type="text" placeholder='Search' className=' outline-0 text-neutral-400' />
                    </div>

                </div>

            </div>

            <div className='flex items-center gap-4'>
                <Link href="/inbox" className='bg-neutral-50 border border-neutral-200 h-7 flex items-center justify-center px-2 gap-2 rounded' >
                    <MailboxIcon size={14} className='text-neutral-500' />
                    <span className='text-xs text-neutral-500'>Inbox</span>
                </Link>
                <Link href="/account" >
                    <UserCircle2 size={24} className='text-neutral-500' strokeWidth={1.4} />
                </Link>
            </div>
        </header>
    )
}

export default HeaderComponent