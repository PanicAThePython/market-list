import { Button, Dialog, DialogActions, DialogContent, List } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { CustomDialogContentText, CustomDialogTitle, CustomFormControl, CustomListMarketItem, CustomPItem, CustomTextField } from "./styles/styles";
import uuid from "react-uuid";

export function CreateListDialog({open, onClose, addList}) {
    const [actualIten, setActualIten] = useState("")
    const [items, setItems] = useState([])
    const [listName, setListName] = useState(`Lista 1`)
    const [listDate, setListDate] = useState(new Date().toISOString().split('T')[0])

    const buildListObjectData = () => {
        const objt = {
            "id" : uuid(),
            "name": listName,
            "date": listDate,
            "items": items
        }

        return objt
    }

    return (
        <Dialog open={open} fullWidth>
            <DialogContent>
                <CustomDialogTitle>Criar Lista de Supermercado</CustomDialogTitle>
                <CustomFormControl>
                    <CustomDialogContentText>Nome da Lista:</CustomDialogContentText>
                    <CustomTextField
                        type="text"
                        defaultValue={"Lista 1"}
                        style={{marginBottom: '20px'}}
                        required
                        onChange={(e) => setListName(e.target.value)}
                    >
                    </CustomTextField>
                    <CustomDialogContentText>Data da Lista:</CustomDialogContentText>
                    <CustomTextField
                        type="date"
                        defaultValue={listDate}
                        style={{marginBottom: '20px'}}
                        required
                        onChange={(e) => setListDate(e.target.value)}
                    >
                    </CustomTextField>
                    <CustomDialogContentText>Itens da Lista:</CustomDialogContentText>
                    {
                        (items.length > 0) ? (
                            <List>
                                {
                                    items.map((value, index) => (
                                        <CustomListMarketItem key={index}>
                                            <CustomPItem>{value}</CustomPItem>
                                            <Button 
                                                onClick={() => setItems(items.filter((v, i) => i !== index))}
                                                style={{
                                                    color: "#E58328"
                                                }}
                                            >
                                                <CloseIcon/>
                                            </Button>
                                        </CustomListMarketItem>
                                    ))
                                }
                            </List>
                        ) : (<div></div>)
                    }
                    <CustomTextField 
                        onChange={(e) => setActualIten(e.target.value)}
                        label="Nome do item"
                        style={{
                            borderColor: '#E58328 !important',
                            marginTop: '10px'
                        }}
                    >
                    </CustomTextField>   
                    <Button 
                        onClick={
                            () => {
                                if (actualIten.length > 0) setItems([...items, actualIten])
                            }
                        }
                        style={{
                            color: "#E58328"
                        }}
                    >
                        Adicionar Item + 
                    </Button>
                    <DialogActions>
                        <Button
                            variant="text"
                            onClick={() => {
                                setActualIten("")
                                setItems([])
                                onClose()
                                onClose()
                            }}
                            style={{
                                color: "#E58328"
                            }}
                        >
                            Cancelar
                        </Button>
                        <Button
                            variant="contained"
                            disabled={items.length===0}
                            style={{
                                backgroundColor: (items.length===0) ? "rgba(0, 0, 0, 0.12)" : "#E58328",
                            }}
                            onClick={() => {
                                addList(buildListObjectData())
                                setActualIten("")
                                setItems([])
                                onClose()
                            }}
                        >
                            Criar
                        </Button>
                    </DialogActions>
                </CustomFormControl>
            </DialogContent>
        </Dialog>
    )
}