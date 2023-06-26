import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { addUser, updateUsername, deleteUser } from "./features/Users";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const usersList = useSelector((state) => state.users.value);

  const handleAddUser = () => {
    if (!name || !username) return;
    dispatch(
      addUser({
        id: new Date().getTime(),
        name,
        username,
      })
    );
    setName("");
    setUsername("");
  };

  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button onClick={() => handleAddUser()}>Add user</button>
      </div>

      <div className="displayUsers">
        {usersList.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <input
              type="text"
              placeholder="New Username..."
              onChange={(event) => {
                setNewUsername(event.target.value);
              }}
            />
            <button
              onClick={() => {
                dispatch(
                  updateUsername({ id: user.id, username: newUsername })
                );
              }}
            >
              {" "}
              Update Username
            </button>
            <button
              onClick={() => {
                dispatch(deleteUser({ id: user.id }));
              }}
            >
              Delete User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
