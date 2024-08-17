import { CustomBox, CustomButton, CustomLinks, CustomTextField, LoginInputs, TitleForm } from './styles/styles'

export function LoginForm() {
    return (
        <CustomBox>
            <TitleForm>Acesse sua conta</TitleForm>
            <LoginInputs>
                <CustomTextField variant='filled' label="E-mail" type='email' styles={{border: 'none'}}> </CustomTextField>
                <CustomTextField variant='filled' label="Senha" type='password'></CustomTextField>
                <CustomLinks >Esqueceu a senha?</CustomLinks>
                <CustomButton variant='contained' type='submit'>Entrar</CustomButton>
                <CustomLinks>Ainda não possui conta? Clique aqui para começar</CustomLinks>

            </LoginInputs>
        </CustomBox>
    )
}