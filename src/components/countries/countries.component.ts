import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { CountryComponent } from '../country/country.component';
import { NgFor } from '@angular/common';
import { CountryService } from '../../services/country-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Country } from '../../models/country';

@Component({
  selector: 'countries',
  standalone: true,
  imports: [CountryComponent, NgFor, HttpClientModule],
  providers: [CountryService],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css',
})
export class CountriesComponent implements OnInit {
  countries: Country[] = [
    new Country({
      name: 'United Arab Emirates',
      native: 'دولة الإمارات العربية المتحدة',
      capital: 'Abu Dhabi',
      emoji: '🇦🇪',
      currencies: ['AED'],
      languages: [
        {
          name: 'Arabic',
          native: 'العربية',
        },
      ],
      continent: {
        name: 'Asia',
      },
      code: 'AE',
      phone: '971',
      awsRegion: 'me-south-1',
    }),
  ];

  ngOnInit() {
    this.countryService.getCountries().then((countries: Country[]) => {
      this.countries = countries;
    });
  }

  constructor(private countryService: CountryService) {}
}
