import { createContext, useState } from "react";

const TermsContext = createContext();

function Provider({children}) {
    const [term, setTerm] = useState("");
    const [foundTerms, setFoundTerms] = useState([]);
    const [savedTerms, setSavedTerms] = useState([]);

    const shared = {
        term,
        foundTerms,
        savedTerms,
        setTerm,
        setFoundTerms,
        setSavedTerms
    };

    return (
        <TermsContext.Provider value={shared}>
            {children}
        </TermsContext.Provider>
    );
}

export default TermsContext;
export {Provider};