import classnames from "classnames";

export default function Button({
    children,
    submit,
    close,
    save,
    read,
    ...rest
}) {
    const classes = classnames("flex items-center px-3 py-1.5 border h-9 m-1 font-thin",{
        "border-sky-600 bg-sky-600 text-white rounded" : submit,
        "border-red-400 bg-red-500" : close,
        "border-bg-stone-300 bg-stone-300 text-stone-600 text-sm rounded-lg h-8 w-1/6 justify-center" : read,
        "border-bg-red-300 bg-red-300 text-red-600 text-sm rounded-lg h-8 w-1/6 justify-center" : save,
    });

    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    );
}

Button.propTypes = {
    checkVariationValue: ({submit, close, read, save}) => {
        const count = Number(!!submit) + Number(!!close) + Number(!!read) + Number(!!save);

        if (count > 1) 
            return new Error("Button can have only either submit or close property");
    }
}