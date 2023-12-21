import React, { useState } from "react";
import "../css/HomeView.css";
import BackButton from "../component/BackButton";

/**
 * @description Represents a login component with email and password fields.
 * @returns {React.FC} Login component
 */
const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Your logic to connect using `email` and `password` goes here
    };

    return (


        <div className="home-view">
            <h2>Formulaire de connexion</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" onChange={handleEmailChange} required/>
                <input type="password" placeholder="Password" onChange={handlePasswordChange} required/>
                <button type="submit">Connectez-vous</button>
            </form>
        </div>
    );
};

export default Login;