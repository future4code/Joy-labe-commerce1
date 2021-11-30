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

export default class CardProduto extends React.Component {


render(){
// filtros e map
const produto = this.props.produto

  return (


    <div>
        <ProdutoContainer>
          <PhotoProduto src='https://picsum.photos/1000/740' alt='Imagem do produto' />
          <ItensProduto>
          <p>Produto 1</p>
          <p>R$ 100,00</p>
          <CardDoBotao  onClick={() => this.props.adicionaAoCarrinho(this.props.produto.id)}>
         Adicionar ao carrinho
         </CardDoBotao>
         </ItensProduto>
        </ProdutoContainer>
    </div>
  );
}
}
