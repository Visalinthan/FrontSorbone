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

  // getEmployeeById(id: number): Observable<Employee>{
  //   return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  // }

  // updateEmployee(id: number, employee: Employee): Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  // }

  // deleteEmployee(id: number): Observable<Object>{
  //   return this.httpClient.delete(`${this.baseURL}/${id}`);
  // }
}

