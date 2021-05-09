

import { Link } from 'react-router-dom'
import './ContactPreview.scss'

export const ContactPreview = ({ onSelectContact, contact }) => {

    function x() {

    }
    return (

        <Link to={'/contact/' + contact._id} className="preview-link">
            <div className="preview" onClick={() => onSelectContact(contact._id)}>
                <img className="image-Preview" src={`${contact.image}`} alt="" />
                <div className="contact-name">{contact.fullname}</div>

            </div>
        </Link>
    )
}

