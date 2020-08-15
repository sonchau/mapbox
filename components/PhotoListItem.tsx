import * as React from 'react'
import { Photo } from '../interfaces'
import styled from "styled-components";

const ItemStyled = styled.li`
   padding: 1rem;
   background: #f9f7f6;
   border-radius: 1rem;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   transition: transform .3s;
   overflow: hidden;
   &:hover {
    transform: translateY(-1rem) scale(1.03); 
    }
`;
const ImageStyled = styled.img`
    width: 100%;
    height: auto;
    padding-bottom: 1rem;
`;
const ContentStyled = styled.p`
    font-size: 1.5rem;
    font-family: "Josefin Sans", sans-serif;
    margin: 0 1rem 0.5rem;
    color: #c69963;
`;

type Props = {
  photo: Photo
}

const PhotoListItem:React.FC<Props> = ({ photo }) => {
  return  (
    <ItemStyled>
        <a target="_blank" rel="noopener noreferrer" href={photo.link} title={photo.title}>
            <ImageStyled src={photo.media.m} alt={photo.title}/>
        </a>
        <ContentStyled><strong>Title:</strong> {photo.title}</ContentStyled> 
        <ContentStyled><strong>Author:</strong> {photo.author.split('"')[1]}</ContentStyled>
        <ContentStyled><strong>Tags:</strong> {photo.tags}</ContentStyled>  
    </ItemStyled>
    )
}

export default PhotoListItem
