import { Box, Button, Collapse, List, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { CloseMenuButton, CreateListsButton, CreateListSection, CustomArrowList, CustomCollapse, CustomContentBox, CustomLink, CustomListItem, CustomListItemButton, CustomListMarket, CustomListsBox, CustomProfileListItem, ItemTitle, ListContent, ListHeader, OpenMenuButton, Title, TitleLeft, TitleList, UserContentBox, UserDataDiv, WhiteCheckbox } from "./styles/styles";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChecklistIcon from '@mui/icons-material/Checklist';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { useEffect, useState } from "react";
import EmptyCartIllustration from "../../assets/images/carrinho.png"

import { Profile } from "../../components/Profile";
import { ChangePasswordForm } from "../../components/ChangePasswordForm";
import { CreateListDialog } from "../../components/CreateListDialog";
import { DeleteListDialog } from "../../components/DeleteListDialog";

export function ProfilePage() {
    const [selectedKey, setSelectedKey] = useState("1")
    const [marketLists, setMarketLists] = useState([])
    const [openDialog, setOpenDialog] = useState(false)
    const [changePassword, setChangePassword] = useState(false)
    const [openListId, setOpenListId] = useState("")
    const [controlOpenningLists, setControlOpenningLists] = useState([])
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (window.innerWidth > 1000) setOpen(true)

        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClose = () => {
        setOpenDialog(false);
    }

    useEffect(() => {
        let arrayOpennings = []
        for (let i = 0; i < marketLists.length; i++){
            arrayOpennings.push(true)
        }
        setControlOpenningLists(arrayOpennings)
    }, [marketLists.length])
    
    console.log(controlOpenningLists)

    return (
        <div>
            <UserContentBox>
                <CustomCollapse orientation="horizontal" in={open}>
                    <List style={{width: 'auto'}}>
                        <CustomProfileListItem>
                            <Profile/>
                            <CloseMenuButton
                                onClick={() => setOpen(!open)}
                            >
                                <ArrowBackIcon/>
                            </CloseMenuButton>
                        </CustomProfileListItem>
                        <CustomListItemButton key="0" onClick={() => setSelectedKey("0")} selected={selectedKey==="0"}>
                            <ListItemIcon>
                                <AccountCircleIcon/>
                            </ListItemIcon>
                            Meus dados
                        </CustomListItemButton>
                        <CustomListItemButton key="1" onClick={() => setSelectedKey("1")} selected={selectedKey==="1"}>
                            <ListItemIcon color="#2e2723 !important;">
                                <ChecklistIcon/>
                            </ListItemIcon>
                            Minhas listas
                        </CustomListItemButton>
                        <ListItemButton href="/">
                            <ListItemIcon color="#2e2723 !important;">
                                <LogoutIcon/>
                            </ListItemIcon>
                            Sair
                        </ListItemButton>
                    </List>
                </CustomCollapse>
                {(!open) ? 
                    <OpenMenuButton variant="contained" onClick={() => setOpen(!open)}>
                        <ArrowForwardIcon/>
                    </OpenMenuButton> : 
                    <div></div>
                }
                <CustomContentBox
                    hidden={(width <= 1000 && open)}
                    style={{top: (width <= 1000 && !open) ? '-250px' : '0px', position: 'relative'}}
                    >
                    {
                        (selectedKey==="0") ?
                        (
                            <UserDataDiv>
                                <TitleLeft>Dados pessoais</TitleLeft>
                                <List style={{height: '200px'}}>
                                    <CustomListItem>
                                        <ItemTitle>Nome:</ItemTitle>
                                        <p>Natália</p>
                                        </CustomListItem>
                                    <CustomListItem>
                                        <ItemTitle>E-mail: </ItemTitle>
                                        <p>teste@teste.com</p>
                                    </CustomListItem>
                                    <CustomListItem>
                                        <ItemTitle>Senha:</ItemTitle>
                                        <p>******* 
                                            <CustomLink onClick={
                                                () => setChangePassword(true)
                                            }>
                                                Alterar senha
                                            </CustomLink>
                                        </p>
                                    </CustomListItem>
                                    <Collapse in={changePassword}>
                                        <ChangePasswordForm changePasswordState={() => setChangePassword(false)}/>
                                    </Collapse>
                                </List>
                                
                            </UserDataDiv>
                        )
                        :
                        (
                            (selectedKey==="1") ? (
                                <UserDataDiv>
                                    {
                                        (marketLists.length === 0) ? (
                                            <CreateListSection>
                                                <Title>Você ainda não possui listas</Title>
                                                <img src={EmptyCartIllustration} alt="carrinho vazio" height={"300px"}/>
                                                <a
                                                    href="https://www.flaticon.com/br/icones-gratis/carrinho-vazio"
                                                    title="carrinho vazio ícones"
                                                    style={{
                                                        color: '#2e2723',
                                                        textDecoration: 'none'
                                                    }}
                                                >
                                                    Carrinho vazio ícones criados por Aranagraphics - Flaticon
                                                </a>
                                                <CreateListsButton
                                                    variant="contained"
                                                    onClick={() => setOpenDialog(true)}
                                                >
                                                    Criar Listas
                                                </CreateListsButton>
                                                <CreateListDialog open={openDialog} onClose={handleClose} addList={(list) => setMarketLists([...marketLists, list])}/>
                                            </CreateListSection>
                                        ) : (
                                            <Box style={{margin: 'auto'}}>
                                                <CreateListsButton
                                                    variant="contained"
                                                    onClick={() => setOpenDialog(true)}
                                                >
                                                    Criar Listas
                                                </CreateListsButton>
                                                <CreateListDialog
                                                    open={openDialog}
                                                    onClose={handleClose}
                                                    addList={(list) => setMarketLists([...marketLists, list])}
                                                />
                                                <CustomListsBox>
                                                    {marketLists.map(({id, name, date, items}, index) => {
                                                        const [year, month, day] = date.split('-')
                                                        console.log(controlOpenningLists[index])
                                                        return (
                                                            <CustomListMarket key={id}>
                                                                <ListHeader>
                                                                    <TitleList>{name}</TitleList>
                                                                    <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                                                                        <Typography color="white">{day}/{month}/{year}</Typography>
                                                                        <Button 
                                                                            style={{
                                                                                color: "white"
                                                                            }}

                                                                            onClick={() => {
                                                                                // setMarketLists(marketLists.filter((value) => value.id !== id))
                                                                                setOpenDeleteModal(true)
                                                                            }}
                                                                        >
                                                                            <CloseIcon/>
                                                                        </Button>
                                                                        <DeleteListDialog
                                                                            open={openDeleteModal}
                                                                            handleClose={() => setOpenDeleteModal(false)}
                                                                            handleDelete={() => setMarketLists(marketLists.filter((value) => value.id !== id))}
                                                                        />
                                                                    </div>
                                                                </ListHeader>
                                                                <Collapse in={openListId === id}>
                                                                    <ListContent>
                                                                        {items.map((item, index) => (
                                                                            <ListItem key={index}>
                                                                                <WhiteCheckbox style={{color: 'white !important'}} key={index} />{item}
                                                                            </ListItem>
                                                                        ))}
                                                                    </ListContent>
                                                                </Collapse>
                                                                {(openListId === id) ? (
                                                                    <CustomArrowList onClick={() => {
                                                                        // const newOppeningList = controlOpenningLists.map((value, i) => {
                                                                        //     if (index === i) value = true
                                                                        // })
                                                                        // console.log(newOppeningList)
                                                                        // setControlOpenningLists(newOppeningList)
                                                                        setOpenListId("")
                                                                    }}>
                                                                        <ExpandLessIcon/>
                                                                    </CustomArrowList>
                                                                ) : (
                                                                    <CustomArrowList onClick={() => {
                                                                        // const newOppeningList = controlOpenningLists.map((v, i) => {
                                                                        //     if (i===index) v = true
                                                                        // })
                                                                        // console.log(newOppeningList)
                                                                        // setControlOpenningLists(newOppeningList)
                                                                        setOpenListId(id)
                                                                    }}>
                                                                        <ExpandMoreIcon/>
                                                                    </CustomArrowList>
                                                                )}
                                                            </CustomListMarket>
                                                        )
                                                    })}
                                                </CustomListsBox>
                                            </Box>
                                        )
                                    }
                                </UserDataDiv>
                            ) : (
                                <div></div>
                            )
                        )
                    }
                </CustomContentBox>
            </UserContentBox>
            <footer style={{textAlign: 'center', paddingBottom: '50px', position: 'relative', marginTop: '150px'}}>© 2024, MarketList.</footer>
        </div>
    )
}