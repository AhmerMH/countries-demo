export class Country {
  name: String;
  code: String;
  continent: String[];
  flag: String;
  languages: String[];
  nativeName: String;
  countryCode: String;
  currencies: String[];
  capitalCity: String;

  constructor(country: any) {
    this.name = country.name;
    this.code = country.code;
    this.flag = country.emoji;
    this.capitalCity = country.capital;
    this.nativeName = country.native;
    this.countryCode = country.phone;
    this.languages = country.languages.map(
      (language: any) => language.name + ' / ' + language.native + ' '
    );
    this.continent = country.continent.name;
    this.currencies = country.currencies.map((currency: any) => currency);
  }
}
