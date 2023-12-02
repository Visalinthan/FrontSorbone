import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class TeamApiService {
  constructor() {}

  getUrl() {
    return axios.get('http://localhost:9003/api/teams');
  }
}
