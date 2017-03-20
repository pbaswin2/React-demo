import React, { Component } from 'react'
import {connect} from "react-redux"
import * as dispatchAction from "../action"
import{bindActionCreators} from "redux"
import {Table} from "react-bootstrap"
import {browserHistory} from "react-router"

@connect(
      (state) => ({
    state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(dispatchAction, dispatch)
  })
)

class App extends Component {
    sr(){
        if(this.props.state.ball!=0){
            return ((this.props.state.runs/this.props.state.ball)*100).toFixed(2)
        }else{
            return 0;
        }
    }
    over(){
        var over=Math.floor(this.props.state.ball/6)*1;
    var ball=this.props.state.ball-over*6
    console.log(over,ball)
        return(over+"."+ball)

    }
    dot(){
        if(this.props.state.ball!=0)
       { return ((this.props.state.dot/this.props.state.ball)*100).toFixed(2)}
       else
       return 0;
    }

    render () {
    console.log(browserHistory);
        
        return (
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Runs</th>
                                <th>Balls</th>
                                <th>SR</th>
                                <th>Overs</th>
                                <th>Four</th>
                                <th>Six</th>
                                <th>Dotballs</th>
                                <th>%Dot</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Player1</td>
                                <td>{this.props.state.runs}</td>
                                <td>{this.props.state.ball}</td>
                                <td>{this.sr.call(this)}</td>
                                <td>{this.over.call(this)}</td>
                                <td>{this.props.state.four}</td>
                                <td>{this.props.state.six}</td>
                                <td>{this.props.state.dot}</td>
                                <td>{this.dot.call(this)}</td>

                            </tr>
                        </tbody>
                    </Table>
                    <Table>
                        <tbody>
                            <tr>
                                <td onClick={()=>{this.props.actions.run(1)}}>
                                    <button>1</button>
                                </td>
                                <td onClick={()=>{this.props.actions.run(2)}}>
                                    <button>2</button>
                                </td>
                                <td onClick={()=>{this.props.actions.run(3)}}>
                                    <button>3</button>
                                </td>
                                <td onClick={()=>{this.props.actions.run(4)}}>
                                    <button>4</button>
                                </td>
                                <td onClick={()=>{this.props.actions.run(6)}}>
                                    <button>6</button>
                                </td>
                                <td onClick={()=>{this.props.actions.run(0)}}>
                                    <button>0</button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
        )
    }
}

export default App