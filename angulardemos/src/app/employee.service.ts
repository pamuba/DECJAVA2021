import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url = "/assets/data/employees.json"
  constructor(private http:HttpClient) { }

  public getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
  }
}
