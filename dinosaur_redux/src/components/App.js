import React, { Component } from 'react';
import {Router,Route,browserHistory,Redirect} from "react-router";
import Container from "./Container";
import {Provider} from "react-redux";
import store from "../store"

class App extends Component {
    render () {
        return (
            <Provider store={store}>
            <Router history={browserHistory}>
                    
                    <Route path=":id" component={Container}/>
                    <Redirect from="*" to="bruhathkayosaurus"/>
            </Router>
            </Provider>
        )
    }
}

export default App