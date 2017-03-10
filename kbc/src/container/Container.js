import React, { Component } from 'react'
import {connect} from "react-redux"
import * as dispatchAction from "../action"
import{bindActionCreators} from "redux"


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

            <div>
                <h1>KBC</h1>
                 {React.cloneElement(this.props.children,this.props)}
          </div>
        )
    }
}

export default Container