'use client';

import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center font-monospace mt-5">
            <span>Made with 💖 by SC&trade;</span> |
            <a className="text-decoration-none text-black"
                href="mailto:saptarshi.chakraborty.04.sc@gmail.com?subject=Feedback from top sheet generator website"> saptarshi.chakraborty.04sc@gmail.com</a>
            <br />
            <span>{`${String.fromCodePoint(0x00A9)}`} 2022-23</span>
        </footer>
    )
}

export default Footer 