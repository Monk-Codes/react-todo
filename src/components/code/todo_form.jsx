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
  setTodos([{ text: inputValue, priorityLevel: "low" }, ...todos]);
  setInputValue("");
 }

 const handleDelete = (id) => {
  const newTodos = todos.filter((_, index) => index !== id);
  setTodos(newTodos);
 };

 const handleUpdate = (id) => {
  const newTodos = [...todos];
  newTodos[id].text = editedValue;
  setTodos(newTodos);
  setEditIndex(null);
  setEditedValue("");
 };
 const handlePriority = (id, priorityLevel) => {
  const newTodos = [...todos];
  newTodos[id].priorityLevel = priorityLevel;
  setTodos(newTodos);
 };

 //  const priorityClasses = ["low", "medium", "high", "urgent"];

 return (
  <div className="todo-form-container">
   <form>
    <input type="text" value={inputValue} onChange={handleChange} placeholder="Type Here" />
    <button onClick={handleSubmit}>Add Todo</button>
   </form>

   <ul className="todo-list">
    {todos.map((todo, id) => (
     <li key={id} className={`todo-item ${todo.priorityLevel}`}>
      {editIndex === id ? (
       <>
        <input type="text" value={editedValue} onChange={(e) => setEditedValue(e.target.value)} />
        <button onClick={() => handleUpdate(id)}>✏️</button>
       </>
      ) : (
       <>
        <div className="input">{todo.text}</div>

        <div className="level">
         <button
          onClick={() => {
           setEditIndex(id);
           setEditedValue(todo.text);
          }}
         >
          ✏️
         </button>
         <button onClick={() => handlePriority(id, "low")}>🔵</button>
         <button onClick={() => handlePriority(id, "medium")}>🟡</button>
         <button onClick={() => handlePriority(id, "high")}>🟠</button>
         <button onClick={() => handlePriority(id, "urgent")}>🔴</button>
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
