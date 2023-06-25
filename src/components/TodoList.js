import React from 'react'
import Swal from 'sweetalert2';
const TodoList = ({todo,setTodo,setEditTodo}) => {


    const handleEdit = ({id}) => {
        const findtodo = todo.find((todos)=>todos.id === id)
        setEditTodo(findtodo)
        Swal.fire({
            icon: 'info',
            title: 'Edit!',
            text: `Go Above to Edit Your Task`,
            showConfirmButton: false,
            timer: 1500,
          });
       
    }

    const handleDelete =({id}) =>{
        setTodo(todo.filter((todos)=>todos.id !== id))
        Swal.fire({
            icon: 'warning',
            title: 'Deleted!',
            text: `Task has been Deleted.`,
            showConfirmButton: false,
            timer: 1500,
          });
    }
  return (
    <div className="small-container">
        {
             todo.map((todos) => (
                <div className="contain-table1" key={todos.id}>
                    <input type="text" value={todos.title} className={`list ${todo.completed ? "completed" : ""}`} onChange={(e)=>e.preventDefault()}/>

                    <button className='small-container' onClick={()=>handleEdit(todos)} >
                        
                        <h6 style={{ textAlign:"center", margin:"11px" }}>Edit</h6>
                    </button>

                    <button className='small-container' onClick={()=>handleDelete(todos)}>
                        
                        <h6 style={{ textAlign:"center", margin:"11px" }}>Delete</h6>
                    </button>
    
                </div>
             )
            
            )

        }
      
       
      
    </div>
  )
}

export default TodoList
