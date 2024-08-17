import { HeaderLogo } from "../initial/styles/styles";
import MarketListLogo from "../../assets/images/market-list-logo.svg"
import { RegistryForm } from "../../components/registry";

export function RegisterPage() {
    return (
        <div>
            <HeaderLogo>
                <img src={MarketListLogo} alt="Logo MarketList"/>
            </HeaderLogo>
            
            <main style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'relative', bottom: '20px'}}>
                <RegistryForm/>
            </main>
        </div>
    )
}