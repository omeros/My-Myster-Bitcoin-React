
import { Component } from 'react'
import { connect } from 'react-redux'
import { getContactById, removeContact,saveContact } from '../../store/actions/contactActions'
import { NavLink, withRouter } from 'react-router-dom'
import ContactService  from '../../services/contactService.js'


import './ContactEditPage.scss'

export class _ContactEditPage extends Component {
    state = {
        contact: '',
        errMsg: ''
    }

    // async componentDidMount() {
    //     console.log('props in tdit page', this.props)
    //     if(!this.props.selectedcontact){
    //         console.log('selectedcontact === null')
    //         // this.stat.contact = ContactService.getEmptyContact()
    //         console.log( 'ContactService.getEmptyContact()', ContactService.getEmptyContact() )
    //     } else{
    //         this.stat.contact = this.props.selectedcontact
    //     }
    // }


    async componentDidMount() {
        console.log('this.props.selectedcontact',this.props.selectedcontact)
        console.log('',this.props.match.params.id)

        const { id } = this.props.match.params
        try {
            const contact = id ? await ContactService.getById(id) : ContactService.getEmptyContact()
            this.setState({ contact }, () => {
                // this.inputRef.current.focus()
                // this.inputRef.current.select()
            })
        } catch (err) {
            this.setState({ errMsg: 'contact Not Found' })
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ contact: { ...prevState.contact, [field]: value } }))
    }
    onRemoveContact = async () => {
        await this.props.removeContact(this.props.selectedcontact._id)
        console.log('props in tdit page', this.props)
    }
    onSaveContact = async (ev) => {
        ev.preventDefault()
        console.log('save on edit page', this.state.contact);
        await this.props.saveContact({ ...this.state.contact })
        // await robotService.save({ ...this.state.robot })
        this.props.history.push('/')
    }



    render() {
        if (!this.props.selectedcontact) 
        return (
            <div className="contact-edit-page">
                <div className="test123">
                    <div>
                        <form className='contact-edit' onSubmit={this.onSaveContact}>

                            <label htmlFor="name-input">Name</label>
                            <input ref={this.inputRef} required type="text" className="edit-page-name" id="name-input" value={this.state.contact.name} onChange={this.handleChange} name="name" />
                            <label htmlFor="phone-input">Phone</label>
                            <input required type="text" id="phone-input" className="edit-page-phone" value={this.state.contact.phone}  onChange={this.handleChange} name="phone" />
                            <label htmlFor="email-input">Email</label>
                            <input required type="text" id="email-input" className="edit-page-email" value={this.state.contact.email} onChange={this.handleChange} name="email" />
                            <p>{this.state.errMsg}</p>
                            <button className="save-edit-page">Save</button>
                            <div>
                                <NavLink to={'/contacts/'} className="details-link">Back </NavLink>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        ) 
        
        
        
        
        // <div>{this.state.errMsg || 'Loading'}</div>
        // const { model, type, batteryStatus } = this.state.robot
        return (
            <div className="contact-edit-page">
                <div className="test123">
                    <div>
                        {this.props.selectedcontact && <img className="contact-details-image" src={`${this.props.selectedcontact.image}`} alt="" />}
                        <form className='contact-edit' onSubmit={this.onSaveContact}>

                            <label htmlFor="name-input">Name</label>
                            <input ref={this.inputRef} required type="text" className="edit-page-name" id="name-input" value={this.props.selectedcontact.name} onChange={this.handleChange} name="name" />
                            <label htmlFor="phone-input">Phone</label>
                            <input required type="text" id="phone-input" className="edit-page-phone" value={this.props.selectedcontact.phone} onChange={this.handleChange} name="phone" />
                            <label htmlFor="email-input">Email</label>
                            <input required type="text" id="email-input" className="edit-page-email" value={this.props.selectedcontact.email} onChange={this.handleChange} name="email" />
                            <p>{this.state.errMsg}</p>
                            <button className="save-edit-page">Save</button>
                            <div>
                                {this.props.selectedcontact && <NavLink to={'/contact/' + this.props.selectedcontact._id} className="details-link">Back </NavLink>}
                                {this.props.selectedcontact && <NavLink to={'/contacts/'} className="details-link" onClick={this.onRemoveContact}>Delete </NavLink>}
                                {/* <div className="" onClick={() => test(this.props.selectedcontact._id)}> Back</div> */}

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    selectedcontact: state.currContact
})

const mapDispatchToProps = {
    getContactById,
    removeContact,
    saveContact
}
export const ContactEditPage = connect(mapStateToProps, mapDispatchToProps)(_ContactEditPage)