import TodoItem from "./TodoItem";
import './styles/TodoList.css';

const TodoList=({todos,handleDeleteTodo,handleEditTodo})=>{

    return(
    <div className="todo-list-container">
        <center>
            <h5 className="todo-title">List of Todo's:</h5>
        </center>
        <ul className="todo-list">
            <center>
            {todos.map((todo,index)=>{
                return <TodoItem item={todo} index={index} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
            })}
            </center>
        </ul>
    </div>
    );
}
export default TodoList;