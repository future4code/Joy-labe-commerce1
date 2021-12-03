import React from 'react';
import { ProdutoContainer, ItensProduto, PhotoProduto, CardDoBotao } from './style';


export function Itens(props) {
  return <ProdutoContainer>
          <PhotoProduto img src={props.naves.imagem}>
          </PhotoProduto>
          <ItensProduto>
          <p>{props.naves.nome}</p>
          <p>R$ {props.naves.preco.toFixed(2).replace(".", ",")}</p>
          <CardDoBotao onClick={() => this.props.adicionaAoCarrinho(props.naves.id)}>
          Adicionar ao carrinho
          </CardDoBotao>
          </ItensProduto>
        </ProdutoContainer>
}