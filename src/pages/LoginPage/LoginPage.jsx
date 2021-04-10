
import { Component } from 'react'
import './LoginPage.scss'
import UserService from '../../services/userService.js'
import { NavLink, withRouter } from 'react-router-dom'


export class LoginPage extends Component {



    state = {
                logedInUser: {
                    id: '123'
                },
                userCred: {
                    fullname: '',
                },
 }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ userCred: { ...prevState.userCred, [field]: value } }))

    }

    onSaveuserCred = async (ev) => {
        ev.preventDefault()
        console.log('save on login page', this.state.userCred);
        var newUser = UserService.login(this.state.userCred)
        this.setState({
            logedInUser:   newUser  })
      
    }

    render() {
        return (
            <section>
                <div className="login-page">

                    {/* <div className="login-container"> */}

                    <form className='contact-login' onSubmit={this.onSaveuserCred}>

                        <label htmlFor="name-input">Enter Your Fullname</label>
                        <input ref={this.inputRef} required type="text" className="input-login" id="name-input" value={this.state.userCred.fullname} onChange={this.handleChange} name="fullname" />
                        <p>{this.state.errMsg}</p>
                        <button className="save-login-page">save</button>
                        <NavLink to={'/' + this.state.logedInUser._id} className="details-link">Log In  </NavLink>
                        {/* <NavLink to={'/contact/' + this.state.logedInUser._id} className="details-link">Log In  </NavLink> */}

                    </form>
                    {/* </div> */}
                </div>
            </section>

        )
    }
}
