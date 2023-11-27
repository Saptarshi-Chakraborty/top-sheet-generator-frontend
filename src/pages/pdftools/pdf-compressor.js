import React, { useContext } from 'react'
import Head from 'next/head';
import Navbar from '../../../components/NavBar';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Body from '@components/pdftools/pdfCompressor/Body';
import { GlobalConfigContext } from '../../../context/GlobalConfig';
import fetchGlobalConfig from '../../../utility/fetchGlobalConfig';
import PageTemporarilyClosed from '@components/PageTemporarilyClosed';
import CONFIG_FIELDS from '@components/ExperimentalComponents/Admin/ConfigFields';

const pdfcompressor = () => {
    const { config, setConfig } = useContext(GlobalConfigContext);

    if (config.hasFetched === false || config.timestamp < Date.now() - 1000 * 60 * 60) {
        fetchGlobalConfig().then((result) => {
            if (result === false) {
                setConfig({ hasFetched: false, data: {}, timestamp: Date.now() });
            }
            else {
                setConfig({ hasFetched: true, data: result, timestamp: Date.now() });
            }
        });
    }

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:image" itemProp="image" content="https://ca2-top-sheet.pages.dev/img/ogimage.png" />
                <meta name="description" content="Compress Your PDF Files in a second. Light Speed PDF Compressing with total privacy. Absoulately free" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" imageSizes="32x32" sizes="32x32" />
                <title>PDF Compressor of Top Sheet Generator</title>
            </Head>

            <Navbar />
            {
                (config.hasFetched === true && config.data[CONFIG_FIELDS.pdfCompressorPage] === true) ?
                    <Body />
                    :
                    <PageTemporarilyClosed />
            }

            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="dark"
            />

        </>
    )
}

export default pdfcompressor