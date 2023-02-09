import useTermsContext from '../hooks/useTermsContext';

export default function TermsPage() {
    const {foundTerms} = useTermsContext();

    const renderedTerms = foundTerms.map((term) => {
        return (
            <div key={term.pageid}>{term.title}</div>
        );
    });

    return (
        <div>
            {renderedTerms}
        </div>
    );
}