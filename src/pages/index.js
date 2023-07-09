import Head from "next/head";
import Body from "../../components/home/Body";
import Navbar from "../../components/NavBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Create your top sheet for CA2 without any headache in just 10 seconds. Absoulately free" />
        <meta name="keywords" content="MAKAUT, FIEM, CA2 Exam, CA2 report"/>

        {/* <!-- OG Meta tags --> */}
        <meta property="og:site_name" content="Top Sheet Generator for CA2 Report - FIEM" />
        <meta property="og:title" content="Easily create Top Sheet for CA2 in just 10 seconds" />
        <meta property="og:description" content="Create your top sheet for CA2 without any headache in just 10 seconds. Absoulately free" />
        <meta property="og:url" content="https://ca2-top-sheet.pages.dev/" />
        <meta property="og:image" itemProp="image" content="https://ca2-top-sheet.pages.dev/img/ogimage.png" />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="1688915000" />

        {/* <!-- Google Search Verification Meta Tag --> */}
        <meta name="google-site-verification" content="3GXKc9UR9k9BnM4LmY7Ti6gerE-9qU1z0ajeZmTnmj8" />

        <link rel="canonical" href="https://ca2-top-sheet.pages.dev"></link>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" imageSizes="32x32" sizes="32x32" />
        <title>Top Sheet Generator - CA2 Exam - FIEM</title>
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
