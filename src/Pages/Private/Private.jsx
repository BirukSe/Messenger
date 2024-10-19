// // import React, { useEffect, useState } from 'react';
// // import './Private.css';
// // import Chat from '../Chat/Chat';
// // import io from 'socket.io-client'; // Make sure to import socket.io-client

// // const socket = io('http://localhost:3001'); // Initialize your socket connection here

// // function Private() {
// //     const [users, setUsers] = useState([]);
// //     const [error, setError] = useState(null);
// //     const username = "yourUsername"; // Replace with actual username
// //     const room = "yourRoom"; // Replace with actual room

// //     useEffect(() => {
// //         const fetchUsers = async () => {
// //             try {
// //                 const response = await fetch('http://localhost:3001/users');
// //                 if (!response.ok) {
// //                     const errorData = await response.json();
// //                     throw new Error(errorData.message);
// //                 }
// //                 const data = await response.json();
// //                 setUsers(data);
// //             } catch (err) {
// //                 setError(err.message || 'Something went wrong!');
// //                 console.log(err);
// //             }
// //         };

// //         fetchUsers();
// //     }, []);

// //     return (
// //         <div className="overall">
// //             <div className="left-side">
// //                 <h1>Users</h1>
// //                 {error && <p className="error">{error}</p>}
// //                 <ul>
// //                     {users.map((user) => (
// //                         <li key={user.username}>{user.username}</li>
// //                     ))}
// //                 </ul>
// //             </div>
// //             <div className="separator"></div>
// //             <div className="right-side">
// //                 <Chat socket={socket} username={username} room={room} />
// //             </div>
// //         </div>
// //     );
// // }

// // export default Private;
// // import React, { useEffect, useState } from 'react';
// // import './Private.css';
// // import Chat from '../Chat/Chat';
// // import io from 'socket.io-client';
// // import {useLocation} from 'react-router-dom';

// // const socket = io('http://localhost:3001');

// // function Private() {
// //     const location = useLocation();
// //     const { username } = location.state || {};

// //     const [users, setUsers] = useState([]);
// //     const [error, setError] = useState(null);
// //     const [selectedUser, setSelectedUser] = useState(null);
// //      // Replace with actual username
// //     const room = "yourRoom"; // Replace with actual room

// //     useEffect(() => {
// //         const fetchUsers = async () => {
// //             try {
// //                 const response = await fetch('http://localhost:3001/users');
// //                 if (!response.ok) {
// //                     const errorData = await response.json();
// //                     throw new Error(errorData.message);
// //                 }
// //                 const data = await response.json();
// //                 setUsers(data);
// //             } catch (err) {
// //                 setError(err.message || 'Something went wrong!');
// //                 console.log(err);
// //             }
// //         };

// //         fetchUsers();
// //     }, []);

// //     return (
// //         <div className="overall">
// //             <div className="left-side">
// //                 <h1>Users</h1>
// //                 {error && <p className="error">{error}</p>}
// //                 <ul className="user-list">
// //                     {users.map((user) => (
// //                         <li 
// //                             key={user.username} 
// //                             className={`user-item ${selectedUser === user.username ? 'active' : ''}`}
// //                             onClick={() => setSelectedUser(user.username)}
// //                         >
// //                             {user.username}
// //                         </li>
// //                     ))}
// //                 </ul>
// //             </div>
// //             <div className="separator"></div>
// //             <div className="right-side">
// //                 {selectedUser ? (
// //                     <Chat socket={socket} username={username} recipient={selectedUser} />
// //                 ) : (
// //                     <div className="chat-instruction">Click on a user to start a private chat!</div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // }

// // export default Private;

// // import React, { useEffect, useState } from 'react';
// // import './Private.css';
// // import Chat from '../Chat/Chat';
// // import io from 'socket.io-client';


// // const socket = io('http://localhost:3001');

// // function Private() {
    

// //     const [users, setUsers] = useState([]);
// //     const [error, setError] = useState(null);
// //     const [selectedUser, setSelectedUser] = useState(null);
// //     const room = "yourRoom"; // Replace with actual room

// //     useEffect(() => {
// //         // Register the user with the server
// //         console.log(`Registering user: ${username}`);
// //         socket.emit("register_user", username);

// //         const fetchUsers = async () => {
// //             try {
// //                 const response = await fetch('http://localhost:3001/users');
// //                 if (!response.ok) {
//                    const errorData = await response.json();
// //                     throw new Error(errorData.message);
// //                 }
// //                 const data = await response.json();
// //                 setUsers(data);
// //             } catch (err) {
// //                 setError(err.message || 'Something went wrong!');
// //                 console.log(err);
// //             }
// //         };

// //         fetchUsers();

// //         // Clean up on component unmount
// //         return () => {
// //             socket.off("receive_private_message"); // Clean up listeners if needed
// //         };
// //     }, [username]);

// //     return (
// //         <div className="overall">
// //             <div className="left-side">
// //                 <h1>Users</h1>
// //                 {error && <p className="error">{error}</p>}
// //                 <ul className="user-list">
// //                     {users.map((user) => (
// //                         <li 
// //                             key={user.username} 
// //                             className={`user-item ${selectedUser === user.username ? 'active' : ''}`}
// //                             onClick={() => setSelectedUser(user.username)}
// //                         >
// //                             {user.username}
// //                         </li>
// //                     ))}
// //                 </ul>
// //             </div>
// //             <div className="separator"></div>
// //             <div className="right-side">
// //                 {selectedUser ? (
// //                     <Chat socket={socket} username={username} recipient={selectedUser} />
// //                 ) : (
// //                     <div className="chat-instruction">Click on a user to start a private chat!</div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // }

// // export default Private;
import React, { useEffect, useState } from 'react';
import './Private.css';
import Chat from '../Chat/Chat';
import io from 'socket.io-client';
import { useAuth } from '../../Pages/auth';


const socket = io('https://enddata-gv63.onrender.com');

function Private() {
    const { username } = useAuth();
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const room = "yourRoom"; // Replace with actual room

    useEffect(() => {
        console.log(`Registering user: ${username}`);
        socket.emit("register_user", username);

        const fetchUsers = async () => {
            try {
                const response = await fetch('https://enddata-gv63.onrender.com/users');
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message);
                }
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err.message || 'Something went wrong!');
                console.log(err);
            }
        };

        fetchUsers();

        return () => {
            socket.off("receive_private_message");
        };
    }, [username]);

    return (
        <div className="overall">
            <div className="left-side">
                <h1>Users</h1>
                {error && <p className="error">{error}</p>}
                <ul className="user-list">
                    {users.map((user) => (
                        <li 
                            key={user.username} 
                            className={`user-item ${selectedUser === user.username ? 'active' : ''}`}
                            onClick={() => setSelectedUser(user.username)}
                        >
                            {user.username}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="separator"></div>
            <div className="right-side">
                {selectedUser ? (
                    <Chat socket={socket} username={username} recipient={selectedUser} />
                ) : (
                    <div className="chat-instruction">Click on a user to start a private chat!</div>
                )}
            </div>
        </div>
    );
}

export default Private;
