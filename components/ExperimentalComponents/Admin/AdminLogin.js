import Link from "next/link"
import { useState } from "react"

const AdminLoginPage = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted')
    }

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <>
            <p className="text-decoration-underline text-bg-success fs-2 fw-bold text-center mb-5">
                <Link className="nav-link active p-3 " aria-current="page" href="/">Click Here to Return to the Main Website</Link>
            </p>

            <h1>Admin Login</h1>
            <p>Log in to access the admin dashboard.</p>

            <form onSubmit={handleSubmit}>
                <h3 className="text-center text-decoration-underline font-monospace">Your Nickname-Code</h3>

                <div className="mb-3" >
                    <label htmlFor="username" className="form-label">Your username</label>
                    <input type="text" name="username" id="username" className="form-control" minLength={3} maxLength={10} autoComplete="off" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="text" className="form-control" id="password" aria-describedby="passwordHelp" autoComplete="off" autoCorrect="off" minLength={3} maxLength={12} required />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default AdminLoginPage