'use client';

import Link from 'next/link';
import React from 'react'
import { isLocalEnvironment } from '../utility/localEnvironment';

const Navbar = () => {
    const isLocal = isLocalEnvironment();

    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container-fluid">

                    <Link className="navbar-brand" href="/">
                        <img src="/favicon.png" alt="FIEM" width="30" height="30" className="d-inline-block align-text-top" />
                        <b>&nbsp; TOP&nbsp; SHEET&nbsp; GENERATOR</b>
                    </Link>

                    {/* Hamburger for Small Screen Navigation */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Options */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ visibility: "hidden" }}>
                        </ul>

                        <div className="me-5">
                            <ul className="d-flex navbar-nav me-auto mb-2 mb-lg-0 gap-2">

                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="/allpdfs">All PDFs</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="/ca1">CA1 Exam</Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">PDF Tools</a>

                                    <ul className="dropdown-menu dropdown-menu-dark text-white">
                                        <li><Link className="dropdown-item" href="/pdftools/pdf-merger">Merge PDF</Link></li>
                                        <li><Link className="dropdown-item" href="/pdftools/pdf-compressor">Compress PDF</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="/feedback">Feedback</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active" target='_blank' aria-current="page" href="https://www.termsfeed.com/live/5ca6cbb8-fae5-4065-9515-c43132bad8ed">Privacy Policy</Link>
                                </li>
                                
                                {

                                    (isLocal) &&
                                    <li className="nav-item">
                                        <Link className="nav-link text-decoration-underline active text-bg-info" aria-current="page" href="/experimental">Experimental</Link>
                                    </li>
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar