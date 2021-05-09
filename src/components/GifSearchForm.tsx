import * as React from 'react';

import SearchIcon from '@material-ui/icons/Search';

import {FormWrapper, StyledIconButton, StyledInput, StyledPaper} from '../styles';

type Props = {
  onSearch: (search: string) => void;
};

export const GifSearchForm: React.FunctionComponent<Props> = ({onSearch}) => {
  const [query, setQuery] = React.useState<string>('');
  const [error, setError] = React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (!query) {
      setError(true);
      return;
    }

    setError(false);
    onSearch(query);
    setQuery('');
  };

  return (
    <FormWrapper>
      <StyledPaper component="form" onSubmit={handleSubmit}>
        <StyledInput
          placeholder="Search Giphy"
          onChange={handleChange}
          value={query}
        />
        <StyledIconButton
          aria-label="search-button"
          data-testid="search-button" 
          onClick={handleSubmit}
          type="submit"
        >
          <SearchIcon />
        </StyledIconButton>
      </StyledPaper>
      {error && (
        <span data-testid="error-message">This field requires a value</span>
      )}
    </FormWrapper>
  );
};
