export default function TodoItem ({todo}) {
    return (
        <>
        <h3>할 일 목록</h3>
        <table>
            <tbody>
                <td><input type="checkbox" /></td>
                <td> {todo.text} </td>
                <td> 등록날짜 </td>
                <td><button>삭제</button></td>
            </tbody>
        </table>
        </>
    );
}