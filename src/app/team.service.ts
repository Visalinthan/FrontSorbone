import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from './utils/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private baseURL = "/api/teams";

  constructor(private httpClient: HttpClient) { }
  
  getTeamList(): Observable<Team[]>{
    return this.httpClient.get<Team[]>(`${this.baseURL}`);
  }

  createTeam(team: Team): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/add`, team);
  }

  deleteTeam(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}

