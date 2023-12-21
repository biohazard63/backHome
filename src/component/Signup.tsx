import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/HomeView.css";
import BackButton from "../component/BackButton";

// Composant pour l'inscription
/**
 * SignUp component is a functional component that renders a registration form
 * and handles form submissions.
 *
 * @returns The rendered SignUp component with a registration form.
 */
const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();


        new Promise((resolve, reject) => {
            setTimeout(resolve, 1000); // Simulation d'une inscription réussie en 1 seconde
        }).then(() => {
            // Après une inscription réussie, on redirige vers ProfileView
            navigate('/ProfileView');
        });
    };
    return (

        <div className="home-view">
            <h2>Formulaire d'inscription</h2>

            <form onSubmit={handleFormSubmit}>
                <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" required/>
                <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password"
                       required/>
                <button type="submit">Inscrivez-vous</button>
            </form>

        </div>
    );
};

export default SignUp;