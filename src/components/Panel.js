import classnames from "classnames";

export default function Panel({children, className, ...rest}) {

    const classes = classnames(
        "border rounded p-3 shadow bg-white w-full", 
        className
    );

    return (<div {...rest} className={classes}>{children}</div>);
}