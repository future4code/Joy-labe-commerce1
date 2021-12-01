import React from 'react';
import { Carrinho } from './components/carrinho';
import { Produtos } from './components/produtos';
import { Filtro } from './components/filtro';
import styled from 'styled-components';

//import styled from 'styled-components';

const AppCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;

const produtos = [
  {
    id: 1,
    nome: 'Falcon 9',
    preco: 100.00,
    imagem: 'https://engenhariaaeronautica.com.br/wp-content/uploads/2020/07/estrutura-falcon9-2-768x768.jpg'
  },
  {
    id: 2,
    nome: 'Starship',
    preco: 200.00,
    imagem: 'https://tecnoblog.net/meiobit/wp-content/uploads/2019/09/20190930efvbpwuxuaauy5w.jpg'
  },
  {
    id: 3,
    nome: 'Super Heavy',
    preco: 300.00,
    imagem: 'https://i.redd.it/2rx75mrsez821.png'
  },
  {
    id: 4,
    nome: 'Blue Origin',
    preco: 400.00,
    imagem: 'https://img.ibxk.com.br/2021/08/26/26114401962259.jpg'
  },
  {
    id: 5,
    nome: 'SpaceX SN15',
    preco: 350.00,
    imagem: 'https://1734811051.rsc.cdn77.org/data/images/full/372411/spacex-makes-way-for-its-sn8-prototype-by-purposely-destroying-starship-tank.png'
  },
  {
    id: 6,
    nome: 'Saturn V',
    preco: 150.00,
    imagem: 'https://static.turbosquid.com/Preview/2019/10/27__11_34_00/NASA1.pngB5471682-02E0-42CC-83F4-BA2BBD0BE03AZoom.jpg'
  }

]

export default class App extends React.Component {
  // estado
  state = {
    valorMaximo: "",
    valorMinimo: "",
    buscaPorNome: "",
    cestaDeProdutos: []
  };


  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.inputValue !== this.state.cestaDeProdutos)
  //     localStorage.setItem("cesta", this.state.cestaDeProdutos)
  //   console.log("cestaDeProdutos salva")

  //   if (prevState.filtro !== this.state.cestaDeProdutos)
  //     localStorage.setItem("cesta", this.state.cestaDeProdutos)
  //   console.log("status cesta")

  //   if (prevState.tarefas !== this.state.cestaDeProdutos)
  //     localStorage.setItem("cesta", this.state.cestaDeProdutos.id)
  //   console.log("array")

  //   if (prevState.tarefas !== this.state.cestaDeProdutos)
  //     localStorage.setItem("cesta", this.state.cestaDeProdutos.nome)
  //   console.log("array")

  //   if (prevState.tarefas !== this.state.cestaDeProdutos)
  //     localStorage.setItem("tarefa", this.state.cestaDeProdutos.preco)
  //   console.log("array")
  // };

  // //enviar JSON quando adicionar carrinho
  // componentDidMount() {
  //   this.adicionaAoCarrinho();
  //   const idLS = localStorage.getItem("id") || "";
  //   const nomeLS = localStorage.getItem("nome") || "";
  //   const precoLS = localStorage.getItem("preco") || "";
  //   this.setState({ id: idLS, nome: nomeLS, preco: precoLS });
  // }

  adicionaAoCarrinho = (props) => {
    const AdicionaProduto = {
      id: this.state.cestaDeProdutos,
      nome: this.state.cestaDeProdutos,
      preco: this.state.cestaDeProdutos
    }
    const novaCesta = [...this.state.cestaDeProdutos, AdicionaProduto]
    this.setState({ cestaDeProdutos: novaCesta })
    console.log("ok produto encestado!!")
  //   localStorage.setItem("Cesta-De-Produtos", JSON.stringify(novaCesta));
   }
  removeDoCarrinho = id => {

    // tentativa de apagar carrinho

    const novaCesta = this.state.cestaDeProdutos.filter(nome => {
      return id !== nome.id;
    });

    this.setState({ cestaDeProdutos: novaCesta });
  };

  render() {
    // filtros e map
    
    return (

      <AppCont>
        <div>

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