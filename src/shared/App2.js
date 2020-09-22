import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// import Home from '../pages2/Home';
// import About from '../pages2/About';
// import Contact from '../pages2/Contact';
import {About, Home, Contact, Google} from '../pages2';
import '../pages2/nav.css'

class App extends Component {
    render() {
        return (
            <Router>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/google'}>Google</Link></li>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/google'}>Google</Link></li>
                    <li><Link to={'/google'}>Google</Link></li>
                </ul>
                <Switch>
                    <Route exact path='/' component={ Home }/>
                    <Route path='/contact' component={ Contact }/>
                    <Route path='/about' component={ About }/>
                    <Route path='/google' component={ Google }/>
                </Switch>
            </Router>
        );
    }
}

export default App;
