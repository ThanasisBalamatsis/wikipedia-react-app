import useTermsContext from '../hooks/useTermsContext';

export default function FoundTermsPage() {
    const {foundTerms} = useTermsContext();

    const renderedTerms = foundTerms.map((term) => {
        return (
            <div key={term.id}>{term}</div>
        );
    });

    return (
        <div>
            {renderedTerms}
        </div>
    );
}