import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

const GroupCard = props => {
    return (
        <View
            style={{
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 5,
                marginBottom: 15,
            }}
        >
            <GroupCardView shadow={props.shadow} bgColor={props.bgColor}>
                <CardTitle>{props.title}</CardTitle>
                <Separator />
                <CardRow>
                    {props.children}
                </CardRow>
            </GroupCardView>
        </View>
    )
}

export default GroupCard;


const GroupCardView = styled.View`
    display: flex;
    width: 100%;
    background-color: ${props => props.bgColor ? props.bgColor : 'transparent'};
    border-radius: 6px;
    padding: 10px;
    elevation: ${props => props.shadow ? props.shadow : 0}
`;

const CardRow = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const CardTitle = styled.Text`
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    display: flex;
    align-items: center;
    color: #424B58;
    letter-spacing: 2;
`;

const Separator = styled.View`
    border: 2px solid #424B58;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    padding: 0 0 8px 0;
    margin-bottom: 8px;
    width: 50px;
    display: flex;
    flex-direction: row;
    align-self: center;
`;


