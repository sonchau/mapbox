import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import styled from "styled-components";
import {
  RecoilRoot
} from 'recoil';
type Props = {
  children?: ReactNode
  title?: string
}

const LayoutStyled = styled.div`
  display: grid;
  //grid-template-rows: 10rem minmax(min-content, 80vh) 6rem;
  grid-template-rows: auto minmax(70vh, 1fr) auto;
`;

const Layout:React.FC<Props> = ({ children, title = 'This is the default title' }: Props) => (
  <RecoilRoot>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <LayoutStyled>
      <Header headerText="Map Box experiment" /> 
      {children}
      <Footer footerText="Copyright 2020 by Son Chau" />
    </LayoutStyled>
  </RecoilRoot>
)

export default Layout
