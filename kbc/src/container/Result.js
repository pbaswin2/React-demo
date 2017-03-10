import React, { Component } from 'react'
import {browserHistory} from "react-router"

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
                <button onClick={this.restart.bind(this)}>Restart</button>
            </div>
        )
    }
}

export default Result