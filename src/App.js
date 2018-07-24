import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
    constructor(props){
        super(props);
        this.addClick=this.addClick.bind(this);
        // this.removeClick=this.removeClick.bind(this);
    }

    addClick(){
        let text=this.inputRef.value;
        this.props.addDispatch({
            type:'ADD',
            text:text
        })
    }

    removeClick(text){
        this.props.addDispatch({
            type:'REMOVE',
            id:text
        })
    }

  render() {
        let {list}={...this.props};
    return (
      <div className="App">
          <input type="text" ref={ref=>this.inputRef=ref}/>
          <button onClick={this.addClick}>add</button>
          {
              list.length>0?list.map((item,index)=>{
                  return <p key={index} onClick={this.removeClick.bind(this,item.id)}><span>{index+1}</span><span>{item.text}</span></p>
              }):null
          }
      </div>
    );
  }
}

let mapStateToProps=function (state,ownProps) {
    return {
        list:state.list
    }
};

let mapDispatchToProps=function (dispatch) {
    return {
        addDispatch:action=>dispatch(action)
    }
};



export default connect(mapStateToProps,mapDispatchToProps)(App);
