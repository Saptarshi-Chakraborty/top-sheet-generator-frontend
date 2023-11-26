import AdminLoginPage from '@components/ExperimentalComponents/Admin/AdminLogin'
import AdminNavbar from '@components/ExperimentalComponents/Admin/AdminNavbar'
import React, { useLayoutEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { isAdminLoggedIn } from '@components/ExperimentalComponents/Admin/AdminAuth'


const login = () => {
    const router = useRouter();

    // // check if the admin is logged in
    useLayoutEffect(() => {
        if (isAdminLoggedIn()) {
            router.push('/experimental/admin/dashboard')
        }

        return () => {
            // cleanup
        };
    }, [])

    return (<>
        <Head>
            <title>Admin Login | Top Sheet Generator</title>
        </Head>

        <AdminNavbar />

        <main className="container my-2">
            <AdminLoginPage />
        </main>

    </>
    )
}

export default login