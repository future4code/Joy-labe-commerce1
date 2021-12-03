import React from 'react';
import styled from 'styled-components';


const ContainerFiltro = styled.div`
border-radius:10px;
  border: 2px solid black;
  padding: 10px;
`;

const ContainerInput = styled.div`
  margin-bottom: 4%;
  

`

export class Filtro extends React.Component {

  // state = {
  //   naves: listaNaves
  // }

  render() {
    return <ContainerFiltro>
      
      <div>
        <h3>Filtros</h3> <br />
      </div>

      <ContainerInput>
        <p>Valor mínimo:</p>
        <input
          type='number'
          value={this.props.valorMinimo}
          onChange={this.props.atualizaValorMinimo}
        />
      </ContainerInput>

      <ContainerInput>
        <p>Valor máximo:</p>
        <input 
          type='number'
          value={this.props.valorMaximo}
          onChange={this.props.atualizaValorMaximo}
        />
      </ContainerInput>

      <ContainerInput>
        <p>Busca por nome:</p>
        <input
          value={this.props.buscaPorNome}
          onChange={this.props.atualizaBuscaPorNome}
        />
      </ContainerInput>

    </ContainerFiltro>

  }
}
