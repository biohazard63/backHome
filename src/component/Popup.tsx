import React from 'react';
import './css/Popup.css'; // Vous avez besoin de créer ce fichier de style.

// Type pour les props du popup.
/**
 * Represents the props for the Popup component.
 *
 * @typedef {Object} PopupProps
 * @property {boolean} isOpen - Indicates whether the popup is open or closed.
 * @property {Function} onClose - Callback function to be called when the popup is closed.
 * @property {string} title - The title of the popup.
 * @property {ReactNode} children - The content of the popup.
 */
type PopupProps = {
    isOpen: boolean,
    onClose: () => void,
    title: string,
    children: React.ReactNode,
}

// Composant Popup.
/**
 * Represents a popup component.
 * @function Popup
 * @param {object} props - The component props
 * @param {boolean} props.isOpen - Whether the popup is open or not
 * @param {function} props.onClose - Callback function when the popup is closed
 * @param {string} props.title - The title of the popup
 * @param {ReactNode} props.children - The content of the popup
 * @returns {ReactElement|null} - The popup element or null if isOpen is false
 */
const Popup: React.FC<PopupProps> = ({isOpen, onClose, title, children}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="popup-overlay">
            <div className="popup">
                <header className="popup-header">
                    <h2 className="popup-title">{title}</h2>
                    <button className="popup-close" onClick={onClose}>&times;</button>
                </header>
                <div className="popup-content">
                    {children} {/* Ici, vous pouvez insérer n'importe quel contenu dans votre popup. */}
                </div>
            </div>
        </div>
    );
};

export default Popup;