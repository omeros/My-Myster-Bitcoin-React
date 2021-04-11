
import { Component } from 'react'

import './TransferFund.scss'
import UserService from '../../services/userService.js'
export class TransferFund extends Component {


    state ={
        amount : {
            x : '',
        },
    }
    componentDidMount() {
        console.log('on transfer fund cmps', this.state.amount)
        console.log('props on details', this.props)

    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(( prevState) => ({ amount:    { ...prevState.amount, [field]: value } }))

    }

    transferBitCoins(){
       var  transactionTo ={
            to :this.props.moneyTo,
            at :   new Date().getTime(),
            amount : parseInt(this.state.amount.x)
        }
        UserService.addMove(transactionTo)
        console.log('props on tranersfund',this.props.moneyTo)
        this.props.closeModal()
      // this.props.closeModal()
    }

    render() {
        return (
            <div className="transfer-founds-container">
         
                <form className='amount-form' >
                    
                    <label htmlFor="amount-input" className="amount-input-label">insert Amount</label>
                    <input ref={this.inputRef} required type="number" id="amount-input" className="input-amount  " value={this.state.amount.x}   onChange={this.handleChange} name="x" />
                </form>
                <button className="transfer-btn" onClick={() => this.transferBitCoins()}>transfer</button>          

                
            </div>
        )
    }
}
