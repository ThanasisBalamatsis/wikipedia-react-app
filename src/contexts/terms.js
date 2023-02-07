import { createContext, useState } from "react";

const TermsContext = createContext();

function Provider({children}) {
    const [savedTerms, setSavedTerms] = useState([]);
    const [foundTerms, setFoundTerms] = useState([]);

    const shared = {
        savedTerms,
        foundTerms,
        setSavedTerms,
        setFoundTerms
    };

    return (
        <TermsContext.Provider value={shared}>
            {children}
        </TermsContext.Provider>
    );
}

export default TermsContext;
export {Provider};