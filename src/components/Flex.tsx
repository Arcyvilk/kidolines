import styled from 'styled-components';

type Props = {
  row?: boolean;
  column?: boolean;
  justify?: boolean;
  align?: boolean;
  grow?: boolean;
  wrap?: boolean;
  style?: React.CSSProperties;
};

export const Flex = styled.div.attrs((props: Props) => {
  const { row, column, justify, align, wrap, style } = props;
  const newStyle = { ...style };
  if (row) {
    newStyle.flexDirection = 'row';
  }
  if (column) {
    newStyle.flexDirection = 'column';
  }
  if (justify) {
    newStyle.justifyContent = 'center';
  }
  if (align) {
    newStyle.alignItems = 'center';
  }
  if (wrap) {
    newStyle.flexWrap = 'wrap';
  }
  return {
    style: newStyle,
  };
})<Props>`
  display: flex;

  > * {
    flex-grow: ${(props: Props) => (props.grow ? 1 : 'unset')};
  }
`;
