import styles from "./css/TodoItem.module.css"
import styled from 'styled-components';

const StyledButton = styled.button`
display: flex;
padding: 6px 10px;
align-items: center;
gap: 8px;
border-radius: 8px;
background: #FF5454;
color: #F3F3F3;
text-align: center;
font-family: "Pretendard Variable";
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

export default function TodoItem ({todo, deleteTodo, toggleTodo}) {
    return (
        <>
        <table className={styles.itemTable} style={ {
            opacity: todo.isDone ? 0.5 : 1,
            transition: "opacity 0.3s ease",
        }}>
            <tbody>
                <tr>
                    <td className={styles.complete}><input 
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => toggleTodo(todo.id)} /></td>
                    <td className={styles.todo}> {todo.text} </td>
                    <td className={styles.date}> {todo.date} </td>
                    <td className={styles.delete}><StyledButton onClick={() => deleteTodo(todo)}> 삭제하기 </StyledButton></td>
                </tr>
            </tbody>
        </table>
        </>
    );
}