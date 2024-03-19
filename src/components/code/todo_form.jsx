import { useState } from "react";
import "./TodoForm.css";

function TodoForm() {
 const [todos, setTodos] = useState([]);
 const [inputValue, setInputValue] = useState("");

 function handleChange(e) {
  setInputValue(e.target.value);
 }

 function handleSubmit(e) {
  e.preventDefault();
  setTodos([inputValue, ...todos]);
  setInputValue("");
 }

 const handleDelete = (id) => {
  const newTodos = todos.filter((_, index) => index !== id);
  setTodos(newTodos);
 };

 return (
  <div className="todo-form-container">
   <form>
    <input type="text" value={inputValue} onChange={handleChange} placeholder="Type Here" />
    <button onClick={handleSubmit}>Add Todo</button>
   </form>

   <ul className="todo-list">
    {todos.map((todo, id) => (
     <li key={id} className="todo-item">
      {todo}
      {/* <button onClick={() => updateTodo(id)}>Update</button> */}
      <button onClick={() => handleDelete(id)}>X</button>
     </li>
    ))}
   </ul>
  </div>
 );
}

export default TodoForm;
