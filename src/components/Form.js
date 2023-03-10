import classnames from "classnames";
import Button from "./Button";
import Panel from "./Panel";
import searchTerm from "../wikipedia-api";

export default function Form({
    children,
    term,
    setTerm,
    setFoundTerms, 
    title, 
    search, 
    ...rest
}) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await searchTerm(term);
        setFoundTerms(result);
        console.log(result);
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    const classes = classnames("items-center", {
        "flex": search
    });

    return (
        <Panel searchPanel {...rest}>
            <label className="font-thin text-2xl text-stone-50 mb-1">{title}</label>
            <form className={classes} onSubmit={handleSubmit}>
                <label className="text-lg m-1 font-thin text-stone-50">{children}</label>
                <input className="font-thin font-style: italic text-lg text-center h-9 m-5 text-stone-50 rounded bg-stone-700" value={term} onChange={handleChange}/>
                <Button submit>Submit</Button>
            </form>
        </Panel>
    );
}