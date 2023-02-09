import Form from "../components/Form";
import useTermsContext from "../hooks/useTermsContext";

export default function SearchPage() {
    const {term, setTerm, foundTerms, setFoundTerms} = useTermsContext();

    return (
        <Form 
            search 
            title="Wikipedia Inventory"
            term = {term}
            setTerm = {setTerm}
        >
            Search for... 
        </Form>
    );
}