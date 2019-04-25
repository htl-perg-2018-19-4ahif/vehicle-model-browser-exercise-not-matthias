import { Component, OnInit } from '@angular/core';
import { VehicleApiService, IModel } from '../vehicle-api.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {
  public displayedColumns: string[] = ['year', 'make', 'model'];
  public dataSource: IModel[] = [];

  public filter = '';

  constructor(private api: VehicleApiService) { }

  ngOnInit() {
    this.api.getModels().subscribe(data => this.dataSource = data);
  }
}
