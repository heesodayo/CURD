import TodoItem from "./TodoItem";
import styles from "./css/TodoList.module.css"
import { Table } from 'react-bootstrap';

export default function TodoList ({ todos, deleteTodo, toggleTodo, editTodo }) {
    return (
        <>
        {/* <h3> 오늘의 할 일 </h3> */}
            <Table className={styles.tableHeader
            }>
                <thead>
                    <tr>
                        <td className={styles.complete
            }> Complete </td>
                        <td className={styles.todo}> Todo </td>
                        <td className={styles.date}> Date </td>
                        <td className={styles.delete}> Delete </td>
                    </tr>
                </thead>
            </Table>
        {todos.map((todo) => (
            <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            />
        ))}
        </>
    );
}