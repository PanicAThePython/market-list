import { Box } from "@mui/material";
import styled from "styled-components";

export const CustomBox = styled(Box)`
    background-color: #E58328;
    border-radius: 8px;
    padding: 10px 30px 40px;
    height: 140px;
    width: 440px;
    box-shadow: 10px 10px 7px #6e6660;

     @media(max-width: 670px){
        width: 250px;
    }
`

export const LoginInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 170px;
`