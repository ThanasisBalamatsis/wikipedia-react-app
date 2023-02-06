import classnames from "classnames";

export default function Panel({children, className, ...rest}) {

    const classes = classnames(
        "grid place-items-center border rounded p-3 shadow bg-gray-100 w-full", 
        className
    );

    return (<div {...rest} className={classes}>{children}</div>);
}