import styled from 'styled-components';
import { Flex } from '../../components';
import { main, main3 } from '../../shared/img';
import { fonts, colors } from '../../shared/theme';

export const Wrapper = styled(Flex)`
  background-color: ${colors.secondary};
  /* background-image: url(${main}); */
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: ${fonts.main};
`;

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
`;

export const PhoneShot = styled.img`
  border-radius: 8px;
  box-shadow: 0 0 10px #ccc;
`;

export const Cover = styled(Flex)`
  width: 100%;
  height: 800px;
  background-color: #fff;
  background-image: url(${main3});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: inset 0 0 20px 20px ${colors.secondary};

  @media (max-device-width: 900px) {
    background-size: cover;
  }
`;

export const Title = styled.div`
  color: ${colors.primary};
  font-family: ${fonts.titles};
  font-size: 48px;
  margin-top: -2em;
  max-width: 550px;
  text-align: center;
  line-height: 0.8em;
`;

export const Picture = styled.img`
  height: 250px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

export const List = styled.div`
  width: 100%;
  font-weight: bold;
  font-family: ${fonts.titles};
  font-size: 2em;
  letter-spacing: 0.1em;
  text-align: center;
`;

export const SubTitle = styled.h3`
  font-family: ${fonts.titles};
  color: ${colors.primary};
  letter-spacing: 0.1em;
  font-size: 1.7em;
`;
