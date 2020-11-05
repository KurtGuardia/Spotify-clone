import { useState } from "react";
import "./Login.scss";
import { ReactComponent as SpotifyIcon } from "../../assets/images/spotify.svg";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const [message, setMessage] = useState("");

  const checkError = () => {
    if (user !== "testUser" && password !== "Test123") {
      setError(true);
      setMessage("Please enter 'testUser' for User and 'Test123' for Password");
    } else if (user !== "testUser") {
      setError(true);
      setMessage("Please enter 'testUser' for User");
    } else if (password !== "Test123") {
      setError(true);
      setMessage("Please enter 'Test123' for Password");
    } else {
      setError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkError();
  };

  return (
    <div className="login">
      <div className="login__logo">
        <SpotifyIcon />
        <span>
          Spotify <small>clone</small>
        </span>
      </div>

      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__form--field">
          <label htmlFor="user">User:</label>
          <input
            type="text"
            id="user"
            value={user}
            placeholder="testUser"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className="login__form--field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Test123"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login__btn">LOGIN</button>

        {isError && <p className="login__error-msg">{message}</p>}
      </form>
    </div>
  );
};

export default Login;