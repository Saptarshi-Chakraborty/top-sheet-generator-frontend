import { createContext, useState } from "react";

// create a context named GlobalConfig
const GlobalConfigContext = createContext();

// create a provider for components to consume and subscribe to changes
const GlobalConfigProvider = ({ children }) => {
    const [config, setConfig] = useState({ hasFetched: false, data: { }, timestamp: null });
    
    return (
        <GlobalConfigContext.Provider value={{ config, setConfig }}>
            {children}
        </GlobalConfigContext.Provider>
    );
};

// export both the context and the provider
export { GlobalConfigContext, GlobalConfigProvider };