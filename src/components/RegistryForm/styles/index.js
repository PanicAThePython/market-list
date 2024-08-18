import { Box } from "@mui/material";
import styled from "styled-components";

const CustomBox = styled(Box)`
    background-color: #E58328;
    border-radius: 8px;
    padding: 10px 30px 40px;
    height: 470px;
    width: 370px;
    box-shadow: 10px 10px 7px #6e6660;

    @media(max-width: 700px){
        margin-top: -50px;
        width: 300px;
    }
`

const LoginInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 370px;
`

export { CustomBox, LoginInputs }