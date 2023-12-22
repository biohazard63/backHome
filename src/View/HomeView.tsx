import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/HomeView.css';

// Votre vue d'accueil
/**
 * HomeView is a functional component that represents the home view of an application.
 * It displays a heading, along with two buttons for signing up and logging in.
 *
 * @return {React.FC} The rendered home view component.
 */
const HomeView: React.FC = () => {
    const navigate = useNavigate();



    return (<div>

        <div className="home-view">
            <h1>Back Home!</h1>
            <button onClick={() => navigate('/Signup')}>Connexion</button>
        </div>
        </div>
    );
};

export default HomeView;