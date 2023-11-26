'use client';

import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center font-monospace mt-4">
            <hr />

            <p><Link href="/feedback" className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-4">Leave a Message</Link></p>

            <p className='mb-1'><a target='_blank' href="https://www.termsfeed.com/live/5ca6cbb8-fae5-4065-9515-c43132bad8ed">Privacy Policy</a></p>

            <p className='text-center my-0'>
                Made with ❤️ by&nbsp;
                <Link className="text-black text-decoration-none" target='_blank' href="https://www.linkedin.com/in/saptarshi-chakraborty-sc/">SC&trade;</Link>
            </p>
            <span>{`${String.fromCodePoint(0x00A9)}`} 2022-26</span>

        </footer>
    )
}

export default Footer 