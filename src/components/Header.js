import React from 'react';
import styled from 'styled-components';
import { Image, Icon } from 'semantic-ui-react';
import colors from '../Colors';
import studio71 from '../assets/logo-1.png';

const AppHeader = () => (
  <HeaderWrapper>
    <ImageWrapper>
      <Image src={studio71} size="small" />
    </ImageWrapper>

    <IconWrapper>
      <Icon name="comment outline" size="large" inverted />
      <Icon name="terminal" size="large" inverted />
      <Icon name="lab" size="large" inverted />
    </IconWrapper>
  </HeaderWrapper>
);

export default AppHeader;

const HeaderWrapper = styled.main`
  width: 100%;
  height: 4em;
  background-color: ${colors.heading};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;
`;

const ImageWrapper = styled.div`
  height: 2em;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 10em;
  padding-right: 1em;

  & > * {
    padding-left: 2.5em;
    cursor: pointer;
  }
`;
