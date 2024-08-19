import { Button, Dialog, Typography } from "@mui/material"
import styled from "styled-components"

const CustomDialog = styled(Dialog)`
    .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation24.MuiDialog-paper.MuiDialog-paperScrollPaper.MuiDialog-paperWidthSm.css-1t1j96h-MuiPaper-root-MuiDialog-paper{
        padding: 10px !important;
    }
`

const CustomButtonCancel = styled(Button)`
    color: #E58328 !important;
`

const CustomButtonDelete = styled(Button)`
    background-color: #E58328 !important;
`

const CustomTitleDialogDelete = styled(Typography)`
    color: #B5651C;
`

export { CustomDialog, CustomButtonCancel, CustomButtonDelete, CustomTitleDialogDelete }