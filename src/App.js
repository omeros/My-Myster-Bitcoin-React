import './App.css';
// import { Test } from './cmps/test.jsx'
import { ContactApp } from './pages/ContactApp'
import { BitcoinChart } from './pages/BitcoinChart'
import { BitcoinHeader } from './cmps/BitcoinHeader'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ContactDetailsPage } from './pages/ContactDetailsPage'



function App() {
  return (
    <Router>
      <div className="App">
            <BitcoinHeader/>
        <Switch>
            <Route component={ContactDetailsPage} path ='/contact/:id'/>
            <Route  exact component={BitcoinChart} path='/chart' />
            <Route   component={ContactApp} path='/' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
