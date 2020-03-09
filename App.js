import React from 'react';
import { ScrollView, Platform, StatusBar } from "react-native";
import styled from 'styled-components';

import Header from "./shared/Header";
import Search from "./components/Search";
import Promo from "./components/Promo";
import GroupCard from "./components/GroupCard";
import SingleCard from "./components/SingleCard";

export default function App() {
  return (
    <RootView>
      <Header />
      <ScrollView>
        <ContainerView>
          <Search />
          <Promo bannerImage="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/January2020/SVD/Coop_Banner/household_upto40750x375._CB427639096_.jpg" height={200}/>
          <GroupCard title="Categories">
            <SingleCard image="holi-promo-gng.jpg" name="Fruits" />
            <SingleCard image="holi-promo-gng.jpg" name="Vegies" />
            <SingleCard image="holi-promo-gng.jpg" name="Groceries" />
            <SingleCard image="holi-promo-gng.jpg" name="Personal Care" />
          </GroupCard>
          <GroupCard title="Shop By Offers" bgColor="#fff" shadow="5">
            <SingleCard name="Oil" offer="Up to 15% off" />
            <SingleCard name="Oil" offer="Up to 15% off" />
            <SingleCard name="Oil" offer="Up to 15% off" />
            <SingleCard name="Oil" offer="Up to 15% off" />
          </GroupCard>
          <GroupCard title="Fruits & Vegetables">
            <SingleCard image="holi-promo-gng.jpg" name="Fruits" />
            <SingleCard image="holi-promo-gng.jpg" name="Fruits" />
            <SingleCard image="holi-promo-gng.jpg" name="Fruits" />
            <SingleCard image="holi-promo-gng.jpg" name="Fruits" />
            <SingleCard image="holi-promo-gng.jpg" name="Fruits" />
          </GroupCard>
          <Promo bannerImage="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/ITC/New/750x375.jpg" height={100}/>
          <Promo bannerImage="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/MARCH_2020/BAU_COOP/HUL_BAU_750X350._CB1198675309_.jpg" height={200}/>
        </ContainerView>
      </ScrollView>
    </RootView>
  );
}

const RootView = styled.View`
    flex: 1;
    background-color: #EEF2F5;
    padding-bottom: 40px;
    margin-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}
`;

const ContainerView = styled.View`
  padding: 15px;
`;

