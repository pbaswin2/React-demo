import React, { Component } from 'react'
import Menu from "./Menu";
import Content from "./Content"
import {connect} from "react-redux"
import * as dispatchAction from "../action"
import{bindActionCreators} from "redux"
import {Panel} from "react-bootstrap"

@connect(
      (state) => ({
    dinosaur: state.dinosaur,
  }),
  (dispatch) => ({
    actions: bindActionCreators(dispatchAction, dispatch)
  })
)
class Container extends Component {
   
    componentDidMount(){
     this.props.actions.fetchData();
}
    render () {
        return (
            <Panel header="Dinosaur" bsStyle="success">
                <Menu keys={Object.keys(this.props.dinosaur)}/>
                <Content dinosaur={this.props.dinosaur} id={this.props.params.id}/>
                                
            </Panel>
        )
    }
}

export default Container