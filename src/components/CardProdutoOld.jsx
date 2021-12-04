import React from 'react';
import styled from 'styled-components';
import { Itens } from './CardProdutos/CardProduto';

const ProdutoContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  
`

const ItensProduto = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
 p {
    margin: 4px 0;
  }
`

// const Imagem = styled.img`
//   width: 100%;
// `

const CardDoBotao = styled.button`
  align-self: center;
  margin-top: 4px;
`

export class CardProduto extends React.Component {

  render() {
    const produto = this.props.produtos;
    return (
      <ProdutoContainer>
{/* 
        <img src={produto.imagem} /> 
         */}
        <ItensProduto>
          <p>Super</p>
          <p>R1,00</p>
          <CardDoBotao onClick={() => this.props.adicionaAoCarrinho(produto.id)} >
            Adicionar ao carrinho
          </CardDoBotao>
        </ItensProduto>
      </ProdutoContainer>
    )
  }
}
