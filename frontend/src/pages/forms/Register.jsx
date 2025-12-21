import { Link } from 'react-router-dom';
import './form.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim() || !username.trim()) {
            toast.error("Please fill in all fields");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        // Success example
        toast.success("Logged in successfully!");
    };


    return (
        <div className="form-wrapper">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
            />

            <h1 className="form-title">Create new account</h1>

            <form onSubmit={formSubmitHandler} className="form">
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                />
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Username"
                />

                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='text'
                    placeholder="Password"
                />
                <button className="form-btn" type="submit">
                    Register
                </button>
            </form>

            <div className="form-footer">
                Already have an account?{" "}
                <Link to="/login" className="forms-link">
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Register