import React,{useState} from 'react';
import '../css/ProfileView.css';
import Popup from "../component/Popup";
import {useGeolocation} from "../component/useGeolocation";


/**
 * Hook to manage state with a handler function.
 *
 * @param {string} initialState - The initial state value.
 * @return {Array} An array containing the current state value and the handler function.
 */
function useStateWithHandler(initialState: string) {
    const [value, setValue] = useState(initialState);
    const handler = (newValue: string) => setValue(newValue);
    return [value, handler];
}

/**
 * ProfileView component represents a user's profile view in a React application.
 *
 * @component
 */
const ProfileView: React.FC = () => {
    const [name, handleNameChange] = useStateWithHandler('');
    const [email, handleEmailChange] = useStateWithHandler('');
    const [genre, handleGenreChange] = useStateWithHandler('');
    const [birthdate, handleBirthdateChange] = useStateWithHandler('');
    const [phone, handlePhoneChange] = useStateWithHandler('');
    const [address, handleAddressChange] = useStateWithHandler('');
    const [contact, handleContactChange] = useStateWithHandler('');
    const [transport, handleTransportChange] = useStateWithHandler('');
    const [preference, handlePreferenceChange] = useStateWithHandler('');
    const [note, handleNoteChange] = useStateWithHandler('');
    const [avis, handleAvisChange] = useStateWithHandler('');
    const [historique, handleHistoriqueChange] = useStateWithHandler('');
    const [isPopupOpen, setPopupOpen] = useState(false);
    const location = useGeolocation();


    return (
        <>

        <div className="profile-view">
            <h1>Profile</h1>
            <img className="avatar" src="https://via.placeholder.com/150" alt="profile"/>
            <div className="profile-item" data-label="Name:">{name}</div>
            <div className="profile-item" data-label="Email:">{email}</div>
            <div className="profile-item" data-label="Genre:">{genre}</div>
            <div className="profile-item" data-label="Birthdate:">{birthdate}</div>
            <div className="profile-item" data-label="Phone:">{phone}</div>
            <div className="profile-item" data-label="Address:">{address}</div>
            <div className="profile-item" data-label="Emergency Contact:">{contact}</div>
            <div className="profile-item" data-label="Preferred Transport:">{transport}</div>
            <div className="profile-item" data-label="Route Preference:">{preference}</div>
            <div className="profile-item" data-label="User Rating:">{note}</div>
            <div className="profile-item" data-label="Reviews:">{avis}</div>
            <div className="profile-item" data-label="History:">{historique}</div>
            <button className="profile-button" onClick={() => setPopupOpen(true)}>Modifier</button>
            <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} title="Modifier le profil">
                {/* Ici, vous pouvez mettre le contenu que vous souhaitez afficher dans le popup.*/}

                <form>
                    <label>
                        Nom:
                        <input type="text" value={name} onChange={(e) => handleNameChange(e.target.value)}/>
                    </label>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => handleEmailChange(e.target.value)}/>
                    </label>
                    <label>
                        Genre:
                        <select value={genre} onChange={(e) => handleGenreChange(e.target.value)}>
                            <option value="">--Choisir--</option>
                            <option value="homme">Homme</option>
                            <option value="femme">Femme</option>
                        </select>
                    </label>
                    <label>
                        Date de Naissance:
                        <input type="date" value={birthdate} onChange={(e) => handleBirthdateChange(e.target.value)}/>
                    </label>
                    <label>
                        Téléphone:
                        <input type="tel" value={phone} onChange={(e) => handlePhoneChange(e.target.value)}/>
                    </label>
                    <label>
                        Adresse:
                        <input type="text" value={address} onChange={(e) => handleAddressChange(e.target.value)}/>
                    </label>
                    <label>
                        Contact d'urgence:
                        <input type="tel" value={contact} onChange={(e) => handleContactChange(e.target.value)}/>
                    </label>
                    <label>
                        Transport privilégié:
                        <select value={transport} onChange={(e) => handleTransportChange(e.target.value)}>
                            <option value="">--Choisir--</option>
                            <option value="voiture">Voiture</option>
                            <option value="velo">Vélo</option>
                            <option value="transport en commun">Transport en commun</option>
                        </select>
                    </label>
                    <label>
                        Préférence de trajet:
                        <select value={preference} onChange={(e) => handlePreferenceChange(e.target.value)}>
                            <option value="">--Choisir--</option>
                            <option value="trajet court">Trajet court</option>
                            <option value="trajet long">Trajet long</option>
                        </select>
                    </label>
                    <input className="popup-submit" type="submit" value="Envoyer"/>

                </form>
            </Popup>
        </div>
    <div className="profile-maps" data-label="Position:">
        {location.map
            ? location.map
            : 'Getting position...'
        }
    </div>
        </>
)
    ;
};

export default ProfileView;