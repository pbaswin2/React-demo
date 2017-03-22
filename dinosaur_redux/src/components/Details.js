import React, { Component } from 'react'
import {Col,ListGroup,ListGroupItem} from "react-bootstrap"

class Details extends Component {
    render () {
        let {dinosaur,title}=this.props
        let detail=null;
        if(Object.keys(dinosaur).length>0 && title!=undefined){

        let categories=Object.keys(dinosaur[title]);
         detail=categories.map((category,index)=>{
    return <ListGroupItem key={index}>{category}:{dinosaur[title][category]}</ListGroupItem>})}
        return (
            <Col sm={6}>
            <ListGroup>
                {detail}
            </ListGroup>
            </Col>
        )
    }
}

export default Details