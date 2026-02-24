import Button from "./Button"

import Image from "./Image"
import Form from "./UseState"

function App() {

  return (
    <div>
      
      <h1 onClick={()=>{console.log("Welcome to react ")}}>hi react</h1>
      <Image></Image>
      <p>
        This is react we use to write the whole code of javascript and html
        It is Javascript library for building user interfaces (UI).
        It uses jsx syntax which is a syntax extension for JavaScript.
        that allows you to write HTML-like code within your JavaScript code.
         It makes it easier to create and manage UI components in React.
       </p>
       
          <button list='React' onClick={()=>{console.log(" Welcome to React ")}}> React </button>
          <br></br>
          <p>
            Do you want to join in React course please fill the Form 
          </p>
         <Form ></Form>
    
    </div>
    
  )
}

export default App
