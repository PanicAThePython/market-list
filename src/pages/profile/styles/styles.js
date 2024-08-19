import { Box, Button, Checkbox, Collapse, List, ListItem, ListItemButton, Typography } from "@mui/material";
import styled from "styled-components";


const UserContentBox = styled(Box)`
    display: flex;
    border-radius: 8px;
    // width: 1250px;
    height: 500px;
    justify-content: space-evenly;

    .css-0{
        width: 100%;
        margin: auto;
    }

    @media (max-width: 1000px){
        display: inline;
    }
`
const UserDataDiv = styled.div`
    height: 580px;
    padding: 20px 30px;
    // display: flex;
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

    @media(max-width: 570px){
        width: 300px !important;
    }

    @media(max-width: 300px){
        width: 100% !important;
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

const CustomCollapse = styled(Collapse)`
    // width: 23% !important;
    .css-14vyde3-MuiCollapse-wrapperInner{
        width: 100% !important;
    }
    border-right: 1px solid rgba(0, 0, 0, 0.2); 
    
    @media (max-width: 670px){
        z-index: 99999;

    }
`

const CustomProfileListItem = styled(ListItem)`
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-right: 0px !important;
    widht: 100%;
`

const CustomLink = styled.a`
    color: #B5651C;
    text-align: center;
    font-size: 20px;
    text-decoration: none;
    margin-left: 10px;

    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`

const CustomListsBox = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px !important;
`

const CustomListMarket = styled(List)`
    background-color: #E58328;
    border-radius: 8px;
    padding: 26px !important;
    padding-right: 20px !important;
    margin-right: 20px !important;
    margin-bottom: 20px !important;

    @media(max-width: 400px){
        width: 100% !important;
    }
`

const TitleList = styled(Typography)`
    color: white;
    font-size: 20px !important;
    font-weight: bold !important;
`

const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    flex-wrap: wrap;
`

const ListContent = styled.div`
    margin-top: 10px;
    color: white;
    font-size: 18px !important;
    margin-left: -25px;
`

const CustomArrowList = styled(Button)`
    width: 100% !important;
    color: white !important;
    padding-bottom: 0px !important;
`

const WhiteCheckbox = styled(Checkbox)`
    color: white !important;
`

const CustomContentBox = styled(Box)`
    width: 100%;
`

const CloseMenuButton = styled(Button)`
    color: white !important;
    background-color: #E58328 !important;
    border-color: #E58328 !important;
    border-radius: 50px 0px 0px 50px !important;
    height: 50px;
`

const OpenMenuButton = styled(Button)`
    margin-left: -20px !important;
    border-left: 1px solid rgba(0, 0, 0, 0.3) !important;
    color: white;
    background-color: #E58328 !important;
    border-color: #E58328 !important;
    border-radius: 0px 50px 50px 0px !important;
    height: 50px;
    margin-top: 35px !important;

    @media(max-width: 1000px){
        margin-top: -500px !important;
    }
`
export { 
    UserContentBox,
    UserDataDiv,
    CustomListItemButton,
    CustomListItem,
    ItemTitle,
    TitleLeft,
    Title,
    CreateListsButton,
    CreateListSection,
    CustomCollapse,
    CustomProfileListItem,
    CustomLink,
    CustomListsBox,
    CustomListMarket,
    TitleList,
    ListHeader,
    ListContent,
    CustomArrowList,
    WhiteCheckbox,
    CustomContentBox,
    CloseMenuButton,
    OpenMenuButton
}