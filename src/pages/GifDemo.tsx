import * as React from 'react';
import {useAsync} from "react-async-hook";
import {useParams} from 'react-router-dom';

import {GiphyFetch} from "@giphy/js-fetch-api";
import {IGif} from "@giphy/js-types";
import {Gif} from "@giphy/react-components";

import {Container} from '../styles';

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

export const GifDemo: React.FunctionComponent<{}> = () => {
  const [gif, setGif] = React.useState<IGif | null>(null);
  const {id} = useParams<{id: string}>();

  useAsync(async () => {
    const {data} = await giphyFetch.gif(id);
    setGif(data);
  }, []);

  return (
    <Container>
      {gif && (
        <Gif gif={gif} width={450} />
      )}
    </Container>
  );
};
