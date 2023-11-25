import AdminLoginPage from '@components/ExperimentalComponents/Admin/AdminLogin'
import AdminNavbar from '@components/ExperimentalComponents/Admin/AdminNavbar'
import React from 'react'
import Head from 'next/head'

const login = () => {
    return (<>
        <Head>
            <title>Admin Login Page</title>
        </Head>

        <AdminNavbar />

        <main className="container my-2">

            <AdminLoginPage />
        </main>
    </>
    )
}

export default login