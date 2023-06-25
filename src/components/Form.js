import React,{useEffect,useState} from 'react'
import {v4 as uuidv4} from "uuid"
import Swal from 'sweetalert2';
const Form = ({input,setInput,todo,setTodo,editTodo,setEditTodo}) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
  

    const updateTodo = (title,id,completed) => {
        const newTodo = todo.map((todos)=>
            todos.id === id ? {title,id,completed} : todos
        )
        setTodo(newTodo)
        setEditTodo("")
    }

    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title)
         } else {
            setInput("")
         }
    },[setInput,editTodo])

    const onInputChange = (e) =>{
        setInput(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        if(!editTodo){
            setTodo([...todo,{id:uuidv4(), title:input, completed:false}])
            setInput("")

        } else {
            updateTodo(input,editTodo.id,editTodo.completed)
            Swal.fire({
                icon: 'success',
                title: 'Updated!',
                text: `Data has been Updated.`,
                showConfirmButton: false,
                timer: 1500,
              });
        }
        
        
    }

    const onFormSubmit1 = (e) => {
        e.preventDefault();
        const filteredTasks = todo.filter((task) =>
          task.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredTasks(filteredTasks);
        setIsSubmitted(true);
        
      };
    
      const onSearchInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    
        if (isSubmitted && value === '') {
          setIsSubmitted(false);
          setFilteredTasks([]);
        }
      };
    

  return (
    <div className="small-container">
    <form onSubmit={onFormSubmit}>
        <input type='text' placeholder='Enter your task' value={input} onChange={onInputChange} />
        <button className='button-add' type='submit'>
        {editTodo ? "Ok" : "Add"}
        </button>
    </form>
    <div >
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={onSearchInputChange}
        />
        <button onClick={onFormSubmit1}>Search</button>
      </div>

      {isSubmitted && (
        <>
          {filteredTasks.length === 0 ? (
            <p>No tasks found.</p>
          ) : (
            <ul>
              {filteredTasks.map((task) => (
                <li key={task.id}>{task.title}</li>
              ))}
            </ul>
          )}
        </>
      )}

    </div>
    
  )
}

export default Form
