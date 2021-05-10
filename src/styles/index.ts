import styled from 'styled-components';

import {IconButton, InputBase, Paper} from '@material-ui/core';

const errorColor = '#e91e63';

export const Container = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div`
  text-align: left;
  margin-bottom: 20px;
  width: 375px;

  & > span {
    font-size: 14px;
    color: ${errorColor};
    margin-left: 12px;
  }
`;

export const StyledPaper = styled(Paper)`
  display: flex;
  align-items: center;
  padding: 2px 4px;
  margin: 4px;
`;

export const StyledInput = styled(InputBase)`
  margin-left: 8px;
  flex: 1;
`;

export const StyledIconButton = styled(IconButton)`
  padding: 10;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
`;

export const NoResultWrapper = styled.p`
  text-align: center;
  color: ${errorColor};
  margin: 0;
`;
