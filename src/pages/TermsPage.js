import useTermsContext from '../hooks/useTermsContext';
import Panel from '../components/Panel';

export default function TermsPage() {
    const {foundTerms} = useTermsContext();

    const renderedTerms = foundTerms.map((term) => {
        return (
            <Panel 
                termPanel 
                key={term.pageid}
                term={term}
            >
                {term.title}
            </Panel>
        );
    });

    return (
        <div className='grid grid-cols-4'>
            {renderedTerms}
        </div>
    );
}