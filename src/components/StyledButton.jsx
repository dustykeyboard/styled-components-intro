import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 1em;
  color: white;
  background: purple;
  padding: 0.5em;
  border: 0;
  border-radius: 0.25em;
  cursor: pointer;
  position: relative;
  transition: 0.2s;
  -webkit-appearance: none;
  outline: none;

  &:hover {
    top: -0.1rem;
    box-shadow: 0 0.2em 0.5em black;
  }
  &:active {
    top: 0;
    box-shadow: 0 0.1em 0.3em black;
  }
`;

export default StyledButton;