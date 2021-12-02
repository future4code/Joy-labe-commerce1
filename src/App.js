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

class App extends React.Component {
  // estado
  state = {
    valorMaximo: "",
    valorMinimo: "",
    buscaPorNome: "",
    cestaDeProdutos: [],
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
export default App;