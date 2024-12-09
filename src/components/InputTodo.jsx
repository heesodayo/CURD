import { useState} from "react";
import styled from 'styled-components';
import { toast } from 'react-toastify';

const StyledInput = styled.input`
    display: flex;
    width: 480px;
    // height: 42px;
    padding: 10px 16px;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid #E5E2E3;
    background: #FEFEFE;
`;
const StyledButton = styled.button`
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
    display: flex;
    padding: 10px 0px 40px 0px ;
    align-items: center;
    gap: 24px;
`;



export default function InputTodo ({todos, updateTodos}) {
    const [text, setText] = useState('')
    const handleAddTodo = () => {
        if(text.trim()==='') return;
        const newTodo = {
            id: Date.now(),
            text,
            isDone: false,
            date: new Date().toLocaleDateString(),
        };
        updateTodos([...todos, newTodo]);
        setText('');
        toast.success('할 일이 추가되었습니다!');
    };

    return (
        <StyledDiv>
            <StyledInput 
            type="text" 
            value={text}
            onChange={(e)=> setText(e.target.value)}
            placeholder="할일을 입력하세요">
            </StyledInput>
            <StyledButton onClick={handleAddTodo}> 추가하기 </StyledButton>
        </StyledDiv>
    );
}