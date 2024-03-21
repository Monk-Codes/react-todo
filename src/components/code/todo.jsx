import TodoForm from "./todo_form";
import bg from "../image/bg.jpg";
import TodoHeader from "./todo_header";
import "./TodoForm.css";

export default function Todo() {
 return (
  <>
   <div className="bg" style={{ backgroundImage: `url(${bg})` }}>
    <TodoHeader />
    <TodoForm />
   </div>
  </>
 );
}
