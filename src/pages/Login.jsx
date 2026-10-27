import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";

function Login({onSignupClick}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);

  function handleLogin() {
    const user = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (user) {
      dispatch(loginUser(user));
      setMessage("Login successful!");
    } else {
      setMessage("Invalid email or password");
    }
  }

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-3 rounded mb-3"
      />

      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-3 rounded mb-3"
      />

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white p-3 rounded"
      >
        Login
      </button>
      <button onClick={onSignupClick} className="mt-3 w-full text-blue-600">
        Create an account
      </button>

      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  );
}

export default Login;
