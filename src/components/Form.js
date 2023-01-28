import { useState } from "react";
import Button from "./Button";
import Panel from "./Panel";
import searchTerm from "../wikipedia-api";

export default function Form({children, className, ...rest}) {
    const [term, setTerm] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        searchTerm(term);
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    const handleClick = () => {
        const result = searchTerm(term);
        console.log(result);
    };

    return (
        <Panel className={className} {...rest}>
            <form onSubmit={handleSubmit}>
                <label>{children}</label>
                <input className="font-bold" value={term} onChange={handleChange}/>
                <Button submit onClick={handleClick}>Submit</Button>
            </form>
        </Panel>
        
    );
}