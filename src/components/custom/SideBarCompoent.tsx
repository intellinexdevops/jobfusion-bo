"use client"
import React, { PropsWithChildren } from 'react'

const SideBarCompoent = ({ children }: PropsWithChildren) => {
    return (
        <div className='bg-slate-900 h-screen fixed top-0 left-0 w-[330px]'>
            {children}
        </div>
    )
}

export default SideBarCompoent