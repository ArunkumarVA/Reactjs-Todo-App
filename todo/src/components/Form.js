import React,{useEffect} from "react"; 
import {v4 as uudidv4} from "uuid";

const Form =({input,setInput,Todo,setTodo,edittodo,setEdittodo}) => {
    const updateTodo=(title,id,completed)=>{
        const newTodo=Todo.map((todo)=>
            todo.id === id ?{title,id,completed} :todo
        );
        setTodo(newTodo);
        setEdittodo("");
    };
    useEffect(()=>{
        if(edittodo){
            setInput(edittodo.title);
        } else{
            setInput("");
        }
    }, [setInput,edittodo]);
    
    const onInputChange=(event)=>{

        setInput(event.target.value)
    };
    const onFormSubmit=(event)=>{
        event.preventDefault();
        if(!edittodo){
        setTodo([...Todo,{id:uudidv4(),title:input,completed:false}]);
        setInput("");
        }
        else {
            updateTodo(input,edittodo.id,edittodo.completed)

        }
    };
    return(
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="Enter a Todo" className="task-input" value={input} required 
            onChange={onInputChange} />
            <button className="button-add" type="submit">
                {edittodo ? "OK" :"Add"}
            </button>
        </form>
    )

}   

export default Form;