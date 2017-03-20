import React, { Component } from 'react'
import {browserHistory} from "react-router"
import {Button,Panel} from "react-bootstrap"

class Game extends Component {
    result(){
         browserHistory.push("/result")
    }


    check(random){
        var {quiz,currentQues}=this.props.state;
        var selectedAns="";
        var array=document.getElementsByClassName("ans")
       
        for(let i=0;i<array.length;i++){
            if(array[i].checked){
                 if(this.props.state.quiz[currentQues][random].answer==array[i].value && currentQues<=9){
                        array[i].checked=false
                        this.props.actions.nextQuestion();
                 }
                 else{
                        browserHistory.push("/result")
                 }
            }
        }
    }
     
    render () {
     
        if(this.props.state.currentQues<=9){
               var {quiz,currentQues}=this.props.state;
        var random=Math.floor(Math.random()*quiz[currentQues].length)
        var game=null;
        console.log(quiz[currentQues][random].answer)
         game=(
            
            <Panel header={quiz[currentQues][random].question}>
            <p><input type="radio" className="ans" name="ans" value={quiz[currentQues][random].A}/>{quiz[currentQues][random].A}</p>
            <p><input type="radio" className="ans" name="ans" value={quiz[currentQues][random].B}/>{quiz[currentQues][random].B}</p>
            <p><input type="radio" className="ans" name="ans" value={quiz[currentQues][random].C}/>{quiz[currentQues][random].C}</p>
            <p><input type="radio" className="ans"  name="ans" value={quiz[currentQues][random].D}/>{quiz[currentQues][random].D}</p>
            <Button bsStyle="primary" onClick={this.check.bind(this,random)}>submit</Button>
            </Panel>
        )}
        else{
            game=(<Button bsStyle="success" onClick={this.result.bind(this)}>View Result</Button>)
        }
        return (
            <div>
                <h1>Hello {this.props.state.name}</h1>
                <span> Your score is {this.props.state.score}</span>
                {game}
            </div>
        )
    }
}

export default Game