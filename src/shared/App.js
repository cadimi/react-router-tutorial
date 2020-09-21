import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Test } from '../pages';


class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={ Home }/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Route path="/test" component={ Test }/>
            </div>
        );
    }
}

export default App;
