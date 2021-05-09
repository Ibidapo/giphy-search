import {fireEvent, render} from '@testing-library/react';

import {GifSearchForm} from '../components';

const onSearch = jest.fn();

it('renders correctly', () => {
  const {queryByTestId, queryByPlaceholderText} = render(<GifSearchForm onSearch={onSearch}/>);

  expect(queryByTestId('search-button')).toBeTruthy();
  expect(queryByPlaceholderText('Search Giphy')).toBeTruthy();
});

describe('SearchInput value', () => {
  it('updates on change', () => {
    const {queryByPlaceholderText} = render(<GifSearchForm onSearch={onSearch}/>);

    const SearchInput = queryByPlaceholderText('Search Giphy') as HTMLInputElement;

    fireEvent.change(SearchInput, {target: {value: 'test'}});

    expect(SearchInput.value).toBe('test');
  });
});

describe('SearchButton click', () => {
  describe('with empty query', () => {
    it('does not trigger onSearch function and displays error message', () => {
      const {queryByTestId} = render(<GifSearchForm onSearch={onSearch}/>);
  
      const SearchButton = queryByTestId('search-button') as HTMLButtonElement;
  
      fireEvent.click(SearchButton);
  
      expect(onSearch).not.toHaveBeenCalled();
      expect(queryByTestId('error-message')).toBeTruthy();
    });
  });

  describe('with valid query', () => {
    it('does not trigger onSearch function', () => {
      const {queryByTestId, queryByPlaceholderText} = render(<GifSearchForm onSearch={onSearch}/>);
  
      const SearchButton = queryByTestId('search-button') as HTMLButtonElement;
      const SearchInput = queryByPlaceholderText('Search Giphy') as HTMLInputElement;

      fireEvent.change(SearchInput, {target: {value: 'test'}});
      fireEvent.click(SearchButton);
  
      expect(onSearch).toHaveBeenCalled();
    });
  });
});
