import { useState } from "react";
import styles from "./css/TodoItem.module.css"
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Table } from 'react-bootstrap';

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
            toast.success('할 일이 수정되었습니다!');
        }
    };

    const handleDelete = () => {
        // 삭제 확인
        const isConfirmed = window.confirm("정말 삭제하시겠습니까?");
        if (!isConfirmed) return; // 취소 시 함수 종료
    
        // 임시로 삭제된 상태 저장
        const deletedTodo = todo;
    
        // 토스트 메시지 표시
        const toastId = toast(
        <div>
            <span>할 일이 삭제되었습니다.</span>
            <button
            style={{
                marginLeft: "10px",
                padding: "5px 10px",
                background: "#f0f0f0",
                border: "none",
                cursor: "pointer",
                borderRadius: "4px",
            }}
            onClick={() => {
                toast.dismiss(toastId); // 토스트 메시지 닫기
                updateTodos((prevTodos) => [...prevTodos, deletedTodo]); // 삭제 취소
            }}
            >
            취소
            </button>
        </div>,
          { autoClose: 5000 } // 5초 동안 표시
        );
    
        // 실제 삭제 로직
        deleteTodo(todo.id);
      };
    

    

    return (
        <>
        {isEditing ? (
            <>
            <Table>
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
                </Table>
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
                            <StyledDeleteButton onClick={handleDelete}> 삭제 </StyledDeleteButton>
                            </StyledDiv>
                        </td>
                    </tr>
                </tbody>
            </table>
            </> 
        )}
        </>
        )}