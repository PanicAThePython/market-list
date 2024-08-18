import styled from "styled-components";

const Subtitle = styled.h1`
    color: #B5651C;
    text-align: center;
    font-size: 35px;
    margin: 20px;
`

const HeaderLogo = styled.div`
    text-align: center;
    margin-top: 40px;
`

const CustomImg = styled.img`
    width: 500px;

    @media(max-width: 880px){
        width: 350px;
        // margin-top: 100px;
    }

    @media(max-width: 780px){
        width: 250px;
        margin-top: 100px;
    }
`

const CustomLinkPng = styled.p`
    position: relative;
    bottom: 70px;

    @media(max-width: 880px){
        bottom: 30px;
    }

    @media(max-width: 780px){
        bottom: 20px;
    }
`

const CustomMain = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 20px;
    height: 500px;
    padding: 20px;

    @media(max-width: 670px){
        flex-direction: column;
    }
`

const CustomFooter = styled.footer`
    text-align: center;
    padding-bottom: 50px;
    position: relative;
    
    @media(max-width: 670px){
        margin-top: 400px;
    }
`

export { Subtitle, HeaderLogo, CustomMain, CustomImg, CustomLinkPng, CustomFooter }