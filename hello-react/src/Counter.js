import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  }

  // 컴포넌트가 만들어질때마다 이 함수를 호출.
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  
  // 컴포넌트가 화면에 나오기 직전에 호출되는 함수.
  componentWillMount() {
    console.log('componentWillMount (deprecated)');
  }

  // 화면에 나타나게 됬을때 호출됨.
  // 주로 외부 라이브러리 연동, ajax요청하거나 DOM 속성을 읽고 변경할때 사용
  componentDidMount() {
    console.log('componentDidMount');
  }

  //return  값에 따라서 렌더링할지말지 결정. => 변화에 따른 업데이트 . 리액트의 강점.
  shouldComponentUpdate(nextProps, nextState) {
    // 5 의 배수라면 리렌더링 하지 않음
    console.log('shouldComponentUpdate');
    console.log("nextProps : " , nextProps)
    console.log("nextState : " , nextState)
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  // shouldComponentUpdate 에서  true를 반환했을때만 호출.
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }
  
  // render()를 호출하고 난 다음에 발생.
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }
  

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  }

  handleDecrease = () => {
    this.setState(
      ({ number }) => ({
        number: number - 1
      })
    );
  }
  
  render() {
    console.log('render');
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;