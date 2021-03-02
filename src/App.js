import React, { useEffect, useState } from 'react';
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
  const actors =[
    {name:'Jamal', gender:'male', phone:'0171523255', salary: 35000},
    {name:'Toma', gender:'female', phone:'0171563255', salary: 15000},
    {name:'Kamal', gender:'male', phone:'0171523255', salary: 3000},
    {name:'Suchona', gender:'female', phone:'0181523255', salary: 17000},
    {name:'Jamal', gender:'male', phone:'0171523255', salary: 21000},
    {name:'Mina', gender:'female', phone:'0131523255', salary: 65000}
  ]
  const products= [
    {name:'Photoshop', price: '$99.90'},
    {name:'Illustrator', price:'$60.99'},
    {name:'Adobe PDF', price:'$6.99'},
    {name:'Adobe Premier', price:'$296.99'},
    {name:'Adobe Biscuit', price:'$0.99'},
    {name:'InDesign Elements', price:'$48.99'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let's learn react
        </p>
        <Todo></Todo>
        <Counter></Counter>
        <ul>
          {
            actors.map(actor => <li>{actor.name}</li>)
          }
          {
            products.map(pd =><li>{pd.name}</li>)
          }
        </ul>
        <h1 className="" style={style}> My heading is {person.name + " " + person.age}</h1>
        <h2 style={{backgroundColor:'cyan'}}>Singer: {person2.name  + " " + person2.age}</h2>
        {
          products.map(pd => <Products product={pd}></Products>)
        }
        {
          actors.map(actor=> <Nayoks nayokList={actor}></Nayoks>)
        }
      </header>
    </div>
  );
}

function Counter(){
  const handleIncrease =() => setCount(count + 1);
  const handleDecrease =() => setCount(count - 1);
  const [count,setCount]=useState(0);
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick ={handleIncrease}>Increase</button>
      <button onClick ={handleDecrease}>Decrease</button>
    </div>
  )
}

function Products(props){
  const personStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'250px',
    width:'250px',
    float: 'left',
    margin: '5px'
  }
const {name,price} = props.product;  // destructuring 
  return (
    <div style={personStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
};
function Nayoks(props){
  const nayokStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'300px',
    width:'250px',
    float: 'left',
    margin: '5px'
  }
  const {name,salary}=props.nayokList;
  return (
    <div style={nayokStyle}>
      <h1>Name: {name}</h1>
      <h3>Salary: {salary}</h3>
      <button>See details</button>
    </div>
  )
}

function Todo(){
  const [Todo,setTodo] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then (res =>res.json())
    .then (data =>setTodo(data))
  },[])

  return (
    <div>
      <h1>Dynamic toDo List : {Todo.length}</h1>
      {
        console.log(Todo)
      }
      {
        Todo.map(todo=>console.log(todo))
      }
      {
        Todo.map(todo=> <li>{todo.title} = {todo.id}</li>)
      }
    </div>
  )
}
export default App;