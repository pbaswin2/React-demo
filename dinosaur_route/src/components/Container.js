import React, { Component } from 'react'
import Menu from "./Menu";
import Content from "./Content"
class Container extends Component {
    constructor(props){
        super(props);
        this.state={
            dinosaur:{}
        }
    }
   
    componentDidMount(){
         fetch("https://dinosaur-facts.firebaseio.com/dinosaurs.json", {
          method: "GET",
          cache: "default"
        })
        .then(res => res.json())
        .then(json => this.setState({dinosaur:json}))
        .catch(err => console.log(err.message));
}
    render () {
        return (
            <div>
                <Menu keys={Object.keys(this.state.dinosaur)}/>
                <Content dinosaur={this.state.dinosaur} id={this.props.params.id}/>
                                
            </div>
        )
    }
}

export default Container