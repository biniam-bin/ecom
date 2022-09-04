import styled from "styled-components"


export const SimpleButtonContainer = styled.div`
    background: ${props => props.bg};
    color: ${props => props.fg};
    max-width: 130px;
    padding: 10px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

`