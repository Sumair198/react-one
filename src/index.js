import React from 'react';
import reactDom from 'react-dom';
import reactDOM from 'react-dom';
import './index.css'
import Heading from './Heading';

// function Hi(props)
// {
//   return <div className = 'sk'>
//    <strong> Hello {props.name} </strong>
//    <br></br>
//    <br></br>
//    <img height = "180px" width = "150px" src = {props.img}>

//    </img>

//     </div>;
// }

// reactDOM.render(<div><Hi name = 'Umair' img = 'https://images.unsplash.com/photo-1619724509229-18c42de2bf77?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/> 
// <Hi name = 'Sumair' img = 'https://images.unsplash.com/photo-1610475562502-fe51f86be4ef?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/> 
// <Hi name = 'Uzair' img = 'https://images.unsplash.com/photo-1580110104531-6dbe72d63c40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=344&q=80'/>
// </div>,document.querySelector('#root'))

// function Hi({name,age,salary})
// {
//   return <div className = 'sk'>hello {name} {age} {salary}</div>
// }
// reactDOM.render(<Hi name ='Sumair' age = '22' salary = '3000'/> ,document.querySelector('#root'))


// Videos Practice
// function Task()
// {
//   var name = 'Sumair'
//   var CurrentDate = new Date().toLocaleDateString()
//   var CurrentTime = new Date().toLocaleTimeString()
//   var img = 'https://picsum.photos/200/300'

//   return <div>
//     <h1 contentEditable='true'>my name is {name}</h1>
//     <h1 style={{color: 'red'}} >Hello  {name} !</h1> 
//     <p>Current date is  {CurrentDate}</p>
//     <p>Current Time is {CurrentTime}</p>
//     <img src = {img} />
//     <br />
//     <a href = 'https://www.facebook.com/'>
//     <img src = {img} />
//     </a>
//   </div>

// }
// reactDOM.render(
// <>
// <Task/>
// <Heading />
// </>
//   ,document.querySelector('#root'))





// function Gate({IsOpen})
// {
//   return <div>
//    hello Gate Is 
//     {IsOpen ? ' opened ' : ' closed '}
//   </div>
// }
// reactDom.render(<Gate IsOpen = {true}/> , document.querySelector('#root'))


// function Room() {
//   var [Isbright, IsSetBright] = React.useState(true)
  

//   var change = () => {
    
//     IsSetBright(!Isbright)

//   }

//   return <div>
//     The Room Is {Isbright ? 'Bright' : 'Dark'}
//     <br></br>
//     <button onClick={change}>Change</button>

//   </div>
// }
// reactDOM.render(<Room />, document.querySelector('#root'))



function Room()
{
  const [isLit , setLit] = React.useState(true);
  const lightedness = isLit ? 'lit' : 'dark';


  return <div className = {`room ${lightedness}`}>
    {/* The Room is {lightedness} */}
    <br />
    <br />
    <button id = 'btn' onClick={() =>setLit(!isLit)}>ON-OFF</button>
  </div>
}
reactDOM.render(<Room />, document.getElementById('root'));