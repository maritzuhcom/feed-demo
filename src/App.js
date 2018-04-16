import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

import AppHeader from './components/Header';
import SideNav from './components/SideNav';
import FeedList from './components/FeedList';

const App = () => (
  <AppContainer id="app">
    <AppHeader />
    <Body>
      <SideNav />

      <FeedContent>
        <Header as="h1">Feed</Header>
        <FeedList />
      </FeedContent>
    </Body>
  </AppContainer>
);

export default App;

const AppContainer = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
`;

const FeedContent = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  box-sizing: border-box;
`;
