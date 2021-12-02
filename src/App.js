import React from 'react'
import { Carrinho } from './components/carrinho'
import { Produtos } from './components/produtos'
import { Filtro } from './components/filtro'
import { ContainerGeral } from './components/styles'
import { Main } from './components/styles'
import { Left } from './components/styles'
import { Middle } from './components/styles'
import { Right } from './components/styles'
import { AppCont } from './components/styles'
import { Rodape } from './components/styles'
import { Menus } from './components/styles'


class App extends React.Component {
  // estado
  state = {
    valorMaximo: '',
    valorMinimo: '',
    buscaPorNome: '',
    cestaDeProdutos: []
  }

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

  adicionaAoCarrinho = props => {
    const AdicionaProduto = {
      id: this.state.cestaDeProdutos,
      nome: this.state.cestaDeProdutos,
      preco: this.state.cestaDeProdutos
    }
    const novaCesta = [...this.state.cestaDeProdutos, AdicionaProduto]
    this.setState({ cestaDeProdutos: novaCesta })
    console.log('ok produto encestado!!')
    //   localStorage.setItem("Cesta-De-Produtos", JSON.stringify(novaCesta));
  }
  removeDoCarrinho = id => {
    // tentativa de apagar carrinho

    const novaCesta = this.state.cestaDeProdutos.filter(nome => {
      return id !== nome.id
    })

    this.setState({ cestaDeProdutos: novaCesta })
  }

  render() {
    // filtros e map

    return (
  <ContainerGeral>
    <Main>
      <div>SpaceShop</div>
      <Menus>
      <div>Athos</div>
      <div>Rafael</div>
      <div>Ricardo</div>
      </Menus>
    </Main>
        <AppCont>
          <Left>
            <Filtro />
          </Left>
          <Middle>
            <Produtos />
          </Middle>
          <Right>
            <Carrinho />
          </Right>
        </AppCont>
        <Rodape>
        © #Joy - 2021 - 2022 - Labenu
        </Rodape>
  </ContainerGeral>
    )
  }
}
export default App
