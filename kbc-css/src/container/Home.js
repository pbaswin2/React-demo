import React, { Component } from 'react'
import {browserHistory} from "react-router"
import {Button} from "react-bootstrap"


class Home extends Component {
   
    start(){
        this.props.actions.setName(this.refs.name.value)
        browserHistory.push("/game")
    }
   
    render () {
        return (
            <div>
                <input ref="name" type="text" placeholder="Enter player name"/>
                <Button bsStyle="success" onClick={this.start.bind(this)}>Start</Button>
            </div>
        )
    }
}

export default Home