import { HeaderLogoLeft } from "./styles/styles";
import MarketListLogo from "../../assets/images/market-list-logo.svg"

export function Header(){
    return (
        <HeaderLogoLeft>
            <a href="/" style={{ textDecoration: 'none' }}>
                <img src={MarketListLogo} alt="Logo MarketList" style={{marginBottom: '20px'}} height={'50px'}/>
            </a>
        </HeaderLogoLeft>
    )
}