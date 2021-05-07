import * as React from 'react';
import styled from 'styled-components';

import {GridList, GridListTile, GridListTileBar, ListSubheader} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const StyledGridList = styled(GridList)`
  width: 500px;
  height: 450px;
`;

const StyledGridListTile = styled(GridListTile)`
  &:hover {
    border: 1px solid white;
    cursor: pointer;
  }
`;

const StyledIcon = styled(IconButton)`
  color: rgba(255, 255, 255, 0.54);
`;

export const ListItem: React.FunctionComponent<{items: any[]}> = ({items}) => {
  return (
    <StyledGridList cellHeight={180}>
        <GridListTile key="Subheader" cols={2} style={{ height: '20px' }} />
        {items.map(({images, title, username}, index) => (
            <StyledGridListTile key={index}>
              <img src={images.original.url} alt={title} />
              <GridListTileBar
                title={title}
                subtitle={<span>by: {username}</span>}
              />
            </StyledGridListTile>
        ))}
      </StyledGridList>
  );
};
