
import { NavLink, withRouter } from 'react-router-dom'
import './BitcoinHeader.scss'


export const BitcoinHeader = (props) => {

    return (
        <div>
            <div className="header-container">

                <div className="img-header-container">
                    <NavLink exact to="/" activeClassName="active-nav" className="img-header-container"> <img className="header-img" src={`${'https://image.shutterstock.com/image-photo/golden-coins-bitcoin-symbol-on-600w-1698227716.jpg'}`} alt="" /></NavLink>
                    <NavLink exact to="/" activeClassName="logo-name" className="home-nav">Mister Bitcoin</NavLink>
                    {/* <div className="logo-name">Mister Bitcoin</div> */}
                </div>


                <ul className="header-nav">
                    <li><NavLink exact to="/" activeClassName="active-nav" className="home-nav">Home</NavLink></li>
                    <li><NavLink to="/contacts" activeClassName="active-nav" className="contacts-nav">contacts</NavLink></li>
                    <li><NavLink to="/chart" activeClassName="active-nav"  className="chart-nav">chart</NavLink></li>
                </ul>
                {/* <div className="header-nav">
                    <div className="home-nav"> Home</div>
                    <div className="contacts-nav">contacts</div>
                    <div className="edit-nav">edit</div>
                    <div className="chart-nav">chart</div>
                </div> */}
            </div>
        </div>
    )
}

