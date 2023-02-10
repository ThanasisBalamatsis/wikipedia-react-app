import classnames from "classnames";

export default function Panel({children, searchPanel, termPanel, term, ...rest}) {

    const classes = classnames(
        "place-items-center border rounded p-3 shadow ", 
        {
            "w-full grid bg-stone-800": searchPanel,
            "w-5/6 m-6 h-64 place-self-center text-center bg-stone-100": termPanel
        }
    );

    const content = (termPanel) ? <div>
                                    <div className="font-thin text-xl mb-2">{children}</div>
                                    <div  className="flex justify-center">
                                        <div className="w-5/6 h-40 bg-stone-50 rounded font-thin text-sm">{term.snippet}</div>
                                    </div>
                                  </div> 
                                  : children;

    return (
        <div {...rest} className={classes}>
            {content}
        </div>
    );
}