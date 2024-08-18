import { LoginForm } from "../../components/LoginForm";
import { CustomImg, CustomLinkPng, CustomMain, Subtitle } from "./styles/styles";
import CartIllustration from "../../assets/images/shopping.png"

export function InitialPage() {
    return (
        <div>       
            <Subtitle>Crie suas listas de supermercado e leve-as aonde for!</Subtitle>
            <CustomMain>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <CustomImg src={CartIllustration} alt="mulher com carrinho de compras" />
                    <CustomLinkPng>
                        {/* <a href='https://pt.pngtree.com/freepng/shopping-cart-mobile-shopping_5407927.html'>imagem PNG de pt.pngtree.com/</a> */}
                        <a
                            href='https://pt.pngtree.com/freepng/happy-enjoy-supermarket-cart_3954334.html'
                            style={{
                                color: '#2e2723',
                                textDecoration: 'none'
                            }}
                        >
                            imagem PNG de pt.pngtree.com/
                        </a>
                    </CustomLinkPng>
                </div>
                <LoginForm style={{marginLeft: '500px'}}/>
            </CustomMain>
            <footer style={{textAlign: 'center', paddingBottom: '50px', position: 'relative', marginTop: '150px'}}>© 2024, MarketList.</footer>
        </div>
    )
}