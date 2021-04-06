
import { Component } from 'react'
import './ContactDetailsPage.scss'
import ContactService  from '../../services/contactService.js'


export class ContactDetailsPage extends Component {
    state = {
      selectedUser : ''
  }
    componentDidMount() {
        this.loadContact()
        // this.setState((state) => {
        //   )
        //   console.log('on ContactDetailsPage load',this.state.selectedUser)
          console.log('on ContactDetailsPage load, props :',this.selectedUser)
        //     return {: }
        //     });
    }
    loadContact(){
        this.setState((state) => {
            var myContact =  ContactService.getById(this.props.match.params.id)
            console.log('on Coniiiiiiiii',myContact)
            return {selectedUser: myContact}
            });
    }

    // loadContacts(){
    //     this.setState((state) => {
    //         var myContacts =  ContactService.getContacts()
    //         console.log('load contacts',myContacts)
    //         return {contacts: myContacts}
    //      });
    // }

    render() {
        const { selectedUser } = this.state
        return (
                 
            <div className="contact-details-page"> 
                <div className="contact-details">

                    <div className=""> {selectedUser.name} </div> 
                    <div className=""> {selectedUser.email} </div> 
                    <div className=""> {selectedUser.phone} </div>
                    <div className="test">
                    {/* <img className="myImage" src={`${this.props.selectedUser.image}`} alt="" /> */}
                    <img className="contact-details-image" src={`${'https://thispersondoesnotexist.com/image'}`} alt="" />
                        </div> 
                    {/* <img src=${} alt=""/> */}
                </div>
            </div>

        )
    }
}
