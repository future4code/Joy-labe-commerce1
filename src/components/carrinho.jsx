import React from 'react';
import styled from 'styled-components';


const ContainerCarrinho = styled.div`
border-radius:10px;
  border: 2px solid black;
  padding: 10px;
`;


export class Carrinho extends React.Component {


  render() {

    return (
      <ContainerCarrinho>
        <div>
          <h3>Carrinho:</h3>
        </div>
        {/* <div>
          {this.state.cestaDeProdutos.map(props => {
            return <Lista
              key={props.id}
              nome={props}
              Adiciona={this.adicionaAoCarrinho()}
              Remove={this.removeDoCarrinho()}
            />
          })}
        </div> */}
        <div>
          <button onClick={() => this.props.removeDoCarrinho()}>Remover</button>
        </div>
        Valor total: R$
      </ContainerCarrinho>
    );
  }
}