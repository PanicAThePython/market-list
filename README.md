# MarketList

O presente projeto é uma aplicação frontend para um sistema de gerenciamento de listas de supermercado. A logo do MarketList foi criada por mim. O restante das imagens usadas no projeto foram obtidas em sites de png free e possuem o link para acessá-las logo abaixo delas próprias, com exceção do link da imagem de perfil que não coube. [Link para imagem de perfil](https://www.freeiconspng.com/img/898).

Para facilitar, estarei disponibilizando novamente os links das imagens, mas aqui no README. Seguem links:
* [Imagem da página inicial](https://pt.pngtree.com/freepng/happy-enjoy-supermarket-cart_3954334.html);
* [Imagem da página de cadastro](https://pt.pngtree.com/freepng/shopping-cart-mobile-shopping_5407927.html);
* [Link para pesquisa da imagem da página de erro](https://www.flaticon.com/br/stickers-gratis/vazio);
* [Link para pesquisa de imagem da página de perfil - sem listas](https://www.flaticon.com/br/icones-gratis/carrinho-vazio).

## Design das telas

Todas as telas foram desenhadas no Figma, tanto na versão desktop quanto na mobile. Para acessar, [clique aqui](https://www.figma.com/design/k8uOJG8kTRF76xkt4cGcGw/MarketList?node-id=0-1&node-type=CANVAS&t=WNvJPoIQlL4jpvkD-0).

## Como rodar?

Basta clonar o presente repositório na sua máquina e rodar ```npm install``` seguido de ```npm start```. O projeto será aberto na página inicial (login).
Caso queira ver a aplicação em funcionamento, mas não queira clonar o repositório, [clique aqui e veja um vídeo demonstrando o MarketList em funcionamento](https://www.linkedin.com/posts/natalia-weise_h%C3%A1-alguns-dias-atr%C3%A1s-me-desafiei-com-um-activity-7233891570050101248-K8Md?utm_source=share&utm_medium=member_desktop).

### Quais são as rotas?

* ```/``` : página inicial (login);
* ```/profile``` : rota para visualizar perfil "logado";
* ```/forgot_password``` : rota para enviar e-mail de redefinição de senha;
* ```/registry``` : rota para cadastro;
* Caso qualquer outra coisa seja escrita após ```/```, será redirecionado para a página de 404 error.
