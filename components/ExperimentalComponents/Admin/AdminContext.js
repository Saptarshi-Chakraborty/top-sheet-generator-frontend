import { useContext, useState, createContext } from "react";

// create a context named AdminContext
const AdminContext = createContext();

// create a provider for components to consume and subscribe to changes
const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState({ isLoggedIn: false, username: '' });

    return (
        <AdminContext.Provider value={{ admin, setAdmin }}>
            {children}
        </AdminContext.Provider>
    );
};

// export both the context and the provider
export { AdminContext, AdminProvider };
