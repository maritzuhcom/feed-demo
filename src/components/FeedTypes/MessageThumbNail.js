/*
{
  "type": "channel-new",
  "category": "feed",
  "entity_type": "feed",
  "domain": "yt",
  "entity_id": "UCkTuHGnsVtES9MowBeKykvw",
  "thumbnail": "https://yt3.ggpht.com/-ltwnP3_K2p0/AAAAAAAAAAI/AAAAAAAAAAA/6iKq5MkVohA/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
  "message": "lindseyremvlogs ( 42.1K subscribers ) joined the network on March 20th."
}
*/

/*
{
  "type": "video-topics",
  "category": "feed",
  "link": "#",
  "thumbnail": "https://s3.amazonaws.com/assets.studio71.io/img/s71_logo512.png",
  "message": "\"Dragons\" is a topic in 1.6% of the network's"
}
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const MessageThumbNail = ({ thumbnail, message }) => (
  <Card>
    <Card.Content>
      <FlexRow>
        <Header as="h3">{message}</Header>
        <Image src={thumbnail} size="small" />
      </FlexRow>
    </Card.Content>
  </Card>
);

MessageThumbNail.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default MessageThumbNail;

const FlexRow = styled.section`
  display: flex;
  flex-dorection: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  padding: 1em;

  && > * {
    height: 100%;
    width: 100%;
  }
`;
