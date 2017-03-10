import React, { Component } from 'react'
import {Link} from "react-router"

class Menu extends Component {

    render () {
         let {keys}=this.props;
         let menu=keys.map((key,index)=><li key={index}><Link to={key}>{key}</Link></li>)
        return (
            <ul>
                {menu}
            </ul>
        )
    }
}

export default Menu