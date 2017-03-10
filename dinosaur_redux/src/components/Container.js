import React, { Component } from 'react'
import Menu from "./Menu";
import Content from "./Content"
import {connect} from "react-redux"
import * as dispatchAction from "../action"
import{bindActionCreators} from "redux"

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
            <div>
                <Menu keys={Object.keys(this.props.dinosaur)}/>
                <Content dinosaur={this.props.dinosaur} id={this.props.params.id}/>
                                
            </div>
        )
    }
}

export default Container