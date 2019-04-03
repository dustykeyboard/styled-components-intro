import styled, { css } from 'styled-components';

export const buttonStyle = css`
  font-size: 48px;
  color: white;
  background: purple;
  padding: 0.5em;
  border: 0;
  border-radius: 0.25em;
`;

const StyledButton = styled.button`
  ${buttonStyle};
`;

export default StyledButton;
