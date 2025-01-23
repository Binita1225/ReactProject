import { useState } from "react"
import './todoCss.css' 

const Todo = () =>{
    const[input, setInpField] = useState("")
    const[todoList, setList] = useState([])

    const addBtn = () =>{
        if (input === "") return;

        // setList([...todoList, input])
        setInpField("")
    }


    return(
        <div id="container">
        <div id="inpForm" className="header">
            <h2>To Do List</h2>
            <div className="form">
                
                <input type="text" value={input} onChange={(e) => setInpField(e.target.value)} />
    
                <button id="addBtn" type="submit">Add</button>
            </div>
           
        </div>
       
        <div>
            <ul id="listItem">
                
            </ul>
        </div>
    </div>
    )
}

export default Todo