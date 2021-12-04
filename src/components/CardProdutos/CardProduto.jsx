import React from 'react';
import { ProdutoContainer, ItensProduto, PhotoProduto, CardDoBotao } from './style';


export function Itens(props) {
  return <ProdutoContainer>
          <PhotoProduto img src={props.nave.imagem}>
          </PhotoProduto>
          <ItensProduto>
          <p>{props.nave.nome}</p>
          <p>R$ {props.nave.preco.toFixed(2).replace(".", ",")}</p>
          <CardDoBotao onClick={() => this.props.adicionaAoCarrinho(props.nave.id)}>
          Adicionar ao carrinho
          </CardDoBotao>
          </ItensProduto>
        </ProdutoContainer>
}