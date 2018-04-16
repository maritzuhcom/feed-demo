/*
{
  "type": "stats-trend",
  "category": "feed",
  "entity_type": "feed",
  "entity_id": "UCbkMvtBNkpIbHqQdKHJSb5A",
  "channel_id": "UCbkMvtBNkpIbHqQdKHJSb5A",
  "domain": "yt",
  "message": "GhostNinja has seen a 69.7% increase in 30 day views over the last month!"
},
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Card, Label } from 'semantic-ui-react';
import styled from 'styled-components';

const FeedUpdate = ({ message }) => (
  <Card>
    <Flex>
      <Label circular color="green" empty />
      <Text>{message}</Text>
    </Flex>
  </Card>
);

FeedUpdate.propTypes = {
  message: PropTypes.string,
};

FeedUpdate.defaultProps = {
  message: '',
};

export default FeedUpdate;

const Text = styled.span`
  font-size: 12px
  font-weight: 400;
  color: rgb(153, 153, 153)
`;

const Flex = styled.span`
  display: flex;
  width: 100%;
  padding: 0 1em;
  align-items: center;
`;
