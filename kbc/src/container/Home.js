import React, { Component } from 'react'
import {browserHistory} from "react-router"

class Home extends Component {
   
    start(){
        this.props.actions.setName(this.refs.name.value)
        browserHistory.push("/game")
    }
   
    render () {
        return (
            <div>
                <input ref="name" type="text" placeholder="Enter player name"/>
                <button onClick={this.start.bind(this)}>Start</button>
            </div>
        )
    }
}

export default Home