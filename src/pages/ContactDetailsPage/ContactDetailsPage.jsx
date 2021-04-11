
import { Component } from 'react'
import './ContactDetailsPage.scss'
import ContactService  from '../../services/contactService.js'
import { connect } from 'react-redux'
import {getContactById} from  '../../store/actions/contactActions'
import { NavLink, withRouter } from 'react-router-dom'
import UserService from '../../services/userService.js'
import BitcoinService  from '../../services/BitcoinService.js'
import { MovesList } from '../../cmps/MovesList'
import { TransferFund } from '../../cmps/TransferFund'



export class _ContactDetailsPage extends Component {
    state = {
      logedInUser : UserService.getLogedInUser(),
      btc :null,
      show: false
      

   //   contacts: this.props.contacts,
      //selectedUser : ''
  }
    componentDidMount() {
        //this.loadContact()
        this.props.getContactById(this.props.match.params.id)
            this.loadCoins()
        //  console.log('id of the contact  on details :',this.props.match.params.id)
        //     return {: }
        //     });
    }
    async loadCoins() {
      const btc = await BitcoinService.getRate()
     // console.log('load btc  in home app',btc)
      this.setState({ btc })
    }
    sortMoves(){
      if(this.state.logedInUser.moves){
          var myMoves = this.state.logedInUser.moves
          myMoves.sort((a,b)=>{
            return b.at-a.at
          })
      return myMoves
      }else{
        return null
      }
    }

    
    choosUserToTransfer(){
      //this.state.show=true
      this.setState({ show:!this.state.show })
      //  console.log("tranfer bitttttttttttt",  this.state.show)
    }
    closeModal=()=>{
       console.log('this.state.show',this.state.show)
      this.setState({ show:!this.state.show })

    }


    render() {
      if (!this.props.selectedcontact)  {
        return (
          <div className="contact-details-page"> 
          <div className="contact-details">

          
                    <div>
                      <div className="details-page-name">Hello  {this.state.logedInUser.fullname} </div> 
                      <div className="txt-details-page-afterlogin">You Have  {this.state.logedInUser.coins} Coins  </div> 
                    </div >
                    <button  onClick={() => this.choosUserToTransfer()}>choos User</button>
                     {this.state.show&&<TransferFund />}
                      <div className="movelist-container">
                        {this.state.logedInUser.moves&&<MovesList  className="movelist-container"moves={this.sortMoves()}/>}
                      </div>
                      

        </div>
    </div>


        )
      } else{  
        //const { selectedUser } = this.state.props
        return (
                 
            <div className="contact-details-page"> 
                <div className="contact-details">
                 <div>
                 {this.props.selectedcontact&&<div className="details-page-name"> {this.props.selectedcontact.fullname} </div> } 
                 {this.props.selectedcontact&& <div className=""> {this.props.selectedcontact.email} </div> }
                 {this.props.selectedcontact&& <div className=""> {this.props.selectedcontact.phone} </div> }
                            <div className="test">
                            {this.props.selectedcontact&&<img className="contact-details-image" src={`${this.props.selectedcontact.image}`} alt="" />}
                            </div>  
                            <div>
                              <NavLink exact to="/contacts" activeClassName="active-nav" className="details-link">Back</NavLink>
                              {this.props.selectedcontact&&<NavLink  to={'/edit/'+ this.props.selectedcontact._id} className="details-link">Edit </NavLink>}
                            </div>
                            <button className="transfer-btn" onClick={() => this.choosUserToTransfer()}>Transfer To User</button>
                            {this.state.show&&<TransferFund closeModal={this.closeModal} moneyTo={this.props.selectedcontact.fullname}/>}
                  </div>
              </div>
          </div>
        )
      }
    }
}   




                   {/* <div className="preview" onClick={() => test(this.props.selectedcontact._id)}> */}

// const mapStateToProps = state => {
//     return {
//       contacts: state.contacts
//     }
//   }

  const mapStateToProps = state => ({
 
    selectedcontact: state.contactReducer.currContact
})


  const mapDispatchToProps = {
    getContactById
}
  export const ContactDetailsPage = connect(mapStateToProps,mapDispatchToProps)(_ContactDetailsPage)