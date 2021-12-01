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

// const PhotoProduto = styled.img`
//   width: 100%;
// `
const CardDoBotao = styled.button`
  align-self: center;
  margin-top: 4px;
`

export default class CardProduto extends React.Component {
// filtros e map
const produto = this.props.produto

  render() {
    const produtos = this.props.produtos
    return <ProdutoContainer>
      <img src={this.props.imagem}/>
      <ItensProduto>
        <p>{this.props.nome}</p>
        <p>R${this.props.preco},00</p>
        <CardDoBotao onClick={() => this.props.adicionaAoCarrinho(this.props.id)}>
          Adicionar ao carrinho
        </CardDoBotao>
      </ItensProduto>
    </ProdutoContainer>
  }
}