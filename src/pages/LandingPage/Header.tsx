import React, { useContext } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import styled from 'styled-components';
import { AppContext } from '../../shared/context';
import { fonts, colors } from '../../shared/theme';
import { CountryCode } from '../../shared/localization';
import { Gradient } from '../../components';

export const Wrapper = styled(Gradient)`
  width: 100%;
  padding: 8px 16px;
  box-sizing: border-box;
  position: sticky;
  top: -1px;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;
const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-family: ${fonts.titles};
  letter-spacing: 0.1em;
  color: ${colors.secondary};
`;

export default function Header(): JSX.Element {
  const { localization } = useContext(AppContext);
  return (
    <Wrapper>
      <Title>{localization.title}</Title>
      <LanguageChoice />
    </Wrapper>
  );
}

const LanguageChoice = () => {
  const { countryCode, setCountryCode } = useContext(AppContext);
  return (
    <ReactFlagsSelect
      countries={['GB', 'RS']}
      customLabels={{ GB: 'english', RS: 'serbian' }}
      selected={countryCode}
      onSelect={contryCode => setCountryCode(contryCode as CountryCode)}
    />
  );
};
