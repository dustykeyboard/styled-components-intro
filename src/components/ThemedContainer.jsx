import styled from 'styled-components';

const ThemedContainer = styled.div`
  font-size: 48px;
  color: ${p => p.theme.colors.text};
  background: ${p => p.theme.colors.bg};
  padding: 1em;
`;

export default ThemedContainer;