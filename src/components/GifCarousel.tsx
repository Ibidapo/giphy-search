import {GiphyFetch} from "@giphy/js-fetch-api";
import {Carousel} from "@giphy/react-components";
import * as React from 'react';
import {useHistory} from "react-router-dom";

import {Wrapper} from '../styles';

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

const LIMIT = 10;

export const GifCarousel: React.FunctionComponent<{search: string}> = ({search}) =>  {
  let history = useHistory();

  const fetchGifs = (offset: number) => giphyFetch.search(search, { offset, limit: LIMIT });

  const demoGif = (id: string | number) => history.push(`/gif/${id}`);

  return (
    <Wrapper>
      <Carousel
        key={search}
        fetchGifs={fetchGifs}
        gifHeight={200} 
        gutter={6}
        onGifClick={(gif, event) => {
          event.preventDefault();
          demoGif(gif.id);
        }}
      />
    </Wrapper>
  );
};
