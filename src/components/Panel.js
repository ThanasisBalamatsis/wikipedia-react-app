import classnames from "classnames";

export default function Panel({children, searchPanel, termPanel, ...rest}) {

    const classes = classnames(
        "place-items-center border rounded p-3 shadow bg-gray-100", 
        {
            "w-full grid": searchPanel,
            "w-5/6 m-6 h-64 place-self-center": termPanel
        }
    );

    return (<div {...rest} className={classes}>{children}</div>);
}