
import { Component } from 'react'
import { ContactPreview } from '../../cmps/ContactPreview'
import { NavLink } from 'react-router-dom'


import './ContactList.scss'

export class ContactList extends Component {
    state = {
        contacts: this.props.contacts,
        onSelectContact: this.props.onSelectContact
    }
    componentDidMount() {
        console.log('on contact list', this.state.contacts)

    }
    test(){

    }
    render() {
        const { contacts } = this.state
        if (!contacts) return <div className="loading"> Loading</div>
        return (
            <div className="main-list">
                    

<NavLink  exact to={'/edit/'} className="preview-link">   <div className="list-btn" > <img className="list-pluse-btn2" src={`https://res.cloudinary.com/omerphoto/image/upload/v1618002652/pluse2_su59a6.png`} alt="" /> </div>     </NavLink>
                <div className="list-container">
                    {contacts.map(contact =>
                        <ContactPreview key={contact._id} contact={contact} onSelectContact={this.state.onSelectContact} />
                        // <button onClick={() => this.see(user.id)}>click to see</button>

                    )
                    }
                                

                </div>
            </div>
        )
    }
}

