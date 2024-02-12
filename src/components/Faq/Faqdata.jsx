import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

const Faqdata = ({ title, content }) => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
    return (
        <div className="accordion-item">
            <div className="accordion-title">
                <p>{title}</p>
                <div onClick={handleClick}>
                    {show ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faPlus} />}
                </div>
            </div>
            <div className={show ? "accordion-content-display" : "accordion-content"}>
                {content}
            </div>

        </div>
    )
}

export default Faqdata