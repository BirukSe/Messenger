// import React, { useState, useEffect } from 'react';
// import './Chat.css';

// function Chat({ socket, username, room }) {
//     const [currentMessage, setCurrentMessage] = useState("");
//     const [messageList, setMessageList] = useState([]);

//     async function sendMessage() {
//         if (currentMessage !== "") {
//             const messageData = {
//                 room: room,
//                 author: username,
//                 message: currentMessage,
//                 time: `${new Date().getHours()}:${new Date().getMinutes()}`
//             };
//             await socket.emit("send_message", messageData);
//             setCurrentMessage(""); // Clear the input after sending
//             setMessageList((list) => [...list, messageData]);
//         }
//     }

//     useEffect(() => {
//         socket.on("receive_message", (data) => {
//             setMessageList((list) => [...list, data]); // Correctly update the message list
//         });

//         // Clean up the effect
//         return () => {
//             socket.off("receive_message");
//         };
//     }, [socket]);

//     return (
//         <>
//             <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
//             <div className="the_main">
//                 <div className="chat-header">
//                     <p>{username}'s Chat</p>
//                 </div>
//                 <div className="chat-body">
//                     {messageList.map((messageContent, index) => (
//                         <div
//                             className={`message ${messageContent.author === username ? 'sent' : 'received'}`}
//                             key={index}
//                         >
//                             <span>{messageContent.message}</span>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="chat-footer">
//                     <input
//                         onKeyPress={(event) => {
//                             if (event.key === 'Enter') {
//                                 sendMessage(); // Allow sending by pressing Enter
//                             }
//                         }}
//                         className="input"
//                         type="text"
//                         placeholder="Type your text here..."
//                         value={currentMessage} // Controlled input
//                         onChange={(event) => {
//                             setCurrentMessage(event.target.value);
//                         }}
//                     />
//                     <button 
//                         id="sender" 
//                         type="button" 
//                         onClick={sendMessage} 
//                         className="btn btn-info"
//                     >
//                         Send
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Chat;
import React, { useState, useEffect } from 'react';
import './Chat.css';

function Chat({ socket, username, room }) {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    async function sendMessage() {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: `${new Date().getHours()}:${new Date().getMinutes()}`
            };
            await socket.emit("send_message", messageData);
            setCurrentMessage("");
            setMessageList((list) => [...list, messageData]);
        }
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });

        return () => {
            socket.off("receive_message");
        };
    }, [socket]);

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
            <div className="the_main">
                <div className="chat-header">
                    <p>{username}'s Chat</p>
                </div>
                <div className="chat-body">
                {messageList.map((messageContent, index) => (
    <div
        className={`message ${messageContent.author === username ? 'sent' : 'received'}`}
        key={index}
    >
        <span>{messageContent.message}</span>
    </div>
))}
                </div>
                <div className="chat-footer">
                    <input
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                sendMessage();
                            }
                        }}
                        className="input"
                        type="text"
                        placeholder="Type your text here..."
                        value={currentMessage}
                        onChange={(event) => {
                            setCurrentMessage(event.target.value);
                        }}
                    />
                    <button id="sender" type="button" onClick={sendMessage} className="btn btn-info">Send</button>
                </div>
            </div>
        </>
    );
}

export default Chat;

