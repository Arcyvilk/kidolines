import React, { useState, useEffect } from 'react';
import { CountryCodeType, Localization, texts } from '../localization';

type ContextType = {
  countryCode: CountryCodeType;
  setCountryCode: (countryCode: CountryCodeType) => void;
  localization: Localization;
  setLocalization: (localization: Localization) => void;
};
type Props = {
  children: React.ReactNode;
};

const AppContextProvider = ({ children }: Props): JSX.Element => {
  const defaultLocalization = 'GB';
  const [countryCode, setCountryCode] = useState<CountryCodeType>(
    defaultLocalization,
  );
  const [localization, setLocalization] = useState<Localization>(
    texts[defaultLocalization],
  );

  useEffect(() => {
    setLocalization(texts[countryCode]);
  }, [countryCode]);

  const value = {
    countryCode,
    setCountryCode,
    localization,
    setLocalization,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
export const AppContext = React.createContext({} as ContextType);
