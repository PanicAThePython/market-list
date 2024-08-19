import { DialogContentText, DialogTitle, FormControl, ListItem, TextField } from "@mui/material"
import styled from "styled-components"

const CustomDialogTitle = styled(DialogTitle)`
    color: #E58328;
    font-size: 24px !important;
`

const CustomDialogContentText = styled(DialogContentText)`
    color: #B5651C !important;
`

const CustomFormControl = styled(FormControl)`
    padding: 16px 24px !important;
    width: 500px !important;

    @media(max-width: 670px){
        width: 450px !important;
    }

    @media(max-width: 600px){
        width: 400px !important;
    }

    @media(max-width: 520px){
        width: 300px !important;
    }

    @media(max-width: 420px){
        width: 250px !important;
    }

    @media(max-width: 360px){
        width: 200px !important;
    }
`

const CustomListMarketItem = styled(ListItem)`
    width:  105% !important;
    font-size: 18px;
    display: flex;
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

const CustomPItem = styled.p`
    width: 100% !important;
`


export { CustomDialogTitle, CustomDialogContentText, CustomFormControl, CustomListMarketItem, CustomTextField, CustomPItem }