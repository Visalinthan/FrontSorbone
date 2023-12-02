import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TeamApiService } from './team-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projetSorboneAngular';
  teams: any;

  constructor(private teamApiService: TeamApiService) {

    this.teamApiService
      .getUrl()
      .then((response) => {
        this.teams = response.data;
        console.log(this.teams);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
