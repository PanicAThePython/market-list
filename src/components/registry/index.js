import { CustomBox, CustomButton, CustomLinks, CustomTextField, LoginInputs, TitleForm } from "../login/styles/styles";

export function RegistryForm(){
    return (
        <CustomBox>
            <TitleForm>Crie sua conta!</TitleForm>
            <LoginInputs>
                <CustomTextField variant='filled' type='text' label="Seu nome"></CustomTextField>
                <CustomTextField variant='filled' label="Seu e-mail" type='email' styles={{border: 'none'}}> </CustomTextField>
                <CustomTextField variant='filled' label="Sua senha" type='password'></CustomTextField>
                <CustomButton variant='contained' type='submit'>Cadastrar</CustomButton>
                <CustomLinks>Já possui conta? Clique aqui para fazer login</CustomLinks>
            </LoginInputs>
        </CustomBox>
    )
}