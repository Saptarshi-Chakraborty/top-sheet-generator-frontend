import Navbar from '@components/NavBar'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <>
            <Head>
                <title>Experimental Page</title>
            </Head>
            
            <Navbar />

            <div className="container my-2">
                <h1>Experimental Page</h1>
                <p>These are for testing purposes only.</p>

                <h2>Pages</h2>
                <ul>
                    <li><Link href="/experimental/admin/login">Admin Login Page</Link></li>
                </ul>

            </div>
        </>
    )
}

export default index