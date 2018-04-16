import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import Colors from '../Colors';

const SideNav = () => (
  <Nav>
    <Button active icon>
      <Icon name="feed" />
    </Button>

    <Button icon>
      <Icon name="world" />
    </Button>

    <Button icon>
      <Icon name="settings" />
    </Button>

    <Button icon>
      <Icon name="comment" />
    </Button>
  </Nav>
);

const Nav = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 5em;
  background-color: ${Colors.secondaryBack};
  padding: 1em 0;
  flex-shrink: 0;
`;

export default SideNav;
