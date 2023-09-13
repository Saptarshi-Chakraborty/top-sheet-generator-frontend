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
        <meta name="description" content="Generate CA2 assignment top sheets quickly for FIEM with our Top Sheet Generator. Create professional-looking front pages in just 10 seconds. Absoulately Free !" />
        <meta name="keywords" content="Top Sheet Generator, CA2 assignment front page, FIEM assignment, easy assignment generator, FIEM Top Sheet Generator, MAKAUT CA2 Top Sheet Generator, CA2 Assignmet Top Sheet" />

        {/* <!-- OG Meta tags --> */}
        <meta property="og:site_name" content="Top Sheet Generator" />
        <meta property="og:title" content="Top Sheet Generator - Easy CA2 Top Sheet Generator for FIEM Students" />
        <meta property="og:description" content="Generate CA2 assignment top sheets quickly for FIEM with our Top Sheet Generator. Create professional-looking top sheets in just 10 seconds. Absoulately Free !" />
        <meta property="og:url" content="https://top-sheet-generator.pages.dev/" />
        <meta property="og:image" itemProp="image" content="https://top-sheet-generator.pages.dev/img/ogimage.png" />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="1691659500" />

        <link rel="canonical" href="https://top-sheet-generator.pages.dev/" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" imageSizes="32x32" sizes="32x32" />
        <title>Top Sheet Generator - Easy CA2 Assignment Top Sheet Generator for FIEM Students</title>
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
