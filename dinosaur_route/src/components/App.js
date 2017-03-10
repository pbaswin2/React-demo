import React, { Component } from 'react';
import {Router,Route,browserHistory,Redirect} from "react-router";
import Container from "./Container"

class App extends Component {
    render () {
        return (
            <Router history={browserHistory}>
                    
                    <Route path=":id" component={Container}/>
                    <Redirect from="*" to="bruhathkayosaurus"/>
            </Router>
        )
    }
}

export default App