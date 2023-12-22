import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./View/HomeView";
import Signup from "./component/Signup";
import Login from "./component/Login";
import ProfileView from "./View//ProfileView";
import Parametreview from "./View/Parametreview";
import MsgView from "./View//MsgView";
import MessageView from "./component/MessageView";
import Menu from "./component/Menu";

import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJDs_KZes4Uv9n4_aeOo-j4ufst-mVevI",
    authDomain: "backsamehome.firebaseapp.com",
    projectId: "backsamehome",
    storageBucket: "backsamehome.appspot.com",
    messagingSenderId: "1082898499737",
    appId: "1:1082898499737:web:a139409e53f7d6ce0d5008"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

function App() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/HomeView" element={<HomeView />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/ProfileView" element={<ProfileView />} />
                <Route path="/Parametreview" element={<Parametreview />} />
                <Route path="/MsgView" element={<MsgView />} />
                <Route path="/MsgView/conversation/:id" element={<MessageView />} />
                <Route path="*" element={<HomeView />} />
            </Routes>
        </Router>
    );
}
export default App;