import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const store = JSON.parse(localStorage.getItem("todo")) || []
  const [input,setInput] = useState("");
  const [todo,setTodo] = useState(store);
  const [editTodo, setEditTodo] = useState(null)

  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todo))
  },[todo])
  return (
    <div className="small-container">
      <div className="todo-list">
      <Header />
      </div>
      <div className="contain-table" >
        
      <Form 
      input={input}
      setInput={setInput}
      todo={todo}
      setTodo={setTodo}
      editTodo={editTodo}
      setEditTodo={setEditTodo}
      
      />
      </div>

      <div>
      <div >
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
      <h3 className="tast-list">Task-List</h3>
      <hr></hr>
      <hr></hr>
      </div>
        <TodoList todo={todo} setTodo={setTodo} setEditTodo={setEditTodo} />
      </div>
      
    </div>
  );
}

export default App;
