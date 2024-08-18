import styled from "styled-components"

const CustomMain = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 10px;
    height: 580px;
    padding: 20px;

    @media(max-width: 700px){
        flex-direction: column;
    }
`

const CustomImg = styled.img`
    width: 400px;

     @media(max-width: 880px){
        width: 350px;
    }

    @media(max-width: 780px){
        width: 300px;
    }

    @media(max-width: 700px){
        width: 250px;
        margin-top: 200px;
    }
`

export { CustomMain, CustomImg }