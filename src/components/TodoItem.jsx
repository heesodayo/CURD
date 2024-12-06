import { useState } from "react";
import styles from "./css/TodoItem.module.css"
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
display: flex;
padding: 10px 16px;
align-items: center;
gap: 8px;
border-radius: 8px;
background: #FF5454;
color: #F3F3F3;
text-align: center;
font-family: "Pretendard Variable";
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;
const StyledEditButton = styled.button`
display: flex;
padding: 10px 16px;
align-items: center;
gap: 8px;
border-radius: 8px;
background: #EDEDED;
color: #6F6F6F;
text-align: center;
font-family: "Pretendard Variable";
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;
const StyledCancleButton = styled.button`
display: flex;
padding: 10px 16px;
align-items: center;
gap: 8px;
border-radius: 8px;
background: #8A8A8A;
color: #FFF;
text-align: center;
font-family: "Pretendard Variable";
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;
const StyledSaveButton = styled.button`
display: flex;
padding: 10px 16px;
align-items: center;
gap: 8px;
border-radius: 8px;
background: #9FFF79;
color: #000;
text-align: center;
font-family: "Pretendard Variable";
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;
const StyledDiv = styled.div`
display: inline-flex;
align-items: flex-start;
gap: 6px;
`

export default function TodoItem ({todo, deleteTodo, toggleTodo, editTodo}) {

    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleSave = () => {
        if (newText.trim()) {
            editTodo(todo.id, newText);
            setIsEditing(false);
        }
    };

    return (
        <>
        {isEditing ? (
            <>
            <table>
            <tbody>
                <tr>
                    <td className={styles.complete}><input 
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => toggleTodo(todo.id)} /></td>
                    <td className={styles.todo}><input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} /> </td>
                    <td className={styles.date}> {todo.date} </td>
                    <td className={styles.delete}><StyledDiv><StyledSaveButton onClick={handleSave}> 저장 </StyledSaveButton> <StyledCancleButton onClick={() => setIsEditing(false)}> 취소 </StyledCancleButton></StyledDiv></td>
                    </tr>
                </tbody>
                </table>
            </>
            ) : (
                <>
                <table className={styles.itemTable} style={ {
                opacity: todo.isDone ? 0.5 : 1,
                transition: "opacity 0.3s ease",}}>
                <tbody>
                    <tr>
                        <td className={styles.complete}><input 
                        type="checkbox"
                        checked={todo.isDone}
                        onChange={() => toggleTodo(todo.id)} /></td>
                        <td className={styles.todo}> {todo.text} </td>
                        <td className={styles.date}> {todo.date} </td>
                        <td className={styles.delete}>
                            <StyledDiv>
                            <StyledEditButton onClick={()=> setIsEditing(true)}> 수정 </StyledEditButton>
                            <StyledDeleteButton onClick={() => deleteTodo(todo)}> 삭제 </StyledDeleteButton>
                            </StyledDiv>
                        </td>
                    </tr>
                </tbody>
            </table>
            </> 
        )}
        </>
        )}