import { Box, Button, Collapse, List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChecklistIcon from '@mui/icons-material/Checklist';
import LogoutIcon from '@mui/icons-material/Logout';

import { useState } from "react";
import EmptyCartIllustration from "../../assets/images/carrinho.png"
import YourData from "../../assets/images/dados.png"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { CreateListsButton, CreateListSection, CustomListItem, CustomListItemButton, ItemTitle, Title, TitleLeft, UserContentBox, UserDataDiv } from "./styles/styles";
import { Profile } from "../../components/Profile";

export function ProfilePage() {
    const [selectedKey, setSelectedKey] = useState("1")
    const [marketLists, setMarketLists] = useState([])
    const [open, setOpen] = useState(true)

    return (
        <div>
            <UserContentBox>
                <Collapse orientation="horizontal" in={open}>
                    <List style={{width: '250px', borderRight: '1px solid rgba(0, 0, 0, 0.3)'}}>
                        <ListItem style={{borderBottom: '1px solid rgba(0, 0, 0, 0.3)'}}>
                            <Profile/>
                            <Button onClick={() => setOpen(!open)}>
                                <ArrowBackIcon/>
                            </Button>
                        </ListItem>
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
                </Collapse>
                {(!open) ? 
                    <Button variant="outlined" onClick={() => setOpen(!open)} style={{
                        marginLeft: '-20px !important',
                        borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                        color: '#E58328',
                        borderColor: '#E58328'
                    }}>
                        <ArrowForwardIcon/>
                    </Button> : 
                    <div></div>
                }
                <Box style={{width: '1000px'}}>
                    {
                        (selectedKey==="0") ?
                        (
                            <UserDataDiv>
                                {/* <div style={{width: '343px'}}>
                                    <img src={YourData} alt="cadeado" height={"300px"}/>
                                    <a href="https://www.flaticon.com/br/stickers-gratis/senha" title="senha figurinhas">Senha figurinhas criadas por kerismaker - Flaticon</a>
                                </div> */}
                                <div style={{width: '400px'}}>
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
                                            <p>******* <a href="#">Alterar senha</a></p></CustomListItem>
                                    </List>
                                </div>
                                
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
                                                <CreateListsButton variant="contained">Criar Listas</CreateListsButton>
                                            </CreateListSection>
                                        ) : (
                                            <div>Listar...</div>
                                        )
                                    }
                                </UserDataDiv>
                            ) : (
                                <div></div>
                            )
                        )
                    }
                </Box>
            </UserContentBox>
            <footer style={{textAlign: 'center', paddingBottom: '50px', position: 'relative', marginTop: '150px'}}>© 2024, MarketList.</footer>
        </div>
    )
}