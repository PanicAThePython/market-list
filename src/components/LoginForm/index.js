import { useState } from 'react'
import { CustomBox, CustomButton, CustomLinks, CustomTextField, LoginInputs, TitleForm } from './styles/styles'

export function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(false)

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
            <TitleForm>Acesse sua conta</TitleForm>
            <LoginInputs>
                <CustomTextField
                    variant='filled'
                    label="E-mail"
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
                <CustomTextField
                    variant='filled'
                    label="Senha"
                    type='password'
                    error={isPasswordInvalid}
                    helperText={getMessagePassword()}
                    onChange={
                        (e) => {
                            setPassword(e.target.value)
                            if (e.target.value.length > 0) setIsPasswordInvalid(false)
                            else setIsPasswordInvalid(true)
                        }
                    }
                >

                </CustomTextField>
                <CustomLinks href="/forgot_password">Esqueceu a senha?</CustomLinks>
                <CustomButton variant='contained' type='submit'>Entrar</CustomButton>
                <CustomLinks href="/registry">Ainda não possui conta? Clique aqui para começar</CustomLinks>

            </LoginInputs>
        </CustomBox>
    )
}