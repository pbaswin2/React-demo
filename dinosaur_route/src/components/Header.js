import React, { Component } from 'react'

class Header extends Component {
    render () {
        let {title}=this.props;
        return (
            <div>
                    <h2>{title}</h2>    
            </div>
        )
    }
}

export default Header