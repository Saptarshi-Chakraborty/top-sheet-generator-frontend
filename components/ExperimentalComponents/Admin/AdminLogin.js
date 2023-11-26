import Link from "next/link"
import { useLayoutEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { isAdminLoggedIn, loginAdmin } from "./AdminAuth";
import { useRouter } from "next/router";


const AdminLoginPage = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' })

    const router = useRouter();

    // if admin is already logged in, redirect to admin dashboard
    // useLayoutEffect(() => {
    //     if (isAdminLoggedIn()) {
    //         router.push('/experimental/admin/dashboard')
    //     }

    //     return () => {
    //         // cleanup
    //     };
    // }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(credentials);

        const username = credentials.username.trim();
        const password = credentials.password.trim();

        if (username.length < 3 || password.length < 3) {
            toast.error('Username and password must be at least 3 characters long.')
            return;
        }

        console.log(`isAdminLoggedIn() : ${isAdminLoggedIn()}`);
        if (isAdminLoggedIn()) {
            toast.error('You are already logged in.')
            return;
        }

        // ping the server and get the token
        const result = await loginAdmin(username, password);

        if (!result) {
            toast.error('Invalid credentials.')
            return;
        }

        toast.success('Login successful')
        router.prefetch('/experimental/admin/dashboard')
        router.push('/experimental/admin/dashboard')
    }

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <ToastContainer />
            <p className="text-decoration-underline text-bg-success fs-2 fw-bold text-center mb-5">
                <Link className="nav-link active p-3 " aria-current="page" href="/">Click Here to Return to the Main Website</Link>
            </p>

            <h1>Admin Login</h1>
            <p>Log in to access the admin dashboard.</p>

            <form onSubmit={handleSubmit}>
                <h3 className="text-center text-decoration-underline font-monospace">Your Nickname-Code</h3>

                <div className="mb-3" >
                    <label htmlFor="username" className="form-label">Your username</label>
                    <input onChange={handleChange} value={credentials.username} type="text" name="username" id="username" className="form-control" minLength={3} maxLength={10} autoComplete="off" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input onChange={handleChange} value={credentials.password} type="password" name="password" className="form-control" id="password" aria-describedby="passwordHelp" autoComplete="off" autoCorrect="off" minLength={3} maxLength={12} required />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default AdminLoginPage