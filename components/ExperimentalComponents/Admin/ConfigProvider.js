import { createContext, useState } from "react";

// create a context named ConfigContext
const ConfigContext = createContext();

// create a provider for components to consume and subscribe to changes
const ConfigProvider = ({ children }) => {
    const [config, setConfig] = useState({ hasFetched: false, data: { }, timestamp: null });

    return (
        <ConfigContext.Provider value={{ config, setConfig }}>
            {children}
        </ConfigContext.Provider>
    );
};

// export both the context and the provider
export { ConfigContext, ConfigProvider };