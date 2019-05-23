import React, {Component} from 'react';

class Counter extends Component{
    state = {
        number : 0,
        foo : {
            bar : 0,
            foobar : 1
        }
    }
    constructor(props){
        super(props);
        
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }
    handleIncrease() {
        this.setState({
            number : this.state.number + 1
        })
    }

    handleDecrease() {
        this.setState({
            number : this.state.number - 1
        })
    }
    render(){
        return (
            <div>
                <h1> 카운터 </h1>
                <div> 값 : {this.state.number} </div>
                <div> foo : {this.state.foo} </div>
                <button onClick={this.handleIncrease}> + </button>
                <button onClick={this.handleDecrease}> - </button>
            </div>
        );
    }
    
}

export default Counter;