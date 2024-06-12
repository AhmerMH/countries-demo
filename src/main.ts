import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { CountriesComponent } from './components/countries/countries.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CountriesComponent],
  template: `
    <countries></countries>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
