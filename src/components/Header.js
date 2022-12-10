import styled from "styled-components"

export default function Header() {
    return (
        <HeaderContainer>
            <p>CINEFLEX</p>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div `
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-family: 'Roboto';
        color: #E8833A;
        font-weight: 400;
        font-size: 34px;
    }
`
