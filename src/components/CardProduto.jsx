import React from 'react';
import styled from 'styled-components';


const ProdutoContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  
`;

const ItensProduto = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
 p {
    margin: 4px 0;
  }
`

const PhotoProduto = styled.img`
  width: 100%;
`
const CardDoBotao = styled.button`
  align-self: center;
  margin-top: 4px;
`

export class CardProduto extends React.Component {


render(){
// filtros e map
let produto = this.props.produto
console.log("teste",this.props)
  return  <ProdutoContainer>
          <PhotoProduto src='https://picsum.photos/1000/740' alt='Imagem do produto' />
          <ItensProduto>
          <p>100</p>
        <p>R1,00</p>
          <CardDoBotao  onClick={() => this.props.adicionaAoCarrinho(produto.Id)}>
         Adicionar ao carrinho
         </CardDoBotao>
         </ItensProduto>
        </ProdutoContainer>

}
}
