import React from 'react'
import Head from 'next/head';
import Body from '../../../components/pdftools/mergepdf/Body'
import Navbar from '../../../components/NavBar';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const mergepdf = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" itemProp="image" content="https://ca2-top-sheet.pages.dev/img/ogimage.png" />
        <meta name="description" content="Merge Your PDF Files in a second. Light Speed PDF Merging with total privacy. Absoulately free" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" imageSizes="32x32" sizes="32x32" />
        <title>PDF Merger of Top Sheet Generator</title>
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

export default mergepdf