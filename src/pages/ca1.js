import Head from "next/head";
import Body from "../../components/ca1/Body";
import Navbar from "../../components/NavBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:image" itemProp="image" content="https://ca2-top-sheet.pages.dev/img/ogimage.png" />
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" imageSizes="32x32" sizes="32x32" />
                <title>Top Sheet Generator - CA1 Exam - FIEM</title>
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
