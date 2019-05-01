import { Component, OnInit } from '@angular/core';
import { VehicleApiService, IModel } from '../vehicle-api.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {
  public displayedColumns: string[] = ['year', 'make', 'model'];
  public dataSource: IModel[] = [];

  private years: number[] = [];
  private makes: string[] = [];
  private selectedYear = 0;
  private selectedMake = '';

  public pageSize = 10;
  public pageIndex = 0;
  public pageSizeOptions = [5, 10, 25, 100];

  constructor(private api: VehicleApiService) { }

  ngOnInit() {
    this.fetchModels();
    this.fetchYears();
    this.fetchMakes();
  }

  onPageChanged(pageEvent: PageEvent) {
    this.api.getModelsByOffset(pageEvent.pageIndex * pageEvent.pageSize, pageEvent.pageSize).subscribe(data => this.dataSource = data);
  }

  get hasNext() {
    return this.dataSource.length === this.pageSize;
  }

  get hasPrevious() {
    return this.pageIndex > 0;
  }

  onPreviousClick() {
    this.pageIndex--;
    this.fetchModels();
  }

  onNextClick() {
    this.pageIndex++;
    this.fetchModels();
  }

  private fetchModels() {
    this.api.getFilteredModelsByOffset(this.selectedMake, this.selectedYear, this.pageIndex * this.pageSize, this.pageSize)
      .subscribe(data => this.dataSource = data);
  }

  private fetchYears() {
    this.api.getYears().subscribe(data => this.years = data);
  }

  private fetchMakes() {
    this.api.getMakes().subscribe(data => this.makes = data);
  }
}
