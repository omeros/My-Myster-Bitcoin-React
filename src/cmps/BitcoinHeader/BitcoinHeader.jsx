
import { NavLink, withRouter } from 'react-router-dom'
import './BitcoinHeader.scss'


export const BitcoinHeader = (props) => {

    return (
        <section>
            <div className="header-container">
                    <div className="navbar-container">
                        <div className="img-header-container">
                            <NavLink exact to="/" activeClassName="active-nav" className="img-header-container"> <img className="header-img" src={`${'https://image.shutterstock.com/image-photo/golden-coins-bitcoin-symbol-on-600w-1698227716.jpg'}`} alt="" /></NavLink>
                            <NavLink exact to="/" activeClassName="logo-name" className="home-nav">Mister Bitcoin</NavLink>
                            {/* <div className="logo-name">Mister Bitcoin</div> */}
                        </div>


                        <ul className="header-nav">
                            <li><NavLink exact to="/" activeClassName="active-nav" className="home-nav">Home</NavLink></li>
                            <li><NavLink to="/contacts" activeClassName="active-nav" className="contacts-nav">contacts</NavLink></li>
                            <li><NavLink to="/chart" activeClassName="active-nav"  className="chart-nav">chart</NavLink></li>
                            <li><NavLink  exact to="/login" activeClassName="active-nav"  className="chart-nav">login</NavLink></li>
                        </ul>
                    </div>
        </div>
    </section>
    )
}

