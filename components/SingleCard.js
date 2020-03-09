import React from 'react';
import { Text, View } from "react-native"
import styled from 'styled-components';

const renderCard = props => {
    return (
        <SingleCardView>
            <ItemImage
                source={require('../assets/fruits-veggies.png')}
                style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
            />

            <Text style={{ color: '#444', letterSpacing: 1, fontSize: 18, fontWeight: 'bold' }}>
                {props.name}
            </Text>
        </SingleCardView>
    )
}

const renderOffer = props => {
    return (
        <SingleOfferCardView>
            <Text style={{ color: '#FFF', marginBottom: 10, letterSpacing: 1, fontSize: 22, fontWeight: 'bold' }}>
                {props.name}
            </Text>
            <Text style={{ color: '#fff', padding: 5, borderRadius: 6, backgroundColor: '#F68E4F', marginBottom: 10, letterSpacing: 1, fontSize: 18, fontWeight: 'bold' }}>
                {props.offer}
            </Text>
            <ItemImage
                source={require('../assets/sunflower-oil.jpg')}
                style={{ width: 100, height: 100, borderWidth: 0 }}
            />
        </SingleOfferCardView>
    )
}

const SingleCard = props => {
    return (
        <MainView>
            {
                props.offer ? renderOffer(props) : renderCard(props)
            }
        </MainView>
    )
}

export default SingleCard;

const MainView = styled.View`
    display: flex;
    align-items: center;
    align-self: center;
    flex-basis: 49%;
`;

const SingleCardView = styled.View`
    flex-basis: 49%;
    padding: 10px 0;
    margin-bottom: 8px;
    text-align: center;
    display: flex;
    align-items: center;
    align-self: center;
`;

const SingleOfferCardView = styled.View`
    flex-basis: 48%;
    padding: 10px;
    margin-bottom: 8px;
    align-self: center;
    text-align: center;
    display: flex;
    align-items: center;
    background-color: #33C4B3;
`;


const ItemImage = styled.Image`
    border: 3px solid #fff;
`;



