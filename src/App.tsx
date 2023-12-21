import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./View/HomeView";
import Signup from "./component/Signup";
import Login from "./component/Login";
import ProfileView from "./View//ProfileView";
import Parametreview from "./View/Parametreview";
import MsgView from "./View//MsgView";
import MessageView from "./component/MessageView";
import ConversationList from "./component/ConversationList";
import Menu from "./component/Menu";

/**
 * The App component is responsible for rendering the routes and components of the application.
 *
 * @returns {JSX.Element} The rendered React element.
 */
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