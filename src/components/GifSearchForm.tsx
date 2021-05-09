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
      onSearch('');
      setError(true);
      return;
    }

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
        <StyledIconButton onClick={handleSubmit} type="submit" aria-label="search">
          <SearchIcon />
        </StyledIconButton>
      </StyledPaper>
      {error && (
        <span>This field requires a value</span>
      )}
    </FormWrapper>
  );
};
