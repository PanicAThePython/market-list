// import { HeaderLogoLeft } from "../styles/styles";
// import MarketListLogo from "../../assets/images/market-list-logo.svg"
import { ForgotPasswordForm } from "../../components/ForgotPasswordForm";
import { CustomMain, CustomP, ForgotPasswordTitle } from "./styles/styles";

export function ForgotPasswordPage(){
    return(
        <div>
            {/* <HeaderLogoLeft>
                <img src={MarketListLogo} alt="Logo MarketList" style={{marginBottom: '20px'}} height={'60px'}/>
            </HeaderLogoLeft> */}

            <CustomMain>
                <ForgotPasswordTitle>Esqueceu a senha?</ForgotPasswordTitle>
                <CustomP>
                    Informe seu e-mail cadastrado no MarketList para enviarmos as instruções de redefinição da senha.
                </CustomP>
                <ForgotPasswordForm/>
            </CustomMain>
            <footer style={{textAlign: 'center', paddingBottom: '50px', position: 'relative', marginTop: '150px'}}>© 2024, MarketList.</footer>

        </div>
    )
}