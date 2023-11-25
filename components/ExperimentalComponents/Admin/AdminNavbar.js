import Link from 'next/link'
import React, { useLayoutEffect, useState } from 'react'
import { isAdminLoggedIn, logoutAdmin } from './AdminAuth'

const AdminNavbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useLayoutEffect(() => {
        setIsLoggedIn(isAdminLoggedIn())
    }, [])

    console.log('isALoggedIn', isLoggedIn);

    // If admin is not logged in, then show this navbar
    if (isLoggedIn === false) {
        return <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container-fluid">

                    <Link className="navbar-brand" href="/experimental/admin">
                        <b> Admin Pannel</b>
                    </Link>

                    {/* Hamburger for Small Screen Navigation */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Options */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" ></ul>

                        <div className="me-5">
                            <b className='text-danger fs-5'>This page is only accessible for the Admin of the Website</b>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    }

    // If admin is logged in, then show this navbar in all pages
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container-fluid">

                <Link className="navbar-brand" href="/experimental/admin">
                    <b> Admin Pannel</b>
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
                                <Link className="nav-link active" aria-current="page" href="/experimental/admin">Home</Link>
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
                                <Link className="nav-link text-decoration-underline active text-bg-success" aria-current="page" href="/">Main Website</Link>
                            </li>

                            {
                                (isLoggedIn) &&
                                <li className="nav-item">
                                    <button onClick={logoutAdmin} className="btn btn-danger" aria-current="page" href="/experimental/admin/logout">Logout</button>
                                </li>

                            }

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default AdminNavbar