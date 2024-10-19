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
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';
// import Home from '../Home/Home';

// const Login = ({onAuthenticate}) => {
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
            
//             onAuthenticate(username); // Pass the actual username here
//             navigate('/home', { state: { username } }); // You can still use this if needed
//         } catch (err) {
//             setError(err.message || 'Something went wrong!');
//         }
//     };
    
       

//     return (
//         <div className="login-page">
//             <div className="background-image"></div>
//             <div className="login-form-container">
//                 <h2 className="text-2xl font-semibold mb-4">Log In to Your Account</h2>
//                 {error && <p className="text-red-500 mb-2">{error}</p>}
//                 <form onSubmit={handleLogin} className="flex flex-col w-full max-w-sm">
//                     <input
//                         type="text"
//                         placeholder="Username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         className="mb-4 p-2 rounded bg-gray-100 border border-gray-300"
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="mb-4 p-2 rounded bg-gray-100 border border-gray-300"
//                     />
//                     <button
//                         type="submit"
//                         className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded transition"
//                     >
//                         Log In
//                     </button>
//                 </form>
//                 <p className="mt-4">
//                     Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Login;
// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Pages/auth'; // Import the context
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const { setUsername } = useAuth(); // Get the setUsername function
    const [username, setLocalUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('All fields are required!');
            return;
        }

        setError('');
        try {
            const response = await fetch('https://enddata-gv63.onrender.com/login', {
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

            setUsername(username); // Set the username globally
            navigate('/home');
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
    };

    return (
        <div className="login-page">
            <h1>Welcome to <span id="bura">Talkify</span></h1>
          
            <div className="login-form-container">
                <h2>Log In to Your Account</h2>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setLocalUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Log In</button>
                    <p >Dont have an account <a href="/signup">Sign Up</a></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
