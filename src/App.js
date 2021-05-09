import './App.css';
// import { Test } from './cmps/test.jsx'
import { ContactApp } from './pages/ContactApp'
import { BitcoinChart } from './pages/BitcoinChart'
import { BitcoinHeader } from './cmps/BitcoinHeader'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ContactDetailsPage } from './pages/ContactDetailsPage'
import { ContactEditPage } from './pages/ContactEditPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
// after folder moved



function App() {
  return (
    <Router>
      <div className="App">
            <BitcoinHeader/>
        <Switch>
            <Route component={LoginPage} path ='/login/'/>
            <Route component={ContactEditPage} path ='/edit/'/>
            <Route component={ContactEditPage} path ='/edit/:id '/>
            <Route component={ContactDetailsPage} path ='/contact/:id'/>
            <Route  exact component={BitcoinChart} path='/chart' />
            <Route   component={ContactApp} path='/contacts' />
            <Route   component={HomePage} path='/' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;  
