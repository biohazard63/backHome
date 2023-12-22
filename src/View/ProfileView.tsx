import React, { useEffect, useState } from 'react';
import '../css/ProfileView.css';
import Popup from "../component/Popup";
import { useGeolocation } from "../component/useGeolocation";
import { auth, firestore } from "../App.tsx";

const ProfileView: React.FC = () => {
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        genre: '',
        birthdate: '',
        phone: '',
        address: '',
        contact: '',
        transport: '',
        preference: '',
        note: '',
        avis: '',
        historique: '',

    });

    const [isPopupOpen, setPopupOpen] = useState(false);
    const location = useGeolocation();

    const initializeUserProfile = async (user) => {
        const docRef = firestore.collection("users").doc(user.uid);
        const doc = await docRef.get();

        if (doc.exists) {
            setProfileData(doc.data());
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                initializeUserProfile(user)
            }
        });

        return () => unsubscribe();
    }, []);

    const handleNameChange = (event) => setProfileData({ ...profileData, name: event.target.value });
    const handleEmailChange = (event) => setProfileData({ ...profileData, email: event.target.value });
    const handleGenreChange = (event) => setProfileData({ ...profileData, genre: event.target.value });
    const handleBirthdateChange = (event) => setProfileData({ ...profileData, birthdate: event.target.value });
    const handlePhoneChange = (event) => setProfileData({ ...profileData, phone: event.target.value });
    const handleAddressChange = (event) => setProfileData({ ...profileData, address: event.target.value });
    const handleContactChange = (event) => setProfileData({ ...profileData, contact: event.target.value });
    const handleTransportChange = (event) => setProfileData({ ...profileData, transport: event.target.value });
    const handlePreferenceChange = (event) => setProfileData({ ...profileData, preference: event.target.value });

    // Handles form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (auth.currentUser) {
            const docRef = firestore.collection('users').doc(auth.currentUser.uid);

            try {
                await docRef.set({
                    name: profileData.name,
                    email: profileData.email,
                    genre: profileData.genre,
                    birthdate: profileData.birthdate,
                    phone: profileData.phone,
                    address: profileData.address,
                    contact: profileData.contact,
                    transport: profileData.transport,
                    preference: profileData.preference,


                });
                setPopupOpen(false);
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("No user logged in");
        }
    }

    return (
        <>

        <div className="profile-view">
            <h1>Profile</h1>
            <img className="avatar" src="https://via.placeholder.com/150" alt="profile"/>
            <div className="profile-item" data-label="Name:">{profileData.name}</div>
            <div className="profile-item" data-label="Email:">{profileData.email}</div>
            <div className="profile-item" data-label="Genre:">{profileData.genre}</div>
            <div className="profile-item" data-label="Birthdate:">{profileData.birthdate}</div>
            <div className="profile-item" data-label="Phone:">{profileData.phone}</div>
            <div className="profile-item" data-label="Address:">{profileData.address}</div>
            <div className="profile-item" data-label="Emergency Contact:">{profileData.contact}</div>
            <div className="profile-item" data-label="Preferred Transport:">{profileData.transport}</div>
            <div className="profile-item" data-label="Route Preference:">{profileData.preference}</div>
            <div className="profile-item" data-label="User Rating:">{profileData.note}</div>
            <div className="profile-item" data-label="Reviews:">{profileData.avis}</div>
            <div className="profile-item" data-label="History:">{profileData.historique}</div>
            <button className="profile-button" onClick={() => setPopupOpen(true)}>Modifier</button>
            <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} title="Modifier le profil">                {/* Ici, vous pouvez mettre le contenu que vous souhaitez afficher dans le popup.*/}

                <form onSubmit={handleSubmit}>
                    <label>
                        Nom:
                        <input type="text" value={profileData.name} onChange={handleNameChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" value={profileData.email} onChange={handleEmailChange} />
                    </label>
                    <label>
                        Genre:
                        <select value={profileData.genre} onChange={handleGenreChange}>
                            <option value="">--Choisir--</option>
                            <option value="homme">Homme</option>
                            <option value="femme">Femme</option>
                        </select>
                    </label>
                    <label>
                        Date de Naissance:
                        <input type="date" value={profileData.birthdate} onChange={handleBirthdateChange} />
                    </label>
                    <label>
                        Téléphone:
                        <input type="tel" value={profileData.phone} onChange={handlePhoneChange} />
                    </label>
                    <label>
                        Adresse:
                        <input type="text" value={profileData.address} onChange={handleAddressChange} />
                    </label>
                    <label>
                        Contact d'urgence:
                        <input type="tel" value={profileData.contact} onChange={handleContactChange} />
                    </label>
                    <label>
                        Transport privilégié:
                        <select value={profileData.transport} onChange={handleTransportChange}>
                            <option value="">--Choisir--</option>
                            <option value="voiture">Voiture</option>
                            <option value="velo">Vélo</option>
                            <option value="transport en commun">Transport en commun</option>
                        </select>
                    </label>
                    <label>
                        Préférence de trajet:
                        <select value={profileData.preference} onChange={handlePreferenceChange}>
                            <option value="">--Choisir--</option>
                            <option value="trajet court">Trajet court</option>
                            <option value="trajet long">Trajet long</option>
                        </select>
                    </label>
                    <input className="popup-submit" type="submit" value="Envoyer"/>
                </form>
            </Popup>
        </div>
            <>
            </>
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