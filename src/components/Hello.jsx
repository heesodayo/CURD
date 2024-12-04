import styled from 'styled-components';
const StyledH1 = styled.h1`
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

function Hello () {
    return (
        <StyledH1> 오늘의 할 일 </StyledH1>
    );
}

export default Hello;