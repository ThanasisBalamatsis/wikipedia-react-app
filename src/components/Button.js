import classnames from "classnames";

export default function Button({
    children,
    submit,
    close,
    ...rest
}) {
    const classes = classnames("flex items-center px-3 py-1.5 border",{
        "border-blue-500 bg-blue-500 text-white rounded" : submit,
        "border-red-400 bg-red-500" : close
    });

    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    );
}

Button.propTypes = {
    checkVariationValue: ({submit, close}) => {
        const count = Number(!!submit) + Number(!!close);

        if (count > 1) 
            return new Error("Button can have only either submit or close property");
    }
}