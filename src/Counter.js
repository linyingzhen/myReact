import React,{Component} from 'react';
import './Counter.css';

class Counter extends Component {
    constructor(props){
        super(props);
        this.count = 0;


    }
    addOne(){
        console.log(this.count)
    }
    render(){
        return (
            <button className="btn" onClick={this.addOne}>add{this.count}</button>
        )
    }
}

export default Counter;