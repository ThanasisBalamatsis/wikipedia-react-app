import { useState } from "react";
import classnames from "classnames";
import Button from "./Button";
import Modal from "./Modal";
import {FiBookOpen} from "react-icons/fi";
import { GoX } from "react-icons/go";

export default function Panel({children, searchPanel, termPanel, term, ...rest}) {

    const classes = classnames(
        "place-items-center border rounded p-3 shadow ", 
        {
            "w-full grid bg-stone-800": searchPanel,
            "w-5/6 m-6 h-60 place-self-center text-center bg-stone-100": termPanel
        }
    );

    const [showModal, setShowModal] = useState(false);

    const onClose = () => {
        setShowModal(false);
    }

    const onSave = () => {
        console.log('clicked save!');
    }

    const showText = () => {
        setShowModal(true);
    }

    const actionBar = <div>
        <Button onClick={onClose} close><GoX/></Button>
        <Button onClick={onSave} close></Button>
    </div>;

    const modal = <Modal onClose={onClose} actionBar={actionBar}>
        <p>Here is the modal</p>
    </Modal>;

    const content = (termPanel) ? <div>
                                    <div className="font-thin text-xl mb-2">{children}</div>
                                    <div  className="flex justify-center">
                                        <div className="w-5/6 h-24 rounded font-thin text-sm">{term.snippet.replace(/<[^>]+>/g, '')}</div>
                                    </div>
                                    <Button read onClick={showText}><FiBookOpen/></Button>
                                    {showModal && modal}
                                  </div> 
                                  : children;

    return (
        <div {...rest} className={classes}>
            {content}
        </div>
    );
}