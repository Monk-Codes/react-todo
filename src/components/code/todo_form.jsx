import { useState } from "react";
import "./TodoForm.css";

function TodoForm() {
 const [todos, setTodos] = useState([]);
 const [inputValue, setInputValue] = useState("");
 const [editIndex, setEditIndex] = useState(null);
 const [editedValue, setEditedValue] = useState("");

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

 const handleUpdate = (id) => {
  const newTodos = [...todos];
  newTodos[id] = editedValue;
  setTodos(newTodos);
  setEditIndex(null);
  setEditedValue("");
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
      {editIndex === id ? (
       <>
        <input type="text" value={editedValue} onChange={(e) => setEditedValue(e.target.value)} />

        <button onClick={() => handleUpdate(id)}>✏️</button>
       </>
      ) : (
       <>
        {todo}
        <div className="todo-btn">
         <button
          onClick={() => {
           setEditIndex(id);
           setEditedValue(todo);
          }}
         >
          ✏️
         </button>
         <button onClick={() => handleDelete(id)}>X</button>
        </div>
       </>
      )}
     </li>
    ))}
   </ul>
  </div>
 );
}

export default TodoForm;
