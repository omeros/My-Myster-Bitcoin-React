
import { Component } from 'react'
import UserService from '../../services/userService.js'
import BitcoinService from '../../services/BitcoinService.js'
import { TransferFund } from '../../cmps/TransferFund'
import { MovesList } from '../../cmps/MovesList'


import './HomePage.scss'

export class HomePage extends Component {

    state = {
        myUser: UserService.getUser(),
        logedInUser: UserService.getLogedInUser(),
        btc: this.props.btc,
        myImg: "",
        show: false
    }
    async loadCoins() {
        const btc = await BitcoinService.getRate()
        console.log('load btc  in home app', btc)
        this.setState({ btc })
    }

    componentDidMount() {
        this.loadCoins()
        //this.loadImg()
    }
    sortMoves() {
        if (this.state.logedInUser[0].moves) {
            var myMoves = this.state.logedInUser[0].moves
            myMoves.sort((a, b) => {
                return b.at - a.at
            })
            return myMoves
        } else {
            return null
        }
    }
    choosUserToTransfer(){
        //this.state.show=true
        this.setState({ show:!this.state.show })
      //  console.log("tranfer bitttttttttttt",  this.state.show)
   }
   
    render() {
        return (
            <div className="home-page">
                <div className="home-container">
                    <div> Hello  <span className="home-name">{this.state.myUser[0].fullname} </span> ! </div>

                    <div> You Have  {this.state.myUser[0].coins} coins</div>
                    <div> {this.state.btc} BTC                     </div>
                    {/* equls to  {this.state.btc&& <div>{ */}
                    {/* equls to{this.state.btc&&<div>{
                    (parseInt)((1/(this.state.btc)))*(this.state.myUser[0].coins)
                    }$ </div>} */}
                    <div>
                        <img className="home-image" src={`${this.state.myUser[0].image}`} alt="" />
                    </div>

                 
                    {/* <button onClick={() => this.choosUserToTransfer()}>choos User</button>
                    {this.state.show && <TransferFund />} */}


                    <div className="movelist-container-home">
                    {this.state.logedInUser[0].moves&&<MovesList className="movelist-container" moves={this.sortMoves()} />}
                    </div>

                   


                </div>
            </div>
        )
    }
}
