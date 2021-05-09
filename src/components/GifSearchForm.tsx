import * as React from 'react';

import SearchIcon from '@material-ui/icons/Search';

import {StyledDivider, StyledIconButton, StyledInput, StyledPaper} from '../styles';

type Props = {
  onSearch: (search: string) => void;
};

export const GifSearchForm: React.FunctionComponent<Props> = ({onSearch}) => {
  const [query, setQuery] = React.useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    onSearch(query);
    setQuery('');
  };

  return (
    <StyledPaper component="form" onSubmit={handleSubmit}>
      <StyledInput
        placeholder="Search Giphy"
        onChange={handleChange}
        value={query}
      />
      <StyledDivider orientation="vertical" />
      <StyledIconButton onClick={handleSubmit} type="submit" aria-label="search">
        <SearchIcon />
      </StyledIconButton>
    </StyledPaper>
  );
};
