import Form from "../components/Form";
import useTermsContext from "../hooks/useTermsContext";

export default function SearchPage() {
    const {foundTerms, setFoundTerms} = useTermsContext();

    return (
        <Form 
            search 
            title="Wikipedia Inventory"
            currentValue = {foundTerms}
            setCurrentValue = {setFoundTerms}
        >
            Search for... 
        </Form>
    );
}