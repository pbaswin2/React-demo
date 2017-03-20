import React, { Component } from 'react'
import {browserHistory} from "react-router"
import {Button} from "react-bootstrap"


class Result extends Component {

    restart(){
        this.props.actions.reset();
        browserHistory.push("/")
    }
    render () {
        var Result=null;

        if(this.props.state.score===10000){
            Result=<div> You Won The Title</div>
        }
        else{
            Result=<div>You Won Rs.{this.props.state.score}</div>
        }
        return (
            <div>
                {Result}
                <Button  bsStyle="info" onClick={this.restart.bind(this)}>Restart</Button>
            </div>
        )
    }
}

export default Result