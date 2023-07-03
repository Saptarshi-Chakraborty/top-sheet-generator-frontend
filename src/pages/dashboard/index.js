import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Body from './Body';
import Navbar from '../../../components/NavBar';

export default function Home() {
    return (
        <>
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
