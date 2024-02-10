import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [username, setUsername] = useState(null);
    const [restaurants, setRestaurants] = useState([]);

    return (
        <UserContext.Provider value={{ accessToken,  username, restaurants, setAccessToken, setUsername, setRestaurants }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);