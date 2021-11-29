import React from 'react';
import Carrinho from './components/carrinho';
import Produtos from './components/produtos';
import Filtro from './components/filtro';
import styled from 'styled-components';

//import styled from 'styled-components';

const AppCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;

const produtos = [      {
  id: 1,
  name: "Foguete da Missão Apollo 11",
  value: 10000.0,
  imageUrl: "https://picsum.photos/200/200",
},
{
  id: 2,
  name: "Foguete da Missão Apollo 11",
  value: 10000.0,
  imageUrl: "https://picsum.photos/200/200",
},{
  id: 3,
  name: "Foguete da Missão Apollo 11",
  value: 10000.0,
  imageUrl: "https://picsum.photos/200/200",
},
{
  id: 4,
  name: "Foguete da Missão Apollo 11",
  value: 10000.0,
  imageUrl: "https://picsum.photos/200/200",
},
{
  id: 5,
  name: "Foguete da Missão Apollo 11",
  value: 10000.0,
  imageUrl: "https://picsum.photos/200/200",
},{
  id: 6,
  name: "Foguete da Missão Apollo 11",
  value: 10000.0,
  imageUrl: "https://picsum.photos/200/200",
}


]


export default class App extends React.Component {
// estado
state = {
    valorMaximo: "",
    valorMinimo: "",
    buscaPorNome: "",
    lista: [
      {
        id: 1,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 2,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      },{
        id: 3,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      }
    ]
  };




render(){
// filtros e map

  return (

<AppCont>
    <div>
      
      E - Commerce Rocket Star
    <Filtro />
    </div>
    <div>
    <Produtos />
    </div>
    <div>
    <Carrinho />

    </div>
    </AppCont>
  );
}

}
