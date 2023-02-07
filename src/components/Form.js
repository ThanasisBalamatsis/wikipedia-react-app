import classnames from "classnames";
import Button from "./Button";
import Panel from "./Panel";
import searchTerm from "../wikipedia-api";

export default function Form({
    children,
    currentValue,
    setCurrentValue, 
    title, 
    search, 
    ...rest
}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        setCurrentValue(currentValue);
    }

    const handleChange = (event) => {
        setCurrentValue(event.target.value);
    };

    const handleClick = () => {
        const result = searchTerm(currentValue);
        console.log(result);
    };

    const classes = classnames("items-center", {
        "flex": search
    });

    return (
        <Panel {...rest}>
            <label className="font-thin text-2xl mb-1">{title}</label>
            <form className={classes} onSubmit={handleSubmit}>
                <label className="text-lg m-1 font-thin">{children}</label>
                <input className="font-thin font-style: italic text-lg h-9 m-5" value={currentValue} onChange={handleChange}/>
                <Button submit onClick={handleClick}>Submit</Button>
            </form>
        </Panel>
        
    );
}