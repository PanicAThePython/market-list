// import MarketListLogo from "../../assets/images/market-list-logo.svg"
import { RegistryForm } from "../../components/RegistryForm";
import CellphoneIllustration from "../../assets/images/celular.png"
import { CustomImg, CustomMain } from "./styles/styles";
import { CustomFooter } from "../initial/styles/styles";
// import { HeaderLogoLeft } from "../styles/styles";

export function RegisterPage() {
    return (
        <div>
            {/* <HeaderLogoLeft>
                <img src={MarketListLogo} alt="Logo MarketList" style={{marginBottom: '20px'}} height={'60px'}/>
            </HeaderLogoLeft> */}
            
            <CustomMain>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <CustomImg src={CellphoneIllustration} alt="celular " />
                    <p style={{position: 'relative', bottom: '70px'}}>
                        <a
                            href='https://pt.pngtree.com/freepng/shopping-cart-mobile-shopping_5407927.html'
                            style={{
                                color: '#2e2723',
                                textDecoration: 'none'
                            }}
                        >
                            imagem PNG de pt.pngtree.com/
                        </a>
                    </p>
                </div>
                <RegistryForm/>
            </CustomMain>
            <CustomFooter>© 2024, MarketList.</CustomFooter>

        </div>
    )
}