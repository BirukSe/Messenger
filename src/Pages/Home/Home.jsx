// // Home.js
// import React from 'react';
// import { Link , } from 'react-router-dom';
// import './Home.css';


// function Home() {
  
//     return (
//         <div className="container">
//             <div className="room">
//                 <Link to="/room">Room</Link>
//             </div>
//             <div className="separator"></div>
//             <div className="private">
//                 {/* <Link to="/private">Private Messages</Link> */}
//                 <Link to={{ pathname: "/private", state: { username } }}>Private Messages</Link>
//             </div>
//         </div>
//     );
// }

// export default Home; // Ensure this is a default export
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// function Home({ username }) { // Accept username as a prop
//     return (
//         <div className="container">
//             <div className="room">
//                 <Link to="/room">Room</Link>
//             </div>
//             <div className="separator"></div>
//             <div className="private">
//                 <Link to={{ pathname: "/private", state: { username } }}>Private Messages</Link>
//             </div>
//         </div>
//     );
// }

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home({ username }) {
    return (
        // <div className="container">
        //     <h1>Welcome, {username}</h1>
        //     <div className="room">
        //         <Link to="/room">Room</Link>
        //     </div>
        //     <div className="separator"></div>
        //     <div className="private">
        //         <Link to="/private">Private Messages</Link>
        //     </div>
        // </div>
        <div className="container">
                     <div className="room">
                         <Link to="/room">Room</Link>
                    </div>
                    <div className="separator"></div>
                    <div className="private">
                        <Link to={{ pathname: "/private", state: { username } }}>Private Messages</Link>
                    </div>
                </div>

    );
}

export default Home;
