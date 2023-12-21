// Fichier : BackButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/BackButton.css'; // Assurez-vous de créer ce fichier CSS

/**
 * BackButton is a React functional component for rendering a back button with a chevron left icon.
 * When clicked, it uses the `useNavigate` hook from the React Router to navigate back in the history stack.
 *
 * @returns {React.Element} The rendered back button component.
 */
const BackButton: React.FC = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return <img className="back" onClick={handleBack} width="48" height="48" src="https://img.icons8.com/fluency/48/circled-chevron-left.png" alt="circled-chevron-left"/>;
};

export default BackButton;