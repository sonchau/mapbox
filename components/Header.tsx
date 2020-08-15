import * as React from 'react'
import styled from "styled-components"

const HeaderStyled = styled.header`
  font-size: 3.5em;
  padding: 3rem;
  text-align: center;
  background: #101d2c;
  color: #fff;
`;

type Props = {
  headerText: String
}

const Header:React.FC<Props> = ({ headerText }: Props) => (
  <HeaderStyled>
    <p>{headerText}</p>
  </HeaderStyled>
)

export default Header
