import React from 'react';
import { Entypo, EvilIcons, Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';

const Header = () => {
    return (
        <ContainerView>
            <HeaderMenu>
                <Entypo name="menu" size={32} color="#FFFFFF" />
            </HeaderMenu>
            <HeaderTitle>GNG</HeaderTitle>
            <HeaderActionButtons>
                <Ionicons name="md-cart" size={28} color="#FFFFFF" style={{ marginRight: 8 }}/>
                <EvilIcons name="user" size={36} color="#FFFFFF" />
            </HeaderActionButtons>
        </ContainerView>
    )
}

export default Header;

const ContainerView = styled.View`
    background-color: #2B2C32;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    position: relative;
`;

const HeaderTitle = styled.Text`
    color: #FFFFFF;
    font-size: 24px;
    font-weight: bold;
    flex: 1;
    text-align: center;
    margin-left: 20px;
`;

const HeaderMenu = styled.View``;

const HeaderActionButtons = styled.View`
    display: flex;
    flex-direction: row;
`;
