import React from 'react'
import subscirber from "../../../public/assets/ic_user.svg";
import users from "../../../public/assets/ic_users.svg";
import earth from "../../../public/assets/ic_earth.svg";
import Image from 'next/image';
import { ShieldQuestionIcon } from 'lucide-react';

const UserDashboard = () => {
    return (
        <div className='grid grid-cols-3 gap-5'>
            <div className='bg-white p-5 rounded-xl flex gap-4 items-start'>
                <Image src={subscirber} alt='Subscriber' width={60} height={60} />
                <div className='flex  w-full'>
                    <div className='flex flex-col w-full'>
                        <span className='text-2xl font-bold text-neutral-600'>124,000</span>
                        <span className='text-xs text-neutral-400'>Subscriber</span>
                        <div className='flex items-center gap-1 mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><mask id="ipSUpOne0"><path fill="#fff" stroke="#fff" strokeLinejoin="round" strokeWidth="4" d="m12 29l12-12l12 12H12Z" /></mask><path fill="#2DCE89" d="M0 0h48v48H0z" mask="url(#ipSUpOne0)" /></svg>
                            <span className='text-[#2DCE89] text-xs font-semibold'>50%</span>
                            <span className='text-xs text-neutral-400'>last 7 days</span>
                        </div>
                    </div>
                    <div>
                        <ShieldQuestionIcon size={16} className='text-neutral-400' />
                    </div>
                </div>
            </div>

            <div className='bg-white p-5 rounded-xl flex gap-4 items-start'>
                <Image src={earth} alt='User from abroad' width={60} height={60} />
                <div className='flex  w-full'>
                    <div className='flex flex-col w-full'>
                        <span className='text-2xl font-bold text-neutral-600'>124,000</span>
                        <span className='text-xs text-neutral-400'>User from abroad</span>
                        <div className='flex items-center gap-1 mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><mask id="ipSDownOne0"><path fill="#fff" stroke="#fff" strokeLinejoin="round" strokeWidth="4" d="M36 19L24 31L12 19h24Z" /></mask><path fill="#EE6A5F" d="M0 0h48v48H0z" mask="url(#ipSDownOne0)" /></svg>
                            <span className='text-[#EE6A5F] text-xs font-semibold'>5%</span>
                            <span className='text-xs text-neutral-400'>last 7 days</span>
                        </div>
                    </div>
                    <div>
                        <ShieldQuestionIcon size={16} className='text-neutral-400' />
                    </div>
                </div>
            </div>

            <div className='bg-white p-5 rounded-xl flex gap-4 items-start'>
                <Image src={users} alt='Users' width={60} height={60} />
                <div className='flex  w-full'>
                    <div className='flex flex-col w-full'>
                        <span className='text-2xl font-bold text-neutral-600'>124,000</span>
                        <span className='text-xs text-neutral-400'>Total users</span>
                        <div className='flex items-center gap-1 mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><mask id="ipSDownOne0"><path fill="#fff" stroke="#fff" strokeLinejoin="round" strokeWidth="4" d="M36 19L24 31L12 19h24Z" /></mask><path fill="#EE6A5F" d="M0 0h48v48H0z" mask="url(#ipSDownOne0)" /></svg>
                            <span className='text-[#EE6A5F] text-xs font-semibold'>5%</span>
                            <span className='text-xs text-neutral-400'>last 7 days</span>
                        </div>
                    </div>
                    <div>
                        <ShieldQuestionIcon size={16} className='text-neutral-400' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard