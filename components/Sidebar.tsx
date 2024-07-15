'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { SIDEBAR_LINKS } from '@/constants';
import Image from 'next/image';

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
      <div className='flex flex- flex-col gap-6'>
        {SIDEBAR_LINKS.map((link) => {
          const isActive = pathname === (link.route || pathname.startsWith(link.route));
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn('flex gap-4 items-center rounded-lg p-4 justify-start', {
                'bg-blue-1': isActive,
              })}>
              <Image src={link.imageUrl} alt={link.label} width={24} height={24} />
              <p className='text-lg font-semibold max-lg:hidden'>{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
