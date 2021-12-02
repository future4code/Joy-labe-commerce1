import styled from "styled-components";

export const ContainerGeral = styled.div`
  display:flex;
  flex-direction: column;
  Height: 100%;
`
export const Main = styled.div`
  display:flex;
  Height: 50px;
  flex-grow: 1;
  justify-content: space-between;
  background-color: DeepSkyBlue;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
`
export const Menus = styled.div`
display:flex;
width: 300px;
background-color: red;
padding: 10px;
justify-content: space-between;
`

export const Left = styled.div`
  width: 80%;
`
export const Middle = styled.div`
flex-grow: 1;
width: 100%;
`
export const Right = styled.div`
width: 80%;
`
export const AppCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;

export const Rodape = styled.div`
display:flex;
position: relative;
height: 40px;
width: 100%;
flex-grow: 1;
flex-direction: row;
justify-content: center;
background-color: DeepSkyBlue;
`