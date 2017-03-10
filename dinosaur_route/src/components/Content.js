import React, { Component } from 'react'
import Header from "./Header"
import Details from "./Details"
class Content extends Component {

    render () {
        let {dinosaur,id}=this.props;
        return (
            <div>
                <Header title={id}/>
                <Details dinosaur={dinosaur} title={id}/>
            </div>
        )
    }
}

export default Content