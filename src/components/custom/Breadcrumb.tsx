'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LucideCalendarDays } from 'lucide-react';
import moment from 'moment';

const Breadcrumb = () => {
  const pathname = usePathname();
  const breadcrumbs = pathname
    .split('/')
    .filter(Boolean)
    .filter((item) => item !== '');
  const today = new Date();
  return (
    <section className="px-4">
      <div className="flex items-center justify-between h-[58px]">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-2">
            <Home size={14} className="text-neutral-400" />
            <Link href="/">
              <p className="text-neutral-400 hover:underline text-sm">Dashboard</p>
            </Link>
            {breadcrumbs.map((item: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="text-neutral-400"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
                <p className="capitalize text-neutral-500 text-sm">{item.replace(/-/g, ' ')}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <LucideCalendarDays size={16} className="text-primary" />
          <span className="text-sm text-primary font-medium leading-6">
            {moment(today).format('MMMM DD, YYYY')}
          </span>
        </div>
      </div>
      <div className="capitalize text-3xl font-semibold text-neutral-700">{breadcrumbs[0]}</div>
    </section>
  );
};

export default Breadcrumb;
