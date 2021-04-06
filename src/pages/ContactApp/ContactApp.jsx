import './ContactApp.scss'
import { Component } from 'react'
import ContactService  from '../../services/contactService.js'
import UserService  from '../../services/userService.js'
import BitcoinService  from '../../services/BitcoinService.js'
import { ContactList } from '../../cmps/ContactList'
import { HomePage } from '../HomePage'
import { ContactDetailsPage } from '../ContactDetailsPage'





export class ContactApp extends Component {
       state = {
        contacts :        null,// ContactService.getContacts(),
        user : UserService.getUser(),
        btc : '',
      }

  componentDidMount() {
    this.loadCoins()
    this.loadContacts()
  }

    loadContacts(){
        this.setState((state) => {
            var myContacts =  ContactService.getContacts()
            console.log('load contacts',myContacts)
            return {contacts: myContacts}
         });
    }

    
  async loadCoins() {
    const btc = await BitcoinService.query()
    console.log('load coins in app',btc)
    this.setState({ btc })
  }
  //   async loadCoins(){
  //     this.setState((state) => {
  //     const myBTC =  await BitcoinService.query()
  //     return { btc : myBTC}
  //   })
  // }

   onSelectContact = (contactId) => {
      // console.log('selectedUser in ContactApp befor', this.state.contacts.filter((contact)=>{ return (contact._id===contactId)} )[0])
      var selectedU =  this.state.contacts.filter((contact)=>{ return (contact._id===contactId)} )
      var test = [...selectedU][0]
      console.log('selectedUser in ContactApp after',test)
      this.setState({ selectedUser : test  } )
    }
      LoadUser(){
          console.log('load user !!!!' )
      }

   
      render() {
        const { contacts,user,btc } = this.state
      return (
              <div className="contact-app">
                      {user&&<HomePage key={user.id}  user={user}  btc={btc} />}
                  { contacts && <ContactList  contacts={contacts}  onSelectContact={this.onSelectContact}/>}

                  <div className="">
                          {/* {&&<ContactDetailsPage  selectedUser={selectedUser} />}  */}
                  </div>
                  
              </div>
      )
    }
  } 
  
  {/* { user && <ContactPreview key={user.id}  contact={user}/>} */}
