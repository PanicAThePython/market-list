import { useState } from "react";
import { ForgotPasswordForm } from "../../components/ForgotPasswordForm";
import { CustomMain, CustomP, ForgotPasswordTitle } from "./styles/styles";

export function ForgotPasswordPage(){
    const [emailWasSent, setEmailWasSent] = useState(false)

    return(
        <div>
            {
                (!emailWasSent) ? (
                    <CustomMain>
                        <ForgotPasswordTitle>Esqueceu a senha?</ForgotPasswordTitle>
                        <CustomP>
                            Informe seu e-mail cadastrado no MarketList para enviarmos as instruções de redefinição da senha.
                        </CustomP>
                        <ForgotPasswordForm handleEmail={() => setEmailWasSent(true)}/>
                    </CustomMain>
                ) : (
                    <CustomMain>
                        <ForgotPasswordTitle>E-mail enviado!</ForgotPasswordTitle>
                        <CustomP>
                            Um link para redefinir a senha foi enviado para o seu <br/>e-mail. Caso não o encontre na caixa de entrada, verifique seu spam.
                        </CustomP>
                    </CustomMain>
                )
            }
            <footer style={{textAlign: 'center', paddingBottom: '50px', position: 'relative', marginTop: '150px'}}>© 2024, MarketList.</footer>

        </div>
    )
}