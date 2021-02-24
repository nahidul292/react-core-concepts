import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: 'Shamim',
    age: 34,
    salary: 75000,
    ye: 'Male'
  }
  var person2 = {
    name: 'Eva',
    age: 24,
    salary: 75000,
    ye: 'Female'
  }
  var style = {
    color:'red',
    backgroundColor: 'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="" style={style}> My heading is {person.name + " " + person.age}</h1>
        <h2>Singer: {person2.name  + " " + person2.age}</h2>
      </header>
    </div>
  );
}

export default App;
