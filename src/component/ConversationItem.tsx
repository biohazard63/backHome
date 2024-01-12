import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConversationItem = ({ conversation: initialConversation }) => {
    console.log('Rendering ConversationItem', initialConversation);
    let navigate = useNavigate();
    const [conversation, setConversation] = useState(initialConversation);

    const handleClick = () => {
        navigate(`/MsgView/conversation/${conversation.id}`);
    };

    return (
        <div onClick={handleClick}>
            <h2>{conversation.sender}</h2>
            <p>{conversation.message}</p>
        </div>
    );
};

export default ConversationItem;