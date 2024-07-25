'use client';

import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center font-monospace mt-4">
            <hr />

            <p><Link href="/feedback" className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-4">Leave a Message</Link></p>

            <div className="d-flex align-items-center justify-content-center gap-2">
                {/* <p className='mb-1'><a className="link-primary link-offset-1 link-underline-opacity-75" target='_blank' href="https://www.termsfeed.com/live/5ca6cbb8-fae5-4065-9515-c43132bad8ed">Privacy Policy</a></p> */}
                <p className='mb-1'><a className="link-primary link-offset-1 link-underline-opacity-75" target='_blank' href="/privacy-policy">Privacy Policy</a></p>

                <span className="text-primary">&#xb7;</span>

                <p className='mb-1'><a className="link-primary link-offset-1 link-underline-opacity-75" target='_blank' href="https://app.eraser.io/workspace/3D8Nk5huF6Q5EhqOFJJh">Documentation</a></p>
            </div>

            <p className='text-center my-0'>
                Made with ❤️ by&nbsp;
                <Link className="text-black link-dark link-offset-1 link-underline-opacity-50 link-underline-opacity-75-hover" target='_blank' href="https://linktr.ee/saptarshi_chakraborty">SC&trade;</Link>
            </p>
            <span>{`${String.fromCodePoint(0x00A9)}`} 2022-26</span>

        </footer>
    )
}

export default Footer 