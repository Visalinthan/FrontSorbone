import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService } from '../team.service';
import { Team } from '../utils/team';

@Component({
  selector: 'app-team-list',
  standalone: true,
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css',
  imports: [CommonModule],
})
export class TeamListComponent implements OnInit {
  constructor(private teamService: TeamService) {}

  teams: Team[] = [];

  ngOnInit(): void {
    this.getTeams();
  }

  private getTeams() {
    this.teamService.getTeamList().subscribe((data) => {
      this.teams = data;
      console.log(this.teams);
    });
  }
  deleteTeam(id: number) {
    this.teamService.deleteTeam(id).subscribe((data) => {
      console.log(data);
      this.getTeams();
    });
  }
}
