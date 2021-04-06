
import { Component } from 'react'
import userService from '../../services/userService';


import './HomePage.scss'

export class HomePage extends Component {

    state = {
        myUser :  this.props.user,
        btc : this.props.btc,
        myImg : ""
    }

    componentDidMount() {
      //this.loadImg()
      }
    //   loadImg(){
    //     this.setState((state) => {
    //         var myImg =  userService.queryNewImage()
    //         console.log('load Images',myImg)
    //         return {myImg: myImg}
    //         });
    // }
                                   // ******************{this.state.btc}  
    render() {
        return (
            <div className="home-page">
                <div className="home-container">
                    <div> Hello {this.state.myUser[0].name} ! </div>
                    <div> You Have  {this.state.myUser[0].coins} coins</div>
                   {/* equls to  {this.state.btc&& <div>{ */}
                   equls to{this.state.btc&&<div>{
                    (parseInt)((1/(this.state.btc)))*(this.state.myUser[0].coins)
                    }$ </div>}
                    <div>
                        {/* <img className="myImage" src='https://thispersondoesnotexist.com/image' alt="" /> */}
                        <img className="home-image" src={`${this.state.myUser[0].image}`} alt="" />
                        {/* <img className="myImage" src={`${this.myImg}`} alt="" /> */}
                    </div>
                    {/* <div>
                        <img className="coinImage" src={`${this.state.myUser[0].coinImg}`} alt="" />
                    </div> */}
                </div>
            </div>
        )
    }
}
