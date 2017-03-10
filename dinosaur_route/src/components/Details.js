import React, { Component } from 'react'

class Details extends Component {
    render () {
        let {dinosaur,title}=this.props
        let detail=null;
        if(Object.keys(dinosaur).length>0 && title!=undefined){

        let categories=Object.keys(dinosaur[title]);
         detail=categories.map((category,index)=>{
    return <li key={index}>{dinosaur[title][category]}</li>})}
        return (
            <ul>
                {detail}
            </ul>
        )
    }
}

export default Details