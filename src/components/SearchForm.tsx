import SearchIcon from '@material-ui/icons/Search';
import * as React from 'react';

import {StyledDivider, StyledIconButton, StyledInput, StyledPaper} from '../styles';

type Props = {
  onSearch: (search: string) => void;
};

export const SearchForm: React.FunctionComponent<Props> = ({onSearch}) => {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    onSearch(value);
    setValue("");
  };

  return (
    <StyledPaper component="form" onSubmit={handleSubmit}>
      <StyledInput
        placeholder="Search Giphy"
        onChange={handleChange}
        value={value}
      />
      <StyledDivider orientation="vertical" />
      <StyledIconButton onClick={handleSubmit} type="submit" aria-label="search">
        <SearchIcon />
      </StyledIconButton>
    </StyledPaper>
  );
};
