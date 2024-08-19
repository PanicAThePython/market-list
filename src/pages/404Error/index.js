import NotFoundIllustration from "../../assets/images/carrinho-vazio.png"
import { CustomFooter, CustomImg, CustomLink, CustomMain, CustomPError, ErrorMessage } from "./styles/styles"

export function Error404Page() {

    return (
        <div>
            <CustomMain>
                <div style={{textAlign: 'left', width: '300px', display: 'flex', flexDirection: 'column'}}>
                    <ErrorMessage>404 ERROR</ErrorMessage>
                    <CustomPError>A página que você está tentando acessar não existe</CustomPError>
                    <CustomLink href="/">
                        Voltar à página inicial
                    </CustomLink>
                    <a 
                        href="https://www.flaticon.com/br/stickers-gratis/vazio" 
                        title="vazio figurinhas"
                        style={{
                            color: '#2e2723',
                            textDecoration: 'none'
                        }}
                    >
                        Vazio figurinhas criadas por kerismaker - Flaticon
                    </a>
                </div>
                <CustomImg src={NotFoundIllustration} alt="carrinho vazio" />
            </CustomMain>
            <CustomFooter>© 2024, MarketList.</CustomFooter>
        </div>
    )
}