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
    valorMaximo: "",
    valorMinimo: "",
    buscaPorNome: "",
    naves: [
      {
        "id": 1,
        "nome": "Falcon 9",
        "preco": 100.00,
        "imagem": "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/33477_5F4E8D17CA9A2B02-1.jpg?w=876&h=484&crop=1"
      },
      {
        "id": 2,
        "nome": "Samu´s",
        "preco": 200.00,
        "imagem": "https://static.wikia.nocookie.net/metroid/images/5/53/Mp2gunship.jpg"
      },
      {
        "id": 3,
        "nome": "Super Heavy",
        "preco": 300.00,
        "imagem": "https://st.depositphotos.com/1206476/2515/i/950/depositphotos_25156861-stock-photo-flying-rocket.jpg"
      },
      {
        "id": 4,
        "nome": "Blue Origin",
        "preco": 400.00,
        "imagem": "https://adrenaline.com.br/uploads/chamadas/fogueteamazon_chamada.jpg"
      },
      {
        "id": 5,
        "nome": "SpaceX SN15",
        "preco": 350.00,
        "imagem": "https://images0.persgroep.net/rcs/iQ-wm0KvI0BdxenC8Dio3E7BcB0/diocontent/158380378/_focus/0.63/0.45/_fill/1200/630/?appId=21791a8992982cd8da851550a453bd7f&quality=0.7"
      },
      {
        "id": 6,
        "nome": "Saturn V",
        "preco": 150.00,
        "imagem": "https://static.turbosquid.com/Preview/2016/02/06__10_39_05/SaturnApollocontextimage1480x800.jpgac8bfef3-b932-4c95-ae1b-947e21094b4dDefaultHQ.jpg"
      }
    ],
    parametroOrdenacao: "crescente",
    ordem: 1
  }

  atualizaBuscaPorNome = (bn) => {
    this.setState({
      buscaPorNome: bn.target.value
    })
  }

  atualizaValorMinimo = (vm) => {
    this.setState({
      valorMinimo: vm.target.value
    })
  }

  atualizaValorMaximo = (vma) => {
    this.setState({
      valorMaximo: vma.target.value
    })
  }

  atualizaParametroOrdenacao = (po) => {
    this.setState({
      parametroOrdenacao: po.target.value
    })
  }

  atualizaOrdem = (ao) => {
    this.setState({
      ordem: ao.target.value
    })
  }

   componentDidUpdate(prevProps, prevState) {
    if (prevState.naves !== this.state.naves)
      localStorage.setItem("cesta", this.state.naves)
    console.log("cestaDeProdutos salva")

    if (prevState.filtro !== this.state.naves)
      localStorage.setItem("naves-filtro", this.state.naves)
    console.log("status naves")

    if (prevState.naves !== this.state.naves)
      localStorage.setItem("naves-id", this.state.naves.id)
    console.log("array")

    if (prevState.naves !== this.state.naves)
      localStorage.setItem("naves-nome", this.state.naves.nome)
    console.log("array")

    if (prevState.naves !== this.state.naves)
      localStorage.setItem("naves-preco", this.state.naves.preco)
    console.log("array")
  };

  // //enviar JSON quando adicionar carrinho
  componentDidMount() {
  //  this.adicionaAoCarrinho();
    const idLS = localStorage.getItem("id") || "";
    const nomeLS = localStorage.getItem("nome") || "";
    const precoLS = localStorage.getItem("preco") || "";
    this.setState({ id: idLS, nome: nomeLS, preco: precoLS });
  }

  adicionaAoCarrinho = (props) => {
    const AdicionaNave = {
      id: this.state.naves,
      nome: this.state.naves,
      preco: this.state.naves
    }
    const novasNaves = [...this.state.naves, AdicionaNave]
    this.setState({ naves: novasNaves })
    console.log('ok produto encestado!!')
      localStorage.setItem("Lista-Foguetes", JSON.stringify(novasNaves));
  }
  removeDoCarrinho = id => {
    // tentativa de apagar carrinho

    const novasNaves = this.state.naves.filter(nome => {
      return id !== nome.id
    })

    this.setState({ naves: novasNaves })
  }


  render() {
    // filtros e map

    const listaFiltrada = this.state.naves
      .filter(nave => {
        return nave.nome.toLowerCase().includes(this.state.buscaPorNome.toLowerCase())
      })
      .filter(nave => {
        return this.state.valorMinimo === "" || nave.preco >= this.state.valorMinimo
      })
      .filter(nave => {
        return this.state.valorMaximo === "" || nave.preco <= this.state.valorMaximo
      })
      .sort((naveAtual, proximaNave) => {
        switch (this.state.parametroOrdenacao) {
          case "nome":
            return this.state.ordem * naveAtual.nome.localeCompare(proximaNave.nome)
          default:
            return this.state.ordem * (naveAtual.preco - proximaNave.preco)
        }
      })


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
            <Filtro
              buscaPorNome={this.state.buscaPorNome}
              atualizaBuscaPorNome={this.atualizaBuscaPorNome}
              atualizaValorMinimo={this.atualizaValorMinimo}
              atualizaValorMaximo={this.atualizaValorMaximo}
              atualizaParametroOrdenacao={this.atualizaParametroOrdenacao}
              atualizaOrdem={this.atualizaOrdem}
              valorMinimo={this.state.valorMinimo}
              valorMaximo={this.state.valorMaximo}
              parametroOrdenacao={this.state.parametroOrdenacao}
              ordem={this.state.ordem}

            />


          </Left>
          <Middle>
            <Produtos
              listaFiltrada={listaFiltrada}
            />
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
