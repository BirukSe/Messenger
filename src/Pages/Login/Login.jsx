// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//     const navigate = useNavigate();
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         if (!username || !password) {
//             setError('All fields are required!');
//             return;
//         }

//         setError('');
//         console.log('Login:', { username, password });
//         try {
//             const response = await fetch('http://localhost:3001/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ username, password }),
//             });
//             if (!response.ok) {
//                 const errorData = await response.json();
//                 throw new Error(errorData.message);
//             }
//             const userData = await response.json();
//             console.log('User data:', userData);
//             navigate('/home');
//         } catch (err) {
//             setError(err.message || 'Something went wrong!');
//             console.log(err);
//         }
//     };

//     return (
//         <div className="container">
//             <h2 className="header">Log In</h2>
//             {error && <p className="error">{error}</p>}
//             <form onSubmit={handleLogin}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     className="input"
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="input"
//                 />
//                 <button type="submit" className="button">Log In</button>
//             </form>
//             <p>
//                 Don't have an account? <a href="/signup" className="link">Sign up</a>
//             </p>
//         </div>
//     );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('All fields are required!');
            return;
        }

        setError('');
        console.log('Login:', { username, password });
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
            navigate('/home');
        } catch (err) {
            setError(err.message || 'Something went wrong!');
            console.log(err);
        }
    };

    return (
        <div className="login-page">
            <div className="background-image"></div>
            <div className="login-form-container">
                <h2 className="text-2xl font-semibold mb-4">Log In to Your Account</h2>
                {error && <p className="text-red-500 mb-2">{error}</p>}
                <form onSubmit={handleLogin} className="flex flex-col w-full max-w-sm">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mb-4 p-2 rounded bg-gray-100 border border-gray-300"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-4 p-2 rounded bg-gray-100 border border-gray-300"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded transition"
                    >
                        Log In
                    </button>
                </form>
                <p className="mt-4">
                    Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
