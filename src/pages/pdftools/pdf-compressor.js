import React from 'react'
import Head from 'next/head';
import Navbar from '../../../components/NavBar';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Body from '@components/pdftools/pdfCompressor/Body';

const pdfcompressor = () => {
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
            <Body />
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