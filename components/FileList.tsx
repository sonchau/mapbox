import * as React from 'react'
//import { Photo } from '../interfaces'
import styled from "styled-components"
// import {useRecoilValue} from 'recoil'
// import {photoListState} from '../recoil/state'
//import PhotoListItem from './PhotoListItem'
import Link from 'next/link'

const Heading = styled.h1`

  text-align: center;
  margin-bottom: 3rem;
  font-size: 3rem;

`
const ListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 3rem;
  list-style: none;
  font-size: 1.6rem;

`;

const ListItemStyled = styled.li`
   padding: 1rem;
   background: #f9f7f6;
   border-radius: 1rem;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   transition: transform .3s;
   overflow: hidden;
   text-align: center;
   cursor: pointer;
   &:hover {
    transform: translateY(-1rem) scale(1.03); 
    }
  a {
    text-decoration: none;

  }  
`;

const PhotoList:React.FC = () => {
  return (
    <>
      <Heading>Please select the following files to view map</Heading>
      <ListStyled>
        <Link href="/basic">
          <ListItemStyled>
          <a>Basic Map</a>
          </ListItemStyled>
        </Link>
        <Link href="/control">
          <ListItemStyled>
            <a>Control Map</a>
            </ListItemStyled>
        </Link>
      <Link href="/layers">
        <ListItemStyled>
          <a>Map Layers</a>
        </ListItemStyled>
      </Link>
      <Link href="/zoom-to-bounds">
      <ListItemStyled>
        <a>Zoom to bounds</a>
        </ListItemStyled>
      </Link>
          
      </ListStyled>
    </>
)
}

export default PhotoList
