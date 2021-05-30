export type CountryCodeType = 'GB' | 'RS' | 'PL';
export type TextType =
  | 'title'
  | 'subtitle'
  | 'header'
  | 'startButton'
  | 'desc1'
  | 'desc2'
  | 'desc3'
  | 'longDesc1'
  | 'longDesc2'
  | 'longDesc3'
  | 'keyword1'
  | 'keyword2'
  | 'keyword3';
export type Localization = {
  [textType in TextType]: string;
};

export const CountryCode: CountryCodeType[] = ['GB', 'RS', 'PL'];
export const texts: { [countryCode in CountryCodeType]: Localization } = {
  GB: {
    // eslint-disable-next-line prettier/prettier
    header: 'Spark your child\'s curiosity with our collection of fables.',
    title: 'KIDOLINES',
    subtitle: 'Kidolines - play and learn!',
    startButton: 'Begin!',
    keyword1: 'over 50 traditional fables',
    keyword2: 'beautiful artworks',
    keyword3: 'immersive voice acting',
    desc1:
      'An app with a collection of beautiful, illustrated fables, along with professional voice narration.',
    desc2:
      'Teaching your children how to read and write, having fun with their new animal friends at the same time!',
    desc3: 'test',
    longDesc1:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed dui mauris. Proin vehicula at dui ac facilisis. Sed feugiat mi at libero euismod, luctus euismod nisl placerat. In consequat quis tellus eget placerat.',
    longDesc2: 'Nam vitae tellus dapibus, consectetur nisi ut, placerat neque',
    longDesc3:
      'Quisque id ultrices ligula. Quisque ut mauris malesuada, dictum nisi at, commodo odio. Maecenas dictum erat a arcu mollis vehicula. Etiam finibus est ac facilisis vulputate. Duis suscipit enim at massa sollicitudin pharetra.',
  },
  RS: {
    header: 'Потакните радозналост вашег детета са нашом колекцијом басни.',
    title: 'KIDOLINES',
    subtitle: 'Kidolines - играјте се и учите!',
    startButton: 'Почети!',
    keyword1: 'преко 50 традиционалних басни',
    keyword2: 'прелепа уметничка дела',
    keyword3: 'уроњива глумачка глума',
    desc1:
      'Апликација са колекцијом лепих, илустрованих басни, заједно са професионалним гласовним приповедањем.',
    desc2:
      'Учите своју децу како читати и писати, истовремено се забављајући са својим новим пријатељима животињама!',
    desc3: 'test',
    longDesc1:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed dui mauris. Proin vehicula at dui ac facilisis. Sed feugiat mi at libero euismod, luctus euismod nisl placerat. In consequat quis tellus eget placerat.',
    longDesc2: 'Nam vitae tellus dapibus, consectetur nisi ut, placerat neque',
    longDesc3:
      'Quisque id ultrices ligula. Quisque ut mauris malesuada, dictum nisi at, commodo odio. Maecenas dictum erat a arcu mollis vehicula. Etiam finibus est ac facilisis vulputate. Duis suscipit enim at massa sollicitudin pharetra.',
  },
  PL: {
    header: 'Rozbudź wyobraźnię swojego dziecka z naszą kolekcją baśni.',
    title: 'KIDOLINES',
    subtitle: 'Kidolines - baw się i ucz!',
    startButton: 'Rozpocznij!',
    keyword1: 'ponad 50 tradycyjnych baśni',
    keyword2: 'piękne obrazki',
    keyword3: 'wciągająca narracja głosowa',
    desc1:
      'Aplikacja z kolekcją pięknych, ilustrowanych baśni, czytanych przez profesjonalnych narratorów.',
    desc2:
      'Twoje dzieci będą się uczyć czytać i pisać, bawiąc się z ich nowymi zwierzęcymi przyjaciółmi!',
    desc3: 'test',
    longDesc1:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed dui mauris. Proin vehicula at dui ac facilisis. Sed feugiat mi at libero euismod, luctus euismod nisl placerat. In consequat quis tellus eget placerat.',
    longDesc2: 'Nam vitae tellus dapibus, consectetur nisi ut, placerat neque',
    longDesc3:
      'Quisque id ultrices ligula. Quisque ut mauris malesuada, dictum nisi at, commodo odio. Maecenas dictum erat a arcu mollis vehicula. Etiam finibus est ac facilisis vulputate. Duis suscipit enim at massa sollicitudin pharetra.',
  },
};
