import react, { useState } from "react"
import "../Components/todo.css"
import { RiDeleteBin6Line } from "react-icons/ri";
import TodoLi from "./todoLi";

let Todo = () => {




    let [inputVal, setinputVal] = useState("") 
    let [todoArray , UpdatetodoArray] = useState([])
    
    const addItem = ()=>{

        inputVal === ""?alert("Input required"):

        todoArray.push(inputVal)
        UpdatetodoArray([...todoArray])
        setinputVal("")
        
    }
    const deleteAll = ()=>{
        todoArray.splice(0)
        UpdatetodoArray([...todoArray])
        
    }
    return (

        <>
            <h1>To Do</h1>
            <div className="contaier">
                <div className="main">

                    <input value={inputVal} className="textinput" onChange={e=> setinputVal(e.target.value) }  id="myinput" type="text" placeholder="Enter Text"/>
                        <div className="btn">
                            <button onClick={addItem} className="btn1" >+</button>
                            <button className="btn2" onClick={deleteAll} ><RiDeleteBin6Line/></button>
                        </div>
                </div>
            </div>
            <TodoLi    updatearraySend = {todoArray } funcUpdateArray ={UpdatetodoArray} inputValSend={setinputVal} inputVal ={inputVal} />
        </>

    )

}

export default Todo 