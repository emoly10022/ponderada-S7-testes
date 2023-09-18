// src/components/LoginForm.tsx

import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onLogin(userEmail, password);
  };

  const handleForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleForm}>
        <h2>Faça seu login</h2>
        <input
          type="text"
          placeholder="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
      <Link to="/partner-registration">
        <p className="not-registered">
          clique aqui para se registrar como parceiro!
        </p>
      </Link>
      <Link to="/analyst-registration">
        <p className="not-registered">
          clique aqui para se registrar como analista!
        </p>
      </Link>
    </div>
  );
};

export default LoginForm;
