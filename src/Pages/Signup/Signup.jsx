// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Signup.css';

// const Signup = () => {
//     const navigate = useNavigate();
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSignUp = async (e) => {
//         e.preventDefault();
//         if (!username || !password) {
//             setError('All fields are required!');
//             return;
//         }

//         setError('');
//         console.log('Sign Up:', { username, password });
//         try {
//             const response = await fetch('http://localhost:3001/signup', {
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
//             navigate('/home');
//         } catch (err) {
//             setError(err.message || 'Something went wrong!');
//             console.log(err);
//         }
//     };

//     return (
//         <div className="container">
//             <h2 className="header">Sign Up</h2>
//             {error && <p className="error">{error}</p>}
//             <form onSubmit={handleSignUp}>
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
//                 <button type="submit" className="button">Sign Up</button>
//             </form>
//             <p>
//                 Already have an account? <a href="/login" className="link">Log in</a>
//             </p>
//         </div>
//     );
// };

// export default Signup;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('All fields are required!');
            return;
        }

        setError('');
        console.log('Sign Up:', { username, password });
        try {
            const response = await fetch('http://localhost:3001/signup', {
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
        <div className="signup-page">
            <h1>Welcome to Talkify</h1>
           
            <div className="signup-form-container">
                <h2 className="text-2xl font-semibold mb-4">Create a New Account</h2>
                {error && <p className="text-red-500 mb-2">{error}</p>}
                <form onSubmit={handleSignUp} className="flex flex-col w-full max-w-sm">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mb-4 p-2 rounded bg-dark-4 text-white placeholder:text-light-4"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-4 p-2 rounded bg-dark-4 text-white placeholder:text-light-4"
                    />
                    <button
                        type="submit"
                        className="bg-orange-600 hover:bg-orange-500 text-white p-2 rounded transition"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-4">
                    Already have an account? <a href="/login" className="text-blue-500">Log in</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
