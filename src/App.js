// import './App.css';
// import io from 'socket.io-client';
// import { useState } from 'react';
// import Chat from './Chat';

// const socket = io.connect("http://localhost:3001");

// function App() {
//   const [username, setUsername] = useState("");
//   const [room, setRoom] = useState("");
//   const [showChat, setShowChat] = useState(false);

//   function joinRoom() {
//     if (username !== "" && room !== "") {
//       socket.emit("join_room", room);
//       setShowChat(true);  // Set showChat to true when joining a room
//     }
//   }

//   return (
//     <div className="App">
//       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
//       {!showChat ? (
//         <>
//         <div className="auth"><h3>Please Enter Chat Room Id to Continue</h3></div>
//         <div className="batman">
//           <h3 className="title">Welcome to biruke's Messenger</h3>
//           <input
//             className="child"
//             type="text"
//             placeholder="Username..."
//             onChange={(event) => setUsername(event.target.value)}
//           /><br />
//           <input
//             type="text"
//             placeholder="Connection ID"
//             onChange={(event) => setRoom(event.target.value)}
//             onKeyPress={(event) => {
//               if (event.key === 'Enter') {
//                 joinRoom(); // Allow joining by pressing Enter
//               }
//             }}
//           /><br />
//           <button type="button" class="btn btn-info" onClick={joinRoom}>Join Room</button>
//           </div>
//         </>
//       ) : (
//         <Chat socket={socket} username={username} room={room} />
//       )}
//     </div>
//   );
// }

// // export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Signup from './Pages/Signup/Signup'; 
// import Login from './Pages/Login/Login'; 
// import Home from './Pages/Home/Home'; 
// import Room from './Pages/Room/Room'; 
// import Private from './Pages/Private/Private';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Function to handle login or signup
//   const handleAuthentication = () => {
//     setIsAuthenticated(true);
//   };

//   return (
//     <Router>
//       {/* Conditionally render Home navigation */}
//       {isAuthenticated && <Home />}
      
//       <Routes>
//         <Route path="/" element={<Signup onAuthenticate={handleAuthentication} />} />
//         <Route path="/signup" element={<Signup onAuthenticate={handleAuthentication} />} />
//         <Route path="/login" element={<Login onAuthenticate={handleAuthentication} />} />
        
//         {/* Protected routes */}
//         <Route path="/room" element={isAuthenticated ? <Room /> : <Navigate to="/login" />} />
//         <Route path="/private" element={<Private />} />
        
//         {/* Redirect to Home after login */}
//         <Route path="/home" element={<Room />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // import Signup from './Pages/Signup/Signup'; 
// // import Login from './Pages/Login/Login'; 
// // import Home from './Pages/Home/Home'; 
// // import Room from './Pages/Room/Room'; 
// // import Private from './Pages/Private/Private';

// // function App() {
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);

// //   // Function to handle login or signup
// //   const handleAuthentication = () => {
// //     setIsAuthenticated(true);
// //   };

// //   return (
// //     <Router>
// //       {/* Conditionally render Home navigation */}
// //       {isAuthenticated && <Home />}
      
// //       <Routes>
// //         <Route path="/" element={<Signup onAuthenticate={handleAuthentication} />} />
// //         <Route path="/signup" element={<Signup onAuthenticate={handleAuthentication} />} />
// //         <Route path="/login" element={<Login onAuthenticate={handleAuthentication} />} />
        
// //         {/* Protected routes */}
// //         <Route path="/room" element={isAuthenticated ? <Room /> : <Navigate to="/login" />} />
// //         <Route path="/private" element={<Private />} />
        
// //         {/* Redirect to Home after login */}
// //         <Route path="/home" element={<Room />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;




import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from '../src/Pages/auth';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Private from './Pages/Private/Private';
import Signup from './Pages/Signup/Signup';
import Room from './Pages/Room/Room';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');

    const handleAuthenticate = (username) => {
         setUsername(username); // Store the actual username
     };
     const handleAuthentication = () => {
          setIsAuthenticated(true);
          };
    return (
        <AuthProvider>
            <Router>
            {isAuthenticated && <Home />}
                <Routes>
                <Route path="/" element={<Signup onAuthenticate={handleAuthentication} />} />
       <Route path="/signup" element={<Signup onAuthenticate={handleAuthentication} />} />
         <Route path="/login" element={<Login onAuthenticate={handleAuthentication} />} />
        
        {/* Protected routes */}
        <Route path="/room" element={<Room />} />
        <Route path="/private" element={<Private />} />
        <Route path="/home" element={<Home />} />

                    {/* Other routes */}
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
