import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Menu.css';
import BackButton from "./BackButton";

/**
 * Represents a Menu component in React.
 *
 * @component
 * @example
 * <Menu />
 */
const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // État pour gérer l'affichage du menu

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`menu ${isOpen ? 'open' : ''}`}>
            <div className="menu-header">

                <button onClick={toggleMenu}>☰</button>
            </div>

            {isOpen && (
                <ul>
                    {/*<BackButton />*/}
                    <li><Link to="/HomeView" onClick={toggleMenu}>Accueil</Link></li>
                    <li><Link to="/ProfileView" onClick={toggleMenu}>Profil</Link></li>
                    <li><Link to="/MsgView" onClick={toggleMenu}>Message</Link></li>
                    <li><Link to="/Parametreview" onClick={toggleMenu}>Paramètres</Link></li>
                </ul>
            )}
        </nav>
    );
};

export default Menu;