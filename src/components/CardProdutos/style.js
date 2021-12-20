import styled from 'styled-components';

export const ProdutoContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-self: center;
  
`;

export const ItensProduto = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
 p {
    margin: 4px 0;
  }
`
export const PhotoProduto = styled.img`
  width: 100%;
`
export const CardDoBotao = styled.button`
  align-self: center;
  margin-top: 4px;
  cursor:pointer;
`
