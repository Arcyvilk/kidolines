export type CountryCode = 'GB' | 'RS';
export type TextType = 'title' | 'header' | 'startButton';
export type Localization = {
  [textType in TextType]: string;
};

export const texts: { [countryCode in CountryCode]: Localization } = {
  GB: {
    // eslint-disable-next-line prettier/prettier
    header: 'Spark your child\'s curiosity with our collection of fables.',
    title: 'KIDOLINES',
    startButton: 'Begin!',
  },
  RS: {
    header: 'Потакните радозналост вашег детета са нашом колекцијом басни.',
    title: 'KIDOLINES',
    startButton: 'Почети!',
  },
};
