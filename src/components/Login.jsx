import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // Importation du fichier CSS

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("/users.json");
      const users = response.data;
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        setIsAuthenticated(true);
      } else {
        setError("Identifiants incorrects");
      }
    } catch (error) {
      setError("Erreur de chargement des utilisateurs");
    }
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <button type="submit" className="login-button">
          Se connecter
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Login;
