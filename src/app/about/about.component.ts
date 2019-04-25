import { Component, OnInit } from '@angular/core';
import { VehicleApiService } from '../vehicle-api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private api: VehicleApiService) { }

  ngOnInit() {
  }

}
