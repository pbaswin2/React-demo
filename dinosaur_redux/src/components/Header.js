import React, { Component } from 'react'
import {PageHeader} from "react-bootstrap"

class Header extends Component {
    render () {
        let {title}=this.props;
        return (

                    <PageHeader>{title}</PageHeader>    
            
        )
    }
}

export default Header