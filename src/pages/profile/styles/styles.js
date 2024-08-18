import { Box, Button, ListItem, ListItemButton } from "@mui/material";
import styled from "styled-components";


const UserContentBox = styled(Box)`
    display: flex;
    border-radius: 8px;
    width: 1250px;
    height: 500px;
    justify-content: space-evenly;
`
const UserDataDiv = styled.div`
    height: 580px;
    padding: 20px 40px;
    display: flex;
`

const CustomListItemButton = styled(ListItemButton)`
    font-size: 18px;
    color: #2e2723 !important;

    &:hover{
        background-color: rgba(229, 131, 40, 0.4)  !important;
    }

    &.Mui-selected{
        background-color: rgba(229, 131, 40, 0.8) !important;
    }

`
const CustomListItem = styled(ListItem)`
    color: #2e2723 !important;
    font-size: 20px;
    height: 50px;
`

const ItemTitle = styled.p`
    font-weight: bold;
    margin-right: 10px;
`

const TitleLeft = styled.h1`
    color: #B5651C;
    text-align: left;
    font-size: 35px;
    margin-top: 10px;
`

const Title = styled.h1`
    color: #B5651C;
    text-align: center;
    font-size: 35px;
    margin-top: 10px;
`

const CreateListsButton = styled(Button)`
    background-color: #E58328 !important;
    width: 200px !important;
    padding: 10px !important;
    margin-top: 30px !important;

    &:hover{
        background-color: #B5651C !important;
    }
`

const CreateListSection = styled.section`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`

export { UserContentBox, UserDataDiv, CustomListItemButton, CustomListItem, ItemTitle, TitleLeft, Title, CreateListsButton, CreateListSection }