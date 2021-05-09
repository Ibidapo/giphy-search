import {render} from '@testing-library/react';

import {GifCarousel} from '../components';

it('renders correctly', () => {
  const {queryByTestId} = render(<GifCarousel search="test" />);
  expect(queryByTestId('carousel')).toBeTruthy();
});
