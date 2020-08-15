import * as React from 'react'
//import { Photo } from '../interfaces'
import styled from "styled-components"
import {useRecoilValue} from 'recoil'
import {photoListState} from '../recoil/state'
//import PhotoListItem from './PhotoListItem'
import Link from 'next/link'
const PhotoListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 3rem;
  list-style: none;
`;


const PhotoList:React.FC = () => {
  const photoList = useRecoilValue(photoListState);
  //console.log('photoList state', photoList)
  return (<PhotoListStyled>
          <p>Please select the following files to view map</p>
          <Link href="/basic">
            <a>Basic Map</a>
          </Link>
    </PhotoListStyled>)
}

export default PhotoList
