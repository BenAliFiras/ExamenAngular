import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Badge } from './models/Badge';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  constructor(private _http:HttpClient) { }

  getBadges():Observable<Badge[]>{
    return this._http.get<Badge[]>("http://localhost:3000/badge");
  }

  getBadgeById(id):Observable<Badge>{
    return this._http.get<Badge>("http://localhost:3000/badge/"+id);
  }
}
