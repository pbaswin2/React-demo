import React, { Component } from 'react'
import {Link} from "react-router"
import {ListGroup,ListGroupItem,Col} from "react-bootstrap"

class Menu extends Component {

    render () {
         let {keys}=this.props;
         let menu=keys.map((key,index)=><ListGroupItem key={index}><Link to={key}>{key}</Link></ListGroupItem>)
        return (
            <Col sm={4}>
            <h3>Menu</h3>
            <ListGroup>
                {menu}
            </ListGroup>
            </Col>
        )
    }
}

export default Menu