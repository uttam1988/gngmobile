import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components';

const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    return (
        <ContainerView>
            <SearchField
                placeholder="Search"
                onChangeText={(text) => setSearchValue({ text })}
                value={searchValue}
            />
            <FloatingView>
                <FontAwesome name="search" size={24} color="#424B58" />
            </FloatingView>

        </ContainerView>
    )
}

export default Search;

const ContainerView = styled.View`
    display: flex;
`;

const SearchField = styled.TextInput`
	width: 100%;
	padding: 8px;
    border: 1px solid #AFB7C2;
    background-color: #ffffff;
    color: #AFB7C2;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
    border-radius: 4px;
    position: relative;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const FloatingView = styled.View`
    position: absolute;
    right: 10px;
    top: 10px;
`;
