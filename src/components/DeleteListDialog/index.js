import { DialogActions, DialogContent, Typography } from "@mui/material";
import { CustomButtonCancel, CustomButtonDelete, CustomDialog, CustomTitleDialogDelete } from "./style/styles";

export function DeleteListDialog({open, handleClose, handleDelete}){

    return (
        <CustomDialog
            open={open}
            >
            <DialogContent>
                <CustomTitleDialogDelete variant="h5" component="h2">
                    Deseja excluir a lista?
                </CustomTitleDialogDelete>
                <Typography sx={{ mt: 2 }}>
                    Após a exclusão, não será possível recuperá-la.
                </Typography>
            </DialogContent>
            <DialogActions>
                <CustomButtonCancel
                    variant="text"
                    onClick={() => handleClose()}
                >
                    Cancelar
                </CustomButtonCancel>
                <CustomButtonDelete
                    variant="contained"
                    onClick={() => {
                        handleDelete()
                        handleClose()
                    }}
                >
                    Excluir
                </CustomButtonDelete>
            </DialogActions>
        </CustomDialog>
    )
}