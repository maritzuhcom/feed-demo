/*
{
  "entity_type": "video",
  "category": "feed",
  "name": "Collective",
  "cms": "Collective",
  "type": "trending-video",
  "thumb_url_default": "https://i.ytimg.com/vi/mvUwLmOoTrA/default.jpg",
  "title": "Game Theory: Did I Find Fortnite's SECRET Lore (Fortnite Battle Royale)",
  "channel_id": "UCo_IB5145EVNcf8hw1Kku7w",
  "thumbnail": "https://i.ytimg.com/vi/mvUwLmOoTrA/default.jpg",
  "id": "mvUwLmOoTrA",
  "channel_title": "The Game Theorists",
  "entity_id": "mvUwLmOoTrA",
  "domain": "yt",
  "message": "The Game Theorists' video \"Game Theory: Did I Find Fortnite's SECRET"
}
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Image, Label } from 'semantic-ui-react';

const Video = ({
  message, thumbnail, channel_title, title,
}) => (
  <Card>
    <Flex>
      <Card.Content>
        <Header>{title}</Header>

        <Card.Meta>
          <Text>
            {channel_title}
          </Text>
        </Card.Meta>

        <Card.Description>
          {message}
        </Card.Description>

        <Label color="red" horizontal>Trending</Label>
      </Card.Content>

      <Image size="large" src={thumbnail} />
    </Flex>
  </Card>
);

Video.propTypes = {
  message: PropTypes.string,
  thumbnail: PropTypes.string,
  channel_title: PropTypes.string,
  title: PropTypes.string,
};

Video.defaultProps = {
  message: '',
  thumbnail: '',
  channel_title: '',
  title: '',
};

export default Video;

const Text = styled.span`
  font-size:
  font-weight: 400;
  color: rgb(153, 153, 153)
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1em;

  &&& > * {
    width: 50%;
  }
`;

const Header = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
