import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountries(): Promise<Country[]> {
    return this.http.post('https://countries.trevorblades.com/', {
      query: `
      query {
        countries {
          name
          native
          capital
          emoji
          currencies
          languages {
            name
            native
          }
          continent {
            name
          }
          code
          phone
        }
      }      
      `,
      variables: null,
    }).toPromise().then((response: any) => {
      let countries = [];
      if(response?.data?.countries) {
        countries = response.data.countries.map((country) => new Country(country));
      }
      return countries;
    });
  }
}
