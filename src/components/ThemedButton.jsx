import styled from 'styled-components';
import StyledButton from './StyledButton';

const ThemedButton = styled(StyledButton)`
  color: ${p => p.theme.colors.label};
  background: ${p => p.theme.colors.brand};
`;

export default ThemedButton;