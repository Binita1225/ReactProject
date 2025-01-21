import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setCount] = useState(0)

  return (
    <>
     <div id="container">
        <div id="inpForm" className="header">
            <h2>To Do List</h2>
            <div className="form">
                
                <input type="text" id="inpField"/>
    
                <button id="addBtn" type="submit">Add</button>
            </div>
           
        </div>
       
        <div>
            <ul id="listItem">
                
            </ul>
        </div>
    </div>
    </>
  )
}

export default App
