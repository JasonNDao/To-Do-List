import './App.css';
import Todo from './Todo.js'
import jsonf from './jsonfile'
import jsonf2 from './jsonfile2'
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: jsonf
    };
    this.vetooveride = this.vetooveride.bind(this);//bind to App to change state
    this.hc = this.hc.bind(this);
    this.add=this.add.bind(this);
  }
  hc(id) {
    this.setState(prevState => {
      const newtodo = prevState.data.map( (current) => {
        if (current.id === id) {
          return {...current, completed : !current.completed}  //return all of current, but changed the completed object of it
        }
        return current;
      })
      return {
        data: newtodo
      }
    })
  }
  vetooveride() {
    this.setState(   //hardcoded setstate in
      {
        data: null
      }
      /*
      this.setState(prevState=>{   //change state by using previous state
        return{
          count=prevState+1
        }
      }*/

    )
  }
  add(){
    alert("Hi");
  }
  render() {
    const newarray = this.state.data.map((temp) => <Todo key={temp.id} keys={temp.id} name={temp.name} 
    hc={this.hc} completed={temp.completed} />)
    return (
      <div className="App">{newarray}
        <button onClick={this.vetooveride}>Reset</button>
        <button onClick={this.add}>Add</button>
      </div>  /*can use array as data */
    );
  }
}
export default App;
