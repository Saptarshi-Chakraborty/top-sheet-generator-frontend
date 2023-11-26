"use client";

import { useContext, useLayoutEffect } from 'react'
import { ConfigContext } from './ConfigProvider';
import { ExperimentalToggleButton } from './templateComponents'
import { useRouter } from 'next/router';
import { isAdminLoggedIn } from './AdminAuth';

const AdminDashboard = () => {
    const router = useRouter();

    // get the config from the context
    const { config, setConfig } = useContext(ConfigContext);
    // console.log('config', config);

    // check if the admin is logged in
    useLayoutEffect(() => {
        if (isAdminLoggedIn() === false) {
            router.push('/experimental/admin/login')
        }

        // eslint-disable-line
        return () => {
            // cleanup
        };
    }, [])


    return (
        <>
            <h1 className='text-center'>Admin Dashboard</h1>

            <section className="border border-2 border-danger min-vh-50 p-2">
                <h2>All the Configurations of the website</h2>

                {/* IF the data is fetched from server or not */}
                <div className='my-3'>
                    <p className='mb-0'>
                        <strong>Data Fetching Status : &nbsp;</strong>
                        {
                            config.hasFetched ?
                                <span className="badge text-bg-success">Success</span>
                                :
                                <span className="badge text-bg-danger">Not Fetched</span>
                        }
                    </p>
                </div>

                {/* Last fetched time */}
                {
                    config.timestamp &&
                    <div className='my-3'>
                        <p className='mb-0'>
                            <strong>Last Fetched Time : &nbsp;</strong>

                            <span className="badge text-bg-success">{new Date(config.timestamp)}</span>
                        </p>
                    </div>
                }

                {/* Configurations */}
                <h3>All the Pages of the Website : </h3>

                <ExperimentalToggleButton fieldName="homePage" title="Home Page" />


            </section>
        </>
    )
}

export default AdminDashboard