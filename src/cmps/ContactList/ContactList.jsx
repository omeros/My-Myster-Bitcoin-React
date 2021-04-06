
import { Component } from 'react'
import { ContactPreview } from '../../cmps/ContactPreview'


import './ContactList.scss'

export class ContactList extends Component {
        state = {
            contacts : this.props.contacts,
            onSelectContact : this.props.onSelectContact
        }
        componentDidMount() {
            console.log('on contact list',this.state.onSelectContact)
                  
            }
    render() {
        const { contacts } = this.state
        return (
            <div className="main-list">
                    <div className="list-container">
                        {contacts.map(contact =>
                                    <ContactPreview key={contact._id}  contact={contact}  onSelectContact={this.state.onSelectContact}/>
                                       // <button onClick={() => this.see(user.id)}>click to see</button>
                                    
                                    ) 
                                }
                    </div>
            </div>
        )
    }
}
