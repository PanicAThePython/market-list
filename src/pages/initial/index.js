import { LoginForm } from "../../components/login";
import { HeaderLogo, Subtitle } from "./styles/styles";
import MarketListLogo from "../../assets/images/market-list-logo.svg"
import CartIllustration from "../../assets/images/shopping.png"

export function InitialPage() {
    return (
        <div>
            <HeaderLogo>
                <img src={MarketListLogo} alt="Logo MarketList"/>
                <Subtitle>Crie suas listas de supermercado e leve-as aonde for!</Subtitle>
            </HeaderLogo>
            
            <main style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'relative', bottom: '20px'}}>
                <img src={CartIllustration} alt="mulher com carrinho de compras" width={'500px'} />
                <LoginForm style={{marginLeft: '500px'}}/>
            </main>
        </div>
    )
}