import styled from 'styled-components';
import { colors } from '../shared/theme';

interface SectionProps {
  inverse?: boolean;
  gradient?: boolean;
  column?: boolean;
}
export const Section = styled.div.attrs((props: SectionProps) => {
  const style: React.CSSProperties = {
    backgroundColor: colors.secondary,
    color: colors.primary,
    flexDirection: 'row',
  };
  if (props.gradient) {
    style.background = `linear-gradient(to right, ${colors.primary}, ${colors.text})`;
    style.color = colors.secondary;
  }
  if (props.inverse) {
    style.backgroundColor = colors.primary;
    style.color = colors.secondary;
  }
  if (props.column) {
    style.flexDirection = 'column';
  }
  return { style };
})<SectionProps>`
  display: flex;
  flex-wrap: wrap;
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0 0 10px #ccc;
  max-width: 1024px;
`;
