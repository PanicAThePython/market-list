import { useState } from "react";
import { CustomButton, CustomLinks, CustomTextField, TitleForm } from "../LoginForm/styles/styles";
import { CustomBox, LoginInputs } from "./styles";

export function RegistryForm(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isNameValid, setIsNameValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(false)

    const getMessageName = () => {
        if (isNameValid) return ""
        if (name !== undefined){
            if (name.length > 0) return ""
            else return "Campo obrigatório"
        }
    }

    const getMessageEmail = () => {
        if (isEmailValid) return ""
        if (email !== undefined){
            if (email.length > 0) return "E-mail inválido"
            else return "Campo obrigatório"
        }
    }

    const getMessagePassword = () => {
        if (isPasswordInvalid == null || !isPasswordInvalid){
            if (password.length > 0){
                return ""
            }
        }
        else return "Campo obrigatório"
    }

    return (
        <CustomBox>
            <TitleForm>Crie sua conta!</TitleForm>
            <LoginInputs>
                <CustomTextField
                    variant='filled'
                    type='text'
                    label="Seu nome"
                    error={!isNameValid}
                    helperText={getMessageName()}
                    required
                    onChange={
                        (e) => {
                            setName(e.target.value)
                            if (e.target.value.length <= 1) setIsNameValid(false)
                            else setIsNameValid(true)
                        }
                    }
                >
                </CustomTextField>
                <CustomTextField
                    variant='filled'
                    label="E-mail"
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
                <CustomTextField
                    variant='filled'
                    label="Senha"
                    type='password'
                    error={isPasswordInvalid}
                    helperText={getMessagePassword()}
                    required
                    onChange={
                        (e) => {
                            setPassword(e.target.value)
                            if (e.target.value.length > 0) setIsPasswordInvalid(false)
                            else setIsPasswordInvalid(true)
                        }
                    }
                >
                </CustomTextField>
                <CustomButton variant='contained' type='submit'>Cadastrar</CustomButton>
                <CustomLinks href="/">Já possui conta? Clique aqui para fazer login</CustomLinks>
            </LoginInputs>
        </CustomBox>
    )
}