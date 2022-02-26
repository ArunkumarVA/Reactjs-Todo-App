import React from "react"; 
  

const TodoList=({Todo,setTodo,setEdittodo}) => {
  const handleComplete=(todo)=>{
      setTodo(
          Todo.map(item=>{
            if(item.id===todo.id){
                return {...item,completed:!item.completed};
            }
            return item;
          })
      );
  
    };
    const handleEdit=({id})=>{
        const findtodo=Todo.find((todo)=>todo.id === id);
        setEdittodo(findtodo);

    }; 

    const handleDelete=({id})=>{
        setTodo(Todo.filter((todo)=>todo.id!==id))};
    return(
        <div>
            {Todo.map((todo) =>(
                <li className="list-item" key={todo.id}>
                    <input type="text" 
                    value={todo.title} 
                    className={`list ${todo.completed ? "complete" : ""}`} 
                    onChange={(event)=>event.preventDefault()} />
                    <div>
                        <button class="button-complete" onClick={()=>handleComplete(todo)}>
                            <i class="fa fa-check-circle"></i>
                        </button>
                        <button class="button-edit" onClick={()=>handleEdit(todo)}>
                            <i class="fa fa-edit"></i>
                        </button>
                        <button class="button-delete "onClick={()=>handleDelete(todo)} >
                            <i class="fa fa-trash"></i>
                        </button>

                    </div>
                </li>
            )
            )}
        </div>
        
        );

};

export default TodoList; 