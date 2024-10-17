import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';
import Chat from './Chat';

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  function joinRoom() {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);  // Set showChat to true when joining a room
    }
  }

  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
      {!showChat ? (
        <>
        <div className="batman">
          <h3 className="title">Welcome to biruke's Messenger</h3>
          <input
            className="child"
            type="text"
            placeholder="Username..."
            onChange={(event) => setUsername(event.target.value)}
          /><br />
          <input
            type="text"
            placeholder="Connection ID"
            onChange={(event) => setRoom(event.target.value)}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                joinRoom(); // Allow joining by pressing Enter
              }
            }}
          /><br />
          <button type="button" class="btn btn-info" onClick={joinRoom}>Join Room</button>
          </div>
        </>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
