import React, { Component } from 'react'
import {connect} from "react-redux"
import * as dispatchAction from "../action"
import{bindActionCreators} from "redux"
import {Panel} from "react-bootstrap"


@connect(
      (state) => ({
    state: state
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

            <Panel  header="KBC" bsStyle="primary">
                 {React.cloneElement(this.props.children,this.props)}
          </Panel>
        )
    }
}

export default Container