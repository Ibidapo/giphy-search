import * as React from 'react';
import {useHistory} from 'react-router-dom';

import {GiphyFetch} from '@giphy/js-fetch-api';
import {Carousel} from '@giphy/react-components';

import {CarouselWrapper, NoResultWrapper} from '../styles';

const giphyFetch = new GiphyFetch('sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh');

const LIMIT = 10;

export const GifCarousel: React.FunctionComponent<{search: string}> = ({search}) =>  {
  let history = useHistory();

  const fetchGifs = (offset: number) => giphyFetch.search(search, { offset, limit: LIMIT });

  const displayGif = (id: string | number) => history.push(`/gif/${id}`);

  return (
    <CarouselWrapper data-testid="carousel">
      <Carousel
        key={search}
        fetchGifs={fetchGifs}
        gifHeight={200} 
        gutter={6}
        onGifClick={(gif, event) => {
          event.preventDefault();
          displayGif(gif.id);
        }}
        noResultsMessage={search && <NoResultWrapper>We couldn't find a gif for **{search}** 😔</NoResultWrapper>}
      />
    </CarouselWrapper>
  );
};
