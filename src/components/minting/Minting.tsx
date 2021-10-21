import React from 'react';
import { Minting } from './../../common/resource';
import CardList from './CardList';
import styled from 'styled-components';

export default function minting() {
    return (
        <>
            <MintingTitle>{Minting.Title}</MintingTitle>
            <MintingSubtitle>{Minting.Subtitle}</MintingSubtitle>
            <CardList />
        </>
    );
}

const MintingTitle = styled.h1`
    color: blue;
    text-align: center;
`

const MintingSubtitle = styled.h2`
    color: grey;
    text-align: center;
`