import React, {Component, Fragment} from 'react';
import './App.css'
import MyName from'./MyName';
import Counter from './Counter';

class App extends Component{
  render(){
    let name = "seo";
    const cssStyle = {
      backgroundColor :'black',
      padding : '16px',
      color : 'aqua',
      fontSize : '12px'
    };
    return (
      <Fragment>
        <div className='App'>
          hi there
        </div>

        <MyName name ="리액트" pertice ="감사"/>  
        <Counter> </Counter>
        
      </Fragment>
    );
  }
  
}

export default App;
