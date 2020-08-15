import React, {useState} from 'react'
import styled from "styled-components"
import {fetchPhotos} from '../api/flickr'
import {
  useSetRecoilState
} from 'recoil';

import {photoListState} from '../recoil/state';

const SearchFormStyled = styled.div`
    flex: 0 0 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
`;

const SearchInputStyled = styled.input`
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: #f4f2f2;
    border: none;
    padding: .7rem 2rem;
    border-radius: 100px;
    width: 90%;
    transition: all .2s;
    height: 4rem;
    line-height: 4rem;
    margin-right: -3.25rem;
    &:focus {
        outline: none;
      width: 100%;
      background-color: #f0eeee;
    }
    &::-webkit-input-placeholder {
        font-weight: 100;
        color: #ccc; 
    }
`;

const SearchHeadingStyled = styled.h2`
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
    padding: 2rem;
`;

const SearchIcon = styled.img`
    height: 2rem;
    width: 2rem;
    fill: #999; 
`;

const SearchButton = styled.button`
    border: none;
    background-color: #f4f2f2;
    .&:focus {
        outline: none; 
    }
    &:active {
        transform: translateY(2px); 
    }
`;

const SearchForm:React.FC = () => {
  const [tags, setTags] = useState('')
  const setPhotoList = useSetRecoilState(photoListState);
  const onTagsChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value)
    const data = await fetchPhotos(e.target.value)
    setPhotoList(data);
}
  return (
    <>
    <SearchHeadingStyled>Please enter tag to search</SearchHeadingStyled>
    <SearchFormStyled>
      <SearchInputStyled
          type="text"
          placeholder="Tags"
          value={tags}
          onChange={onTagsChange}
      />
      <SearchButton>
          <SearchIcon src="/search.png" alt="search" />
      </SearchButton>
  </SearchFormStyled>
  </>
  )
}

export default SearchForm
