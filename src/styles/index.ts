import styled from 'styled-components';

import {IconButton, InputBase, Paper} from '@material-ui/core';

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

  & > span {
    color: #e91e63;
  }
`;

export const StyledPaper = styled(Paper)`
  display: flex;
  align-items: center;
  width: 400px;
  padding: 2px 4px;
  margin-bottom: 4px;
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
