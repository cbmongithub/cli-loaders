"use client";

import { useLoaded } from '@/hooks/use-loaded';
import { useToggle } from '@/hooks/use-toggle';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useCallback, useEffect, useState } from 'react';

const Nav = dynamic(() => import('@/components/Nav').then((mod) => mod.Nav));
const IconGroup = dynamic(() => import('@/components/Icons').then((mod) => mod.IconGroup));

export const SVG_PATH_OPEN = {
    opened: { d: 'M3.06061 2.99999L21.0606 21' },
    moving: { d: 'M0 8.5L24 8.5' },
    closed: { d: 'M0 8.5L24 8.5' },
}

export const SVG_PATH_CLOSE = {
    opened: { d: 'M3.00006 21.0607L21 3.06064' },
    moving: { d: 'M0 14.5L24 14.5' },
    closed: { d: 'M0 14.5L12 14.5' },
}

export const Header = memo(() => {
    const [animation, setAnimation] = useState('closed');
    const [isLoaded] = useLoaded();
    const [isOpen, toggleIsVisible] = useToggle(false);

    const handleMenuToggle = useCallback(() => {
        toggleIsVisible();
        setAnimation('moving');
        setTimeout(() => {
            setAnimation(isOpen ? 'closed' : 'opened');
        }, 1000);
    }, [isOpen, toggleIsVisible]);

    useEffect(() => {
        const bodyClass = document.querySelector('body')?.classList;
        if (bodyClass) {
            if (isOpen) {
                bodyClass.add('overflow-hidden');
            }

            return () => {
                bodyClass.remove('overflow-hidden');
            };
        }

    }, [isOpen]);

    return (
        <>
            {isLoaded && (<Nav isOpen={isOpen} onToggle={handleMenuToggle} />)}
            <header className='z-50 flex p-6 h-20 items-center justify-between bg-black'>
                <Link href='/' aria-label="Cli Loaders Logo" aria-hidden="false" tabIndex={0} className='inline-flex items-center gap-2'>
                    <Image role='img' className="z-50" alt="cli-loaders logo" src="/icon.svg" width={24} height={24} /><span className='text-md sm:text-lg'>cli-loaders</span>
                </Link>
                {isLoaded && (<IconGroup className="hidden lg:flex lg:gap-x-6" />)}
                <button
                    className='p-1 px-2 border border-neutral-800 lg:hidden flex flex-col justify-center items-center focus:ring focus:ring-neutral-800 active:ring active:ring-neutral-700 focus-visible:ring focus-visible:ring-neutral-800 focus-within:ring focus-within:ring-neutral-800 hover:ring hover:ring-neutral-800 target:ring target:ring-neutral-800'
                    type='button'
                    aria-label='Nav Toggle'
                    role='button'
                    onClick={handleMenuToggle}>
                    <svg
                        className='outline-none'
                        aria-hidden='false'
                        tabIndex={5}
                        width='18'
                        height='18'
                        viewBox='0 0 24 24'>
                        <motion.path
                            stroke='#FFFFFF'
                            animate={animation}
                            variants={SVG_PATH_OPEN}
                        />
                        <motion.path
                            stroke='#FFFFFF'
                            animate={animation}
                            variants={SVG_PATH_CLOSE}
                        />
                    </svg>
                </button>
            </header>
        </>
    );
});

Header.displayName = 'Header';