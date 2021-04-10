import './ContactApp.scss'
import { Component } from 'react'
import ContactService from '../../services/contactService.js'
import UserService from '../../services/userService.js'
import BitcoinService from '../../services/BitcoinService.js'
import { ContactList } from '../../cmps/ContactList'
import { HomePage } from '../HomePage'
import { ContactDetailsPage } from '../ContactDetailsPage'
import { connect } from 'react-redux'
import {loadContacts} from  '../../store/actions/contactActions'





export class _ContactApp extends Component {
  state = {
    contacts: this.props.contacts,// ContactService.getContacts(),
    user: UserService.getUser(),
    btc: '',
  }

  componentDidMount() {
    console.log(' Pros on contact aApp ', this.props)
    this.loadCoins()
    this.props.loadContacts()
  }



  async loadCoins() {
    const btc = await BitcoinService.getRate()
    //  console.log('load coins in app',btc)
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
    var selectedU = this.state.contacts.filter((contact) => { return (contact._id === contactId) })
    var test = [...selectedU][0]
    //   console.log('selectedUser in ContactApp after',test)
    this.setState({ selectedUser: test })
  }
  LoadUser() {
    console.log('load user !!!!')
  }


  render() {
    const { contacts, user, btc } = this.state
    return (
      <div className="contact-app">
        {/* {user&&<HomePage key={user.id}  user={user}  btc={btc} />} */}
        <section className="list-section">
          {contacts && <ContactList contacts={contacts} onSelectContact={this.onSelectContact} />}
        </section>
        <div className="">
          {/* {&&<ContactDetailsPage  selectedUser={selectedUser} />}  */}
        </div>

      </div>
    )
  }



}
const mapStateToProps = state => {
  return {
    contacts: state.contactReducer.contacts
  }
}

const mapDispatchToProps = {
    loadContacts
}
export const ContactApp = connect(mapStateToProps,mapDispatchToProps)(_ContactApp)

{/* { user && <ContactPreview key={user.id}  contact={user}/>} */ }
