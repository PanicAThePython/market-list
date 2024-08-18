import styled from "styled-components";

const ForgotPasswordTitle = styled.h1`
    color: #B5651C;
    text-align: left;
    font-size: 40px;
    margin-top: 30px;
`

const CustomMain = styled.main`
    display: block;
    width: 500px;
    display: block;
    align-items: center;
    position: relative;
    margin: auto;
    margin-top: 75px;
    padding: 20px;

    @media(max-width: 670px){
        width: 300px;
    }
`

const CustomP = styled.p`
    color: #2e2723;
    font-size: 20px;
`

export { ForgotPasswordTitle, CustomMain, CustomP }