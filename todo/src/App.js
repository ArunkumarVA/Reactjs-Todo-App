import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
const App=()=>{
    const initialState=JSON.parse(localStorage.getItem("Todo")) || [];
    const [input,setInput]=useState("");
    const [Todo,setTodo]=useState(initialState);
    const [edittodo,setEdittodo]=useState(null);

  useEffect(()=>{
      localStorage.setItem("Todo",JSON.stringify(Todo));

  },[Todo]);
  return(
    <div className='container'>
        <div className='app-wrapper'>
          <div>
            <Header/>
          </div>
          <div>
            <Form
              input={input}
              setInput={setInput}
              Todo={Todo}
              setTodo={setTodo}
              edittodo={edittodo}
              setEdittodo={setEdittodo}
            
            />
          </div>
          <div>
             <TodoList Todo={Todo} 
             setTodo={setTodo}
             setEdittodo={setEdittodo}
             /> 
          </div>
        </div>

    </div>
  );
};

export default App;
