import React from 'react';
import styled from 'styled-components';
// import naves from "../App"
import { Itens } from './CardProdutos/CardProduto';

const ContainerCarrinho = styled.div`
border-radius:10px;
  border: 2px solid black;
  padding: 10px;
`;


export class Carrinho extends React.Component {


  render() {

    // const navesList = naves.map((item)=>{
    //   return(
    //   <p key={item.name} onClick={() => this.adicionaAoCarrinho()}>
    //   {item.nome}, {item.preco}</p>
    //   )})

    return (
      <ContainerCarrinho>
        <div>
          <h3>Carrinho:</h3>
        </div>
       
        <div>
          {/* <button onClick={() => this.props.removeDoCarrinho()}>Remover</button> */}
        </div>
        Valor total: R$
      </ContainerCarrinho>
    );
  }
}