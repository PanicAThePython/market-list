import { useState } from "react";
import { CustomBox, CustomButton, CustomTextField, LoginInputs } from "./styles/styles";

export function ForgotPasswordForm({handleEmail}){
    const [email, setEmail] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(true)

    const getMessageEmail = () => {
        if (isEmailValid) return ""
        if (email !== undefined){
            if (email.length > 0) return "E-mail inválido"
            else return "Campo obrigatório"
        }
    }

    return (
        <CustomBox>
            <LoginInputs>
                <CustomTextField
                    variant='filled'
                    label="Seu e-mail"
                    type='email'
                    styles={{border: 'none'}}
                    error={!isEmailValid}
                    helperText={getMessageEmail()}
                    required
                    onChange={
                        (e) => {
                            setEmail(e.target.value)
                            if (!e.target.value.includes('@')) setIsEmailValid(false)
                            else setIsEmailValid(true)
                        }
                    }
                >
                </CustomTextField>
                <CustomButton
                    variant='contained'
                    type='submit'
                    onClick={() => handleEmail()}
                >
                    Enviar
                </CustomButton>
            </LoginInputs>
        </CustomBox>
    )
}