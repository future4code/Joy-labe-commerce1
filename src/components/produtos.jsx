import React from 'react';
import styled from 'styled-components';
import listaNaves from "../data/naves.json"
import  { Itens }   from './CardProdutos/CardProduto';

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

export class Produtos extends React.Component{
  
  state = {
    naves: listaNaves
  }

render(){

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
     {this.state.naves.map(nave => {
       return <Itens key={nave.id} nave={nave} />
     })}
  </GradeProdutos>
</ContainerProduto>
}
}