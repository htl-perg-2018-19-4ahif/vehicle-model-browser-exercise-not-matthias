import { Component } from '@angular/core';
import { VehicleApiService } from '../vehicle-api.service';
import { LoremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    },
    format: 'html'
  });
  public aboutText = '';

  constructor(private api: VehicleApiService) {
    this.aboutText = this.lorem.generateParagraphs(7);
  }
}
