import styled from "styled-components";

const CustomPError = styled.p`
    color: #B5651C;
    text-align: center;
    font-size: 30px;
    margin-top: -40px;
`
const ErrorMessage = styled.h1`
    color: #B5651C;
    text-align: center;
    font-size: 90px;
    margin-top: 10px;

    @media(max-width: 670px){
        margin-top: 320px;
    }
`

const CustomMain = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 10px;
    height: 580px;

    @media(max-width: 670px){
        flex-direction: column;
        margin-top: -50px;
    }
`

const CustomImg = styled.img`
    width: 500px;

    @media(max-width: 780px){
        width: 350px;
    }
`

const CustomFooter = styled.footer`
    text-align: center;
    padding-bottom: 50px;
    position: relative;
    
    @media(max-width: 670px){
        margin-top: 300px;
    }
`

const CustomLink = styled.a`
    color: #B5651C;
    text-align: center;
    font-size: 20px;
    margin-top: -20px;
    padding-bottom: 10px;
    text-decoration: none;
    font-weight: bold;

    &:hover{
        text-decoration: underline;
    }
`

export { CustomPError, ErrorMessage, CustomMain, CustomImg, CustomFooter, CustomLink }