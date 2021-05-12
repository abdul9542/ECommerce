import './App.css';
import Homepage from './Components/Homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux';

import 'antd/dist/antd.css';
import Login from './Components/Login';
import Card  from './Components/Card';
import React,{ Component } from 'react';
import Sample  from './Components/Sample';
// import checkout from './Components/checkout';

class App extends Component {
render(){
  // const index= this.props.index.data.index;
  // console.log("index in app", index);
  return (
    <div className="App">
    
      <Router>
        <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/homepage' exact component={Homepage}/>
        <Route path='/homepage/:No' exact component={Card}/>
        {/* <Route path='/cart/' exact component={checkout}/> */}



        </Switch>
      </Router>
    </div>
  );
}
  
}


export default App;