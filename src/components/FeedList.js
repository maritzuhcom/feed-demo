import React, { Component } from 'react';
import styled from 'styled-components';

import Feed from './FeedTypes/Feed';
import FeedUpdate from './FeedTypes/FeedUpdate';
import MessageThumbNail from './FeedTypes/MessageThumbNail';
import Video from './FeedTypes/Video';
import newsJSON from '../assets/newsFeed.json';

const FEED = 'FEED';
const FEED_UPDATE = 'FEED_UPDATE';
const MESSAGE_THUMBNAIL = 'MESSAGE_THUMBNAIL';
const VIDEO = 'VIDEO';

export default class FeedList extends Component {
  getItemCatagory = (item) => {
    if (item.type.split('-')[1] === 'subs') {
      return FEED;
    }

    if (item.type.split('-')[1] === 'trend') {
      return FEED_UPDATE;
    }

    if (item.type.includes('video-') || item.type.includes('channel-')) {
      return MESSAGE_THUMBNAIL;
    }

    if (item.entity_type === 'video') {
      return VIDEO;
    }

    return 'unknown';
  }

  renderTypes = () => newsJSON.items.map((item) => {
    switch (this.getItemCatagory(item)) {
      case FEED: {
        return <Feed {...item} key={item.id || (Date.now() * Math.random())} />;
      }
      case FEED_UPDATE: {
        return <FeedUpdate {...item} key={item.id || (Date.now() * Math.random())} />;
      }
      case MESSAGE_THUMBNAIL: {
        return <MessageThumbNail {...item} key={item.id || (Date.now() * Math.random())} />;
      }
      case VIDEO: {
        return <Video {...item} key={item.id || (Date.now() * Math.random())} />;
      }
      default: {
        return <div key={Date.now()}>unknown!</div>;
      }
    }
  });

  render() {
    return (
      <Main>
        {this.renderTypes()}
      </Main>
    );
  }
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding: 1.5em 0;
`;
