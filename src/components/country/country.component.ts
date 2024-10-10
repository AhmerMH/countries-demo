import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { Country } from '../../models/country';

@Component({
  selector: 'country',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css',
})
export class CountryComponent {
  @Input({ required: true }) country!: Country;
  @Input({ required: true }) index!: Number;

  CountryComponent() {}
}
