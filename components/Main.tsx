import * as React from 'react'
import styled from "styled-components"
//import SeachForm from './SearchForm'
import FileList from './FileList'

const MainStyled = styled.main`
  padding: 2rem;
`;

const Main:React.FC = () => (
  <MainStyled>

    <FileList />
  </MainStyled>
)

export default Main
