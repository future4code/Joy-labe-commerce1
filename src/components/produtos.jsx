import React from 'react';
import  CardProduto  from './CardProduto';
import styled from 'styled-components';

const ContainerProduto = styled.div`

`;

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
export default class Produtos extends React.Component {


render(){
// filtros e map

  return <ContainerProduto>
  <HeaderProduto>
    <p>Quantidade de produtos: </p>
    <label>
      Ordenação:
      <select>
        <option value={'CRESCENTE'}>Crescente</option>
        <option value={'DECRESCENTE'}>Decrescente</option>
      </select>
    </label>
  </HeaderProduto>
  <GradeProdutos>
     <CardProduto />
     <CardProduto />
     <CardProduto />
     <CardProduto />
     <CardProduto />
     <CardProduto />
  </GradeProdutos>
</ContainerProduto>
}
}
