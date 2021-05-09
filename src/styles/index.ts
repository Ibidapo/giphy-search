import styled from 'styled-components';
import {Divider, Paper, IconButton, InputBase} from '@material-ui/core';

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

export const StyledPaper = styled(Paper)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 400px;
  margin-bottom: 20px;
`; 

export const StyledInput = styled(InputBase)`
  margin-left: 8px;
  flex: 1;
`;

export const StyledIconButton = styled(IconButton)`
  padding: 10;
`;

export const StyledDivider = styled(Divider)`
  height: 28px;
  margin: 4px;
`;

export const Wrapper = styled.div`
  width: 100%;
`;
