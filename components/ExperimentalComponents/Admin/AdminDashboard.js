"use client";

import { useContext, useLayoutEffect } from 'react'
import { ConfigContext } from './ConfigProvider';
import { ExperimentalToggleButton } from './templateComponents'
import { useRouter } from 'next/router';
import { isAdminLoggedIn } from './AdminAuth';
import FetchButton from './FetchButton';
import CONFIG_FIELDS from './ConfigFields';

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
    }, [])


    return (
        <>
            <h1 className='text-center'>Admin Dashboard</h1>

            <section className="border border-2 border-danger min-vh-50 p-2">
                <h2>All the Configurations of the website</h2>

                {/* IF the data is fetched from server or not */}
                <div className='my-3 mb-0 d-flex justify-content-between align-items-center'>
                    <div>
                        <strong>Data Fetching Status : &nbsp;</strong>
                        {
                            config.hasFetched ?
                                <span className="badge text-bg-success">Success</span>
                                :
                                <span className="badge text-bg-danger">Not Fetched</span>
                        }
                    </div>

                    <FetchButton />
                </div>

                {/* Last fetched time */}
                {
                    (config.timestamp) &&
                    <div className='my-3 mt-1 text-muted'>
                        Last Fetched Time : &nbsp;
                        <span >{Date(config.timestamp)}</span>
                    </div>
                }


                {
                    // if the data is fetched from server
                    config.hasFetched && <ConfigBox />
                }
            </section>
        </>
    )
}

const ConfigBox = () => {
    return (<div className='my-3'>
        <h3>All the Pages of the Website : </h3>

        <ExperimentalToggleButton fieldName={CONFIG_FIELDS.homePage} title="Home Page" />
        <ExperimentalToggleButton fieldName={CONFIG_FIELDS.compressPdfPage} title="Compress PDF Page" />
        <ExperimentalToggleButton fieldName={CONFIG_FIELDS.mergePdfPage} title="Merge PDF Page" />
        <ExperimentalToggleButton fieldName={CONFIG_FIELDS.mergePdfPage} title="Merge PDF Page" />

    </div>)
}


export default AdminDashboard