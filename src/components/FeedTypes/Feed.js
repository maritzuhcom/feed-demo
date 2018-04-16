import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Image, Button, Label, Divider } from 'semantic-ui-react';

const Video = ({
  subscribers, name, title, estimated_subscribers_30_days, thumbnail, message,
}) => (
  <Card raised className="medium">
    <Flex>
      <Col jContent="space-around">
        <Col>
          <Header>{title}</Header>
          <Text>
            {name}
          </Text>

          <Divider />

          <div>
            <Label color="blue" horizontal>Sub in May</Label>
            <Text color="black" weight="600">{estimated_subscribers_30_days} </Text>
          </div>

          <Text color="black">
            {message}
          </Text>
        </Col>

        <Button as="div" labelPosition="right">
          <Button icon>
            Sub Count
          </Button>
          <Label basic>{subscribers}</Label>
        </Button>
      </Col>

      <Image size="large" src={thumbnail} />
    </Flex>
  </Card>
);

Video.propTypes = {
  subscribers: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
  estimated_subscribers_30_days: PropTypes.number,
  thumbnail: PropTypes.string,
  message: PropTypes.string,
};

Video.defaultProps = {
  subscribers: 0,
  name: '',
  title: '',
  estimated_subscribers_30_days: 0,
  thumbnail: '',
  message: '',
};

export default Video;

const Text = styled.span`
  font-weight: ${props => props.weight || '400'};
  color: ${props => props.color || 'rgb(153, 153, 153)'};
`;

const Flex = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1em;

  &&& > * {
    width: 50%;
  }
`;

const Col = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: ${props => props.jContent || 'flex-start'}
`;

const Header = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
