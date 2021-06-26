import React, { useContext } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import styled from 'styled-components';
import { AppContext } from '../../shared/context';
import { fonts, colors } from '../../shared/theme';
import { CountryCode, CountryCodeType } from '../../shared/localization';
import { A, Gradient } from '../../components';

export const Wrapper = styled(Gradient)`
  width: 100%;
  padding: 8px 16px;
  box-sizing: border-box;
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
const StyledReactFlagsSelect = styled(ReactFlagsSelect)`
  #rfs-btn {
    background-color: ${colors.secondary};
  }
`;

export default function Header(): JSX.Element {
  const { localization } = useContext(AppContext);
  return (
    <Wrapper>
      <Title>
        <A href="/">{localization.title}</A>
      </Title>
      {/* <LanguageChoice /> */}
    </Wrapper>
  );
}

export const LanguageChoice = (): JSX.Element => {
  const { countryCode, setCountryCode } = useContext(AppContext);
  return (
    <StyledReactFlagsSelect
      countries={CountryCode}
      customLabels={{ RS: 'serbian', GB: 'english' }}
      selected={countryCode}
      onSelect={contryCode => setCountryCode(contryCode as CountryCodeType)}
    />
  );
};
