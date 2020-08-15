import * as React from 'react'
import { Photo } from '../interfaces'
import styled from "styled-components"
import {useRecoilValue} from 'recoil'
import {photoListState} from '../recoil/state'
import PhotoListItem from './PhotoListItem'

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
          {photoList.map((item: Photo, index: number) => {
            return <PhotoListItem key={index} photo={item}/>
          })}
    </PhotoListStyled>)
}

export default PhotoList
