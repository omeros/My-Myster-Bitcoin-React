
import './ContactEditPage.scss'
import { Component } from 'react'
import { connect } from 'react-redux'
import { getContactById, removeContact,saveContact } from '../../store/actions/contactActions'
import { NavLink, withRouter } from 'react-router-dom'
import ContactService  from '../../services/contactService.js'
import { MyImageUploader2 } from '../../cmps/MyImageUploader2/MyImageUploader2'


export class _ContactEditPage extends Component {
    state = {
        contact: '',
        errMsg: '',
        selectedFile : null,
        
    }

        mytest10 = (fileIwant) => {
           // console.log('file in father edit',fileIwant);
            //  this.setState( {{image: fileIwant}} )
            //  this.setState( this.state.contact.image, fileIwant )
             this.setState( {selectedFile:fileIwant} )
        }

    async componentDidMount() {
        console.log('this.props',this.props)
     //   console.log('this.props.match.params.id',this.props.selectedcontact)
        // this.setState({ contact :
        //      this.props.selectedcontact
        // })
        // this.setState( {contact:this.props.selectedcontact} )
       // console.log('contact state in edit page',this.state.contact)

        if(this.props.location.pathname === ("/edit/")){
      //      console.log('yes')
        }else{
     //       console.log('no')
        }
       // const { id } = this.props.selectedcontact
        try {
            // const contact = this.props.selectedcontact ? await this.props.getContactById(this.props.selectedcontact._id) : ContactService.getEmptyContact()
            const contact = this.props.location.pathname === ("/edit/") ?  ContactService.getEmptyContact():   this.props.selectedcontact
            this.setState({ contact  })
               console.log('state after what i want',contact.name)
      
        //   this.setState({ contact :
        //      this.props.selectedcontact
        // })
        } catch (err) {
            this.setState({ errMsg: 'contact Not Found' })
        }
    }

     
    fileSelectedHandler= event =>{
     //   console.log('the event upload,',event.target.files[0])
    //    console.log('my contact,',this.state.contact)
  
        this.setState({
          selectefFile : event.target.files[0],
          
        })
    //     this.setState({
    //       contact.image : event.target.files[0],
        
    //    })
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
       var x =  this.state.contact
       if(this.state.selectefFile){
           x.image =this.state.selectefFile
       }
        //this.state.contact.image= this.tate.selectefFile
        // await this.props.saveContact({ ...this.state.contact })
        await this.props.saveContact({ ...x })
        // await robotService.save({ ...this.state.robot })
        this.props.history.push('/')
    }



    render() {
        if (this.props.location.pathname === ("/edit/") ) {
        return (
            <div className="contact-edit-page">
                <div className="test123">
                    <div>
                    {/* {this.state.selectefFile && <img className="contact-details-image" src={`${this.state.selectefFile}`} alt="" />} */}
                    <MyImageUploader2   mytest10={this.mytest10}/>
                    {/* <input type="file" onChange={this.fileSelectedHandler}/> */}
                        <form className='contact-edit' onSubmit={this.onSaveContact}>
                            <label htmlFor="name-input">Name</label>
                            <input ref={this.inputRef} required type="text" className="edit-page-name" id="name-input" value={this.state.contact.fullname} onChange={this.handleChange} name="fullname" />
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
        }else{
        return (
            <div className="contact-edit-page">
              
                    <div>
                        {this.props.selectedcontact && <img className="contact-details-image" src={`${this.props.selectedcontact.image}`} alt="" />}
                        <form className='contact-edit' onSubmit={this.onSaveContact}>

                        {this.state.contact.fullname&&<label htmlFor="name-input">Name</label>}
                            {this.state.contact.fullname&&<input ref={this.inputRef} required type="text" className="edit-page-name" id="name-input" value={this.state.contact.fullname} onChange={this.handleChange} name="fullname" /> }
                            <label htmlFor="phone-input">Phone</label>
                            <input required type="text" id="phone-input" className="edit-page-phone" value={this.state.contact.phone} onChange={this.handleChange} name="phone" />
                            <label htmlFor="email-input">Email</label>
                            <input required type="text" id="email-input" className="edit-page-email" value={this.state.contact.email} onChange={this.handleChange} name="email" />
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
        )
        }
    }
}

const mapStateToProps = state => ({
    selectedcontact: state.contactReducer.currContact
})

const mapDispatchToProps = {
    getContactById,
    removeContact,
    saveContact
}
export const ContactEditPage = connect(mapStateToProps, mapDispatchToProps)(_ContactEditPage)