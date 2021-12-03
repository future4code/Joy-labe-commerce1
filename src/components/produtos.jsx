import React from 'react';
import styled from 'styled-components';

import { Itens } from './CardProdutos/CardProduto';

const ContainerProduto = styled.div`

`

const HeaderProduto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`

const GradeProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`
export class Produtos extends React.Component {

  // state = {
  //   naves: listaNaves
  // }

  render() {

    return <ContainerProduto>
      <HeaderProduto>
        <p>Quantidade de produtos: </p>
        <span>
          <label for="ordenacao">Ordenação: </label>
          <select
            name="ordenacao"
            value={this.props.parametroOrdenacao}
            onChange={this.props.atualizaParametroOrdenacao}
          >
            <option value="nome">Título</option>
            <option value="preco">Preço</option>
          </select>
        </span>

        <select
          name="ordem"
          value={this.props.ordem}
          onChange={this.props.atualizaOrdem}
        >
          <option value={1}>Crescente</option>
          <option value={-1}>Decrescente</option>

        </select>
      </HeaderProduto>
      <GradeProdutos>
        {this.props.listaFiltrada
        .map(nave => {
          return <Itens key={nave.id} nave={nave} />
        })}

        
      </GradeProdutos>
    </ContainerProduto>
  }
}