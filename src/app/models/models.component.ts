import { Component, OnInit } from '@angular/core';
import { VehicleApiService } from '../vehicle-api.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {

  constructor(private api: VehicleApiService) { }

  ngOnInit() {
  }
}
