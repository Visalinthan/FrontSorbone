import { TeamService } from './../team.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Team } from '../utils/team';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-team',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-team.component.html',
  styleUrl: './create-team.component.css'
})
export class CreateTeamComponent implements OnInit {

  team: Team = new Team();
  
  constructor(private ts: TeamService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveTeam(){
    this.ts.createTeam(this.team).subscribe( data =>{
      console.log("haha",data);
      this.goToTeamList();
    },
    error => console.log("eurrrrrr=======",error));
  }

  goToTeamList(){
    this.router.navigate(['/teamList']);
  }
  
  onSubmit(){
    this.saveTeam();
  }
}
