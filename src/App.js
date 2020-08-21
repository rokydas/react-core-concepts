import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var name = "Roky Das";
  const person = {
    firstName: 'Roky',
    lastName: 'Das'
  }
  var style = {
    color: 'yellow',
    backgroundColor: 'black'
  }
  const persons = ['Jhankar Mahbub', 'Roky Das', 'Sd Saruj'];
  const mobiles = ['07895412896', '01521227862', '47896523654'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Heading: {2/3*6+10}</h1>
        <h3 style={style}>Hello {person.firstName + ' ' + person.lastName}</h3>
        
        {/* similar in look, different in data ==> component */}
        <Person name={persons[0]} mobile={mobiles[0]}></Person> 
        <Person name={persons[1]} mobile={mobiles[1]}></Person> 
        <Person name={persons[2]} mobile={mobiles[2]}></Person> 
        
        {/* use a component by a tag */}
        <p>This is a paragraph using emmet in react.</p>

        <ul>
          {
            productNames.map(product => <li>{product}</li>)
          }
        </ul>
        {
          products.map(data => <Product product={data}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product>
        <Product product={products[4]}></Product> */}

        {
          friends.map(data => <Friends info = {data}></Friends>)
        }

        <Counter></Counter>
        <Users></Users>
      </header>
    </div>
  );
}

function Person(props){
  // console.log(props);
  // without div it will make a error. Because, it cannot return multiple element. 
  const nameStyle = {
    border: '5px solid red', 
    margin: '10px'
  }
  return (
    <div style={nameStyle}>
      <h4>Name: {props.name}</h4>
      <p>Mobile Number: {props.mobile}</p>
      <p>Hero of Programming Hero team</p>
    </div>
  )
}

// <div style={{border: '5px solid red', margin: '10px'}}>
// here, we have used two curly brackets. One is for style = {}
// and another is to declare a object. 

const products = [
  {name: 'Photoshop', price: '$90'}, 
  {name: 'Illustrator', price: '$50'}, 
  {name: 'Creative Pro', price: '$60'}, 
  {name: 'After Effects', price: '$80'}, 
  {name: 'Premiere Pro', price: '$100'},
  {name: 'Animate', price: '$150'}
];

const productNames = products.map(data => data.name);
console.log(productNames);

function Product(props){

  const productBox = {
    border: '5px solid gray',
    backgroundColor: 'lightgray',
    borderRadius: '10px',
    color: 'black',
    padding: '10px', 
    float: 'left',
    height: '200px',
    width: '300px'
  }

  const {name, price} = props.product;

  return (
    <div style={productBox}>
      <h5>Name: {name}</h5>
      <h3>Price: {price}</h3>
      <button>Buy Now</button>
    </div>
  );
}

const friends = [
  {name: 'Sd Saruj', age: 23},
  {name: 'Jabed', age: 23},
  {name: 'Absar', age: 22}
]

function Friends(props){
  console.log(props);
  return (
    <div style={{border: '5px solid red'}}>
      <h2>Name: {props.info.name}</h2>
      <h3>Age: {props.info.age}</h3>
    </div>
  );
}

function Counter(){ 
  const [count, setCount] = useState(0);
  // [variable, function] = useState(initial value);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}


function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => { // it is called auto to load data. 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []) // [] is here not to load data again and again. 
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name} - {user.email}</li>)
        }
      </ul>
    </div>
  )
}

export default App;


