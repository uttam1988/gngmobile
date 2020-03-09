import React from 'react';
import { Image } from "react-native"
import styled from 'styled-components';

const Promo = ({
    bannerImage,
    height,
}) => {
    return (
        <ContainerView>
            <Image
                source={{ uri: bannerImage }}
                style={{width: '100%', height: height}}
            />
        </ContainerView>
    )
}

export default Promo;

const ContainerView = styled.View`
    display: flex;
    width: 100%;
    margin-bottom: 8px;
`;


