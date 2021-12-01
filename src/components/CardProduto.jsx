import React from 'react';
import styled from 'styled-components';


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

const PhotoProduto = styled.img`
  width: 100%;
`
const CardDoBotao = styled.button`
  align-self: center;
  margin-top: 4px;
`

export class CardProduto extends React.Component {

  render() {
    const produto = this.props.produto;
    return (
    <ProdutoContainer>
          <PhotoProduto src='https://picsum.photos/1000/740'/>
          <ItensProduto>
          <p>{produto.nome}</p>
        <p>R1,00</p>
          <CardDoBotao  onClick={() => this.props.adicionaAoCarrinho(produto.id)} >
         Adicionar ao carrinho
         </CardDoBotao>
         </ItensProduto>
        </ProdutoContainer>
    )
    }
  }
