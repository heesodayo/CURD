import { useState} from "react";
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
    };

    return (
        <>
            <input 
            type="text" 
            value={text}
            onChange={(e)=> setText(e.target.value)}
            placeholder="할일을 입력하세요">
    
            </input>
            <button onClick={handleAddTodo}> 추가하기 </button>
        </>
    );
}