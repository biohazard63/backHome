import React from 'react';
import { auth, firestore } from '../app';
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';
import './css/SignUp.css'; // Import CSS file

const SignUp = () => {
    const navigate = useNavigate();

    const googleSignIn = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        try {
            const authResult = await auth.signInWithPopup(provider);
            if (!authResult) throw new Error('Unable to authenticate user');

            const { user } = authResult;
            if (!user) throw new Error('Unable to retrieve user info');

            // Usird info
            const { uid, displayName, email } = user;

            // Check if user doc already exists
            const docRef = firestore.collection('users').doc(uid);
            const doc = await docRef.get();

            if (!doc.exists) {
                // Create a new user document
                await docRef.set({
                    uid,
                    name: displayName,
                    email,

                });
            }

            navigate('/ProfileView');
        } catch (error) {
            console.error('Google sign in was unsuccessful:', error);
        }
    };

    return (
        <div className="signupContainer">
            <button className="googleBtn" onClick={googleSignIn}>
                <img src="https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png" alt="Sign up with Google"/>
            </button>
        </div>
    );
};

export default SignUp;