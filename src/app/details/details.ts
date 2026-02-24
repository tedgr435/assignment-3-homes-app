import { Component , inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing-service';
import { Housinglocationinfo } from '../housinglocationinfo';
import { HousingLocation } from '../housing-location/housing-location';


@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;
  housingService = inject(HousingService);
  housingLocation : Housinglocationinfo | undefined;

  constructor(){
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationByID(this.housingLocationId);

  }
}
