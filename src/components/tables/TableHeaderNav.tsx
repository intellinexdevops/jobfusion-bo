"use client"
import { ListFilterIcon, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const TableHeaderNav = () => {
    return (
        <div className='px-4 py-3 border-b border-neutral-100 flex items-center justify-between'>
            <div>
                <p className='text-neutral-500 text-[16px] font-medium'>User List</p>
                <p className='text-xs text-neutral-400'>Total 453 records</p>
            </div>
            <div className='flex items-center gap-3'>
                <div className='h-[34px] bg-neutral-50 rounded flex items-center gap-2 px-3'>
                    <Search size={14} className='text-neutral-400' />
                    <input type="text" placeholder='Search' className='text-xs text-neutral-500 h-full outline-0' />
                </div>

                <Link href="#" className='h-[34px] bg-neutral-50 rounded-[6px] flex items-center justify-center gap-1.5 px-3'>
                    <ListFilterIcon size={14} className='text-neutral-400' />
                    <p className='text-xs text-neutral-400 outline-0'>Filter</p>
                </Link>

                <Link href="/user/create" className='h-[34px] bg-primary rounded-[6px] flex items-center justify-center gap-1.5 px-3'>
                    {/* <Plus size={14} className='text-neutral-50' /> */}
                    <p className='text-xs text-neutral-50 outline-0'>New User</p>
                </Link>
            </div>
        </div>
    )
}

export default TableHeaderNav