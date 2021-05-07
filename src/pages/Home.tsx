import * as React from 'react';
import styled from 'styled-components';

import {SearchForm} from '../components';
import {Container} from '../styles';

export const Home: React.FunctionComponent<{}> = () => {
  return (
    <Container>
      <SearchForm />
    </Container>
  );
};
