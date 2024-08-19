import { useState } from "react";
import { CustomBox, CustomButton, CustomTextField, LoginInputs } from "./styles/styles";
import { Button } from "@mui/material";

export function ChangePasswordForm({changePasswordState}) {
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const checkPassword = () => {
        if (newPassword === confirmPassword && newPassword.length > 0 && confirmPassword.length > 0) 
            return true
        else if (confirmPassword.length === 0 || newPassword.length === 0 ) return true
        return false
    }

    const getMessageCheckPassword = () => {
        if (checkPassword()) return ""
        return "As senhas não são iguais"
    }

    return (
        <CustomBox>
            <LoginInputs>
                <CustomTextField
                    variant='filled'
                    label="Nova senha"
                    type='password'
                    styles={{border: 'none'}}
                    required
                    onChange={
                        (e) => setNewPassword(e.target.value)
                    }
                >
                </CustomTextField>
                <CustomTextField
                    variant='filled'
                    label="Confirme a senha"
                    type='password'
                    styles={{border: 'none'}}
                    error={!checkPassword()}
                    helperText={getMessageCheckPassword()}
                    required
                    onChange={
                        (e) => setConfirmPassword(e.target.value)
                    }
                >
                </CustomTextField>
                <div style={{display: 'flex'}}>
                    <Button variant="text" style={{color: "white", fontWeight: 'bold', width: "120px"}} type='submit' onClick={() => changePasswordState()}>Cancelar</Button>
                    <CustomButton style={{marginLeft: '15px'}} variant='contained' type='submit'>Mudar senha</CustomButton>
                </div>
            </LoginInputs>
        </CustomBox>
    )
}