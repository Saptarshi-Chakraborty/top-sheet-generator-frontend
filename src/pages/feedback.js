import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Body from '../../components/feedback/Body';
import Navbar from '../../components/NavBar';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="favicon.png" type="image/png" />
                <title>Feedback - Top Sheet Generator for CA2 Exam - FIEM</title>
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
