import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {setSearch} from '../actions';
import {GifCarousel, SearchForm} from '../components';
import {SearchState} from '../reducers';
import {Container} from '../styles';

export const Home: React.FunctionComponent<{}> = () => {
  const search = useSelector<SearchState, string>((state) => state.search);
  const dispatch = useDispatch();

  const onSearch = (search: string) => {
    dispatch(setSearch(search));
  };

  return (
    <Container>
      <SearchForm onSearch={onSearch} />
      <GifCarousel search={search} />
    </Container>
  );
};
