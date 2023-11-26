"use client";

import AdminNavbar from '@components/ExperimentalComponents/Admin/AdminNavbar'
import Head from 'next/head'
import AdminDashboard from '@components/ExperimentalComponents/Admin/AdminDashboard';
import { isAdminLoggedIn } from '@components/ExperimentalComponents/Admin/AdminAuth';
import { useRouter } from 'next/router';
import { ConfigProvider } from '@components/ExperimentalComponents/Admin/ConfigProvider';
import { useLayoutEffect } from 'react';


const dashboard = () => {
    const router = useRouter();

    // check if the admin is logged in
    useLayoutEffect(() => {
        if (isAdminLoggedIn() === false) {
            router.push('/experimental/admin/login');

        }

        // eslint-disable-line

    }, [])


    return (<>
        <Head>
            <title>Admin Dashboard | Top Sheet Generator</title>
        </Head>

        <AdminNavbar />

        <main className="container my-2">
            {/* wrap the component with config provider */}

            <ConfigProvider>
                <AdminDashboard />
            </ConfigProvider>

        </main>

    </>
    )
}

export default dashboard