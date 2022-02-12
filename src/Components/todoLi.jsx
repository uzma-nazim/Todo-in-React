import react, { useState } from "react";
import "../Components/todo.css"

import { TiDelete } from "react-icons/ti";
import { RiEdit2Fill } from "react-icons/ri";


const TodoLi = (getArray) => {
    

    let {updatearraySend,funcUpdateArray,inputValSend ,inputVal  } = getArray

    
    
    const del= (index)=>{

        updatearraySend.splice(index,1)        
        funcUpdateArray([...updatearraySend])

    }

    const edit = (index)=>{
        
        inputValSend(updatearraySend[index])
        // console.log(copy);
        updatearraySend.splice(index,1)        
        
        

    }

    
    return (

        <div className="not-main" id="animation">
            <ul id="Second-main">
                {updatearraySend.map((elemnt, index) => {
                        return (


                            <div id="ulinput" className="animate__animated animate__fadeInDown " key={index} >
                                <li id="li2"  >{elemnt}</li>

                                <div className="btnContainer" >
                                    <button className="delbtn" onClick={()=>del(index)} ><TiDelete /></button>
                                    <button className="editbtn" onClick={()=> edit(index) } ><RiEdit2Fill /></button>

                                </div>
                            </div>



                        )
                    })}
            </ul>

        </div>

    )

}

export default TodoLi
