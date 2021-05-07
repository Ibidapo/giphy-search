import * as React from 'react';
import styled from 'styled-components';

import {ListItem, SearchForm} from '../components';
import {Container} from '../styles';

const GIFS = [
  {
    title: "neko waving GIF by Anthony Antonellis",
    username: "Anthony Antonellis",
    images: {
      original: {
      url: "https://media2.giphy.com/media/l2YOwcBh7gnJRsWDm/giphy.gif",
      },
    },
  },
  {
    title: "neko waving GIF by Anthony Antonellis",
    username: "Anthony Antonellis",
    images: {
      original: {
      url: "https://media2.giphy.com/media/l2YOwcBh7gnJRsWDm/giphy.gif",
      },
    },
  },{
    title: "neko waving GIF by Anthony Antonellis",
    username: "Anthony Antonellis",
    images: {
      original: {
      url: "https://media2.giphy.com/media/l2YOwcBh7gnJRsWDm/giphy.gif",
      },
    },
  },
  {
    title: "neko waving GIF by Anthony Antonellis",
    username: "Anthony Antonellis",
    images: {
      original: {
      url: "https://media2.giphy.com/media/l2YOwcBh7gnJRsWDm/giphy.gif",
      },
    },
  },
  {
    title: "neko waving GIF by Anthony Antonellis",
    username: "Anthony Antonellis",
    images: {
      original: {
      url: "https://media2.giphy.com/media/l2YOwcBh7gnJRsWDm/giphy.gif",
      },
    },
  },
  {
    title: "neko waving GIF by Anthony Antonellis",
    username: "Anthony Antonellis",
    images: {
      original: {
      url: "https://media2.giphy.com/media/l2YOwcBh7gnJRsWDm/giphy.gif",
      },
    },
  },
];

export const Home: React.FunctionComponent<{}> = () => {
  return (
    <Container>
      <SearchForm />
      <ListItem items={GIFS} />
    </Container>
  );
};
