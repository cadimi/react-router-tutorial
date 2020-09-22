import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// import Home from '../pages2/Home';
// import About from '../pages2/About';
// import Contact from '../pages2/Contact';
import {About, Home, Contact, Google} from '../pages2';
import '../pages2/nav.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            radioGroup: {
                dev: false,
                stg: false,
                prod: false
            }
        }
    }

    handleRadio = (event) => {
        let obj = {...this.state.radioGroup}
        Object.keys(obj).map(function(key) {
            obj[key] = false
        })
        obj[event.target.value] = event.target.checked
        console.log(obj)
        this.setState({ radioGroup: obj })
    }

    render() {
        const area_left =
            <div className="area-left">
                <a href="https://www.google.com">
                    <img
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        width="100px" height="35px" alt="Google"/>
                </a>
            </div>

        const area_center =
            <div className="area-center">
                <ul className="menu">
                    <li onClick={console.log(this.state.radioGroup)}><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/google/www.google.com'>Google</Link></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/google/www.google.com'>Google</Link></li>
                    <li><Link to='/google/www.google.com'>Google</Link></li>
                </ul>
            </div>

        const area_right =
            <div className="area-right">
                <input type="radio" id="dev" name="radioGroup" value="dev" checked={this.state.radioGroup['dev']} onChange={this.handleRadio}/>
                <input type="radio" id="stg" name="radioGroup" value="stg" checked={this.state.radioGroup['stg']} onChange={this.handleRadio}/>
                <input type="radio" id="prod" name="radioGroup" value="prod" checked={this.state.radioGroup['prod']} onChange={this.handleRadio}/>
            </div>

        return (
            <Router>
                <nav id="main-menu" className="section">
                    { area_left }
                    { area_center }
                    { area_right }
                </nav>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/about' component={About}/>
                    <Route path='/google/:url' component={Google}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
