import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../features/auth/authSlice";
import { useSelector } from "react-redux";

function Signup({ onLoginClick }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);

  function handleSignup() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      alert("Please enter a valid email address");
      return;
    }
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    const existingUser = users.find(
  (user) => user.email.toLowerCase() === email.trim().toLowerCase()
)

if (existingUser) {
  alert('This email is already registered')
  return
}

    const user = {
      name: name,
      email: email,
      password: password,
    };

    dispatch(signupUser(user));
    console.log("User registered:", user);

    alert("Signup successful!");
    onLoginClick()
  }

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Create Account</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-3 rounded mb-3"
      />

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
        className="w-full border p-3 rounded mb-4"
      />

      <button
        onClick={handleSignup}
        className="w-full bg-blue-600 text-white p-3 rounded"
      >
        Sign Up
      </button>
      <button onClick={onLoginClick} className="mt-3 w-full text-blue-600">
        Already have an account? Login
      </button>
      <p className="mt-4 text-gray-700">Registered Users: {users.length}</p>
    </div>
  );
}

export default Signup;
