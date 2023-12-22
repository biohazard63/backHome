import React from "react";
import '../css/HomeView.css';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import { auth } from '../App.tsx';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const googleSignIn = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await auth.signInWithPopup(provider);
            navigate('/ProfileView');
        } catch (error) {
            console.error("Google sign in was unsuccessful:", error);
        }
    };

    return (
        <div className="home-view">
            <h2>Formulaire de connexion</h2>
            <button onClick={googleSignIn}>Connectez-vous avec Google</button>
        </div>
    );
};

export default Login;