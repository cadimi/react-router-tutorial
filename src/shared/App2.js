import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {About, Home, Contact, Google} from '../pages2';
import '../pages2/nav.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            radioGroup: {
                dev: false,
                stg: false,
                prod: true
            },
            data_set: [
                {
                    "name": "address1",
                    "dev": "www.naver.com",
                    "stg": "www.daum.net",
                    "prod": "www.google.com"
                },
                {
                    "name": "address2",
                    "dev": "www.naver.com",
                    "stg": "www.daum.net",
                    "prod": "www.google.com"
                },
                {
                    "name": "address3",
                    "dev": "www.naver.com",
                    "stg": "www.daum.net",
                    "prod": "www.google.com"
                },
                {
                    "name": "address4",
                    "dev": "www.naver.com",
                    "stg": "www.daum.net",
                    "prod": "www.google.com"
                },
                {
                    "name": "address5",
                    "dev": "www.naver.com",
                    "stg": "www.daum.net",
                    "prod": "www.google.com"
                },
                {
                    "name": "address6",
                    "dev": "www.naver.com",
                    "stg": "www.daum.net",
                    "prod": "www.google.com"
                },
                {
                    "name": "address7",
                    "dev": "www.naver.com",
                    "stg": "www.daum.net",
                    "prod": "www.google.com"
                },
                {
                    "name": "address8",
                    "dev": "www.naver.com",
                    "stg": "www.daum.net",
                    "prod": "www.google.com"
                },
                {
                    "name": "address9",
                    "dev": "www.naver.com",
                    "stg": "www.daum.net",
                    "prod": "www.google.com"
                },
            ]
        }
    }

    handleRadio = (event) => {
        let obj = {...this.state.radioGroup}
        Object.keys(obj).map(function (key) {
            obj[key] = false
        })
        obj[event.target.value] = event.target.checked
        console.log(obj)
        this.setState({radioGroup: obj})
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
                    {this.state.data_set.map(data => {
                        let temp = {...this.state.radioGroup}
                        console.log("dev " + temp.dev)
                        console.log("stg " + temp.stg)
                        console.log("prod " + temp.prod)

                        if (temp["dev"]){
                                temp = data["dev"]
                        } else if(temp["stg"]){
                                temp = data["stg"]
                        } else if(temp["prod"]){
                                temp = data["prod"]
                        }
                        console.log("afterward " + temp)
                        return <li>
                            <Link to={`/google/${temp}`} >
                                {data["name"]}
                            </Link>
                        </li>
                    })}
                </ul>
            </div>

        const area_right =
            <div className="area-right">
                <input
                    type="radio"
                    id="dev"
                    name="radioGroup"
                    value="dev"
                    checked={this.state.radioGroup['dev']}
                    onChange={this.handleRadio}
                />
                <input
                    type="radio"
                    id="stg"
                    name="radioGroup"
                    value="stg"
                    checked={this.state.radioGroup['stg']}
                    onChange={this.handleRadio}
                />
                <input
                    type="radio"
                    id="prod"
                    name="radioGroup"
                    value="prod"
                    checked={this.state.radioGroup['prod']}
                    onChange={this.handleRadio}/>
            </div>

        return (
            <Router>
                <nav id="main-menu" className="section">
                    {area_left}
                    {area_center}
                    {area_right}
                </nav>
                <Switch>
                    <Route exact path='/' component={ Home }/>
                    <Route path='/contact' component={ Contact }/>
                    <Route path='/about' component={ About }/>
                    <Route path='/google/:url' component={ Google }/>
                </Switch>
            </Router>
        );
    }
}

export default App;
