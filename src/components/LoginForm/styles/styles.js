import { Box, Button, Link, TextField } from "@mui/material";
import styled from "styled-components";

const TitleForm = styled.h3`
    text-align: left;
    color: white;
    font-size: 36px;
    margin-bottom: 24px;
    margin-top: 24px;
`
const CustomBox = styled(Box)`
    background-color: #E58328;
    border-radius: 8px;
    padding: 10px 30px 40px;
    height: 370px;
    width: 370px;
    box-shadow: 10px 10px 7px #6e6660;

    @media(max-width: 670px){
        width: 300px;
    }
`

const LoginInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 270px;
`

const CustomTextField = styled(TextField)`
    border: 0;
    outline: none !important;
    border-radius: 8px;
    color: white !important;
    border-color: white !important;

    .css-10botns-MuiInputBase-input-MuiFilledInput-input{
        color: white !important;
    }

    .css-10botns-MuiInputBase-input-MuiFilledInput-input:focus{
        color: white !important;
        border-color: white !important;
    }
    
    .css-batk84-MuiInputBase-root-MuiFilledInput-root::after{
        border-color: white !important;
        color: white !important;
    }
        
    .css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused{
        color: white !important;
        border-color: white !important;
    }
`
const CustomButton = styled(Button)`
    background-color: white !important;
    color: #2e2723 !important;
    font-weight: bold !important;
    font-size: 16px !important;
    border-radius: 8px;
    height: 50px;
    margin: 10px 0px;

    &:hover{
        background-color: #c1c1c1 !important;
        opacity: 0.8;
        transition: 0.5s;
    }
`

const CustomLinks = styled(Link)`
    color: white !important;
    text-decoration: none !important;
    text-align: right;

    &:hover{
        text-decoration: underline !important;
    }
`

export { TitleForm, CustomBox, LoginInputs, CustomTextField, CustomButton, CustomLinks}