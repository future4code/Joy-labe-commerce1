import React from "react";
import styled from "styled-components";
import {  CardDoBotao} from "./CardProdutos/style";

const Container = styled.div`
  border-radius: 10px;
  border: 2px solid black;
  padding: 10px;
`;

export class Carrinho extends React.Component {
  render() {
    const renderList = this.props.naves.map((item) => {
      return (
        <div>
          <p key={item.nome} />

          <span>
            {" "}
            {item.nome}, {item.preco}{" "}
          </span>
          <CardDoBotao onClick={() => this.props.removeItem(item.nome)}>
            Remover
          </CardDoBotao>
        </div>
      );
    });

    return <Container>{renderList}</Container>;
  }
}
