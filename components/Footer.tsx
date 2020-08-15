import * as React from 'react'
import styled from "styled-components"

const FooterStyled = styled.footer`
    font-size: 1.5em;
    padding: 2rem;
    text-align: center;
    background: #101d2c;
    color: #fff;
`;

const NavStyled = styled.nav`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 2rem;
    align-items: center; 
    a {
        font-size: 1.4rem;
        color: #fff;
        text-decoration: none;
        font-family: "Josefin Sans", sans-serif;
        text-transform: uppercase;
        text-align: center;
        padding: 1.5rem;
        display: block;
        transition: all .2s;
        &:hover,
        &:active {
            background-color: rgba(255, 255, 255, 0.05);
            transform: translateY(-3px); 
        }
    }
`;

type Props = {
  footerText: String
}

const Footer:React.FC<Props> = ({footerText}: Props) => (
  <FooterStyled>
      <NavStyled>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sonchau/mapbox">Repos</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sonnchau/">Linkedin</a></li>
      </NavStyled>
      <p>&copy; {footerText}.</p>
  </FooterStyled>
)
export default Footer
