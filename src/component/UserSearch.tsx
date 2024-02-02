// UserSearch.tsx
import React, { useState } from 'react';

const UserSearch: React.FC<{ onSearch: (searchTerm: string) => void }> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder="Rechercher un utilisateur"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => onSearch(searchTerm)}>Chercher</button>
        </div>
    );
};

export default UserSearch;