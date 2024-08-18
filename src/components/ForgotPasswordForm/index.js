import { useState } from "react";
import { CustomButton, CustomTextField } from "../LoginForm/styles/styles";
import { CustomBox, LoginInputs } from "./styles/styles";

export function ForgotPasswordForm(){
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
                    onChange={
                        (e) => {
                            setEmail(e.target.value)
                            if (!e.target.value.includes('@')) setIsEmailValid(false)
                            else setIsEmailValid(true)
                        }
                    }
                >
                </CustomTextField>
                <CustomButton variant='contained' type='submit'>Enviar</CustomButton>
            </LoginInputs>
        </CustomBox>
    )
}