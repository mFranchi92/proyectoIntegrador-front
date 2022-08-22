import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardNSoft } from '../model/hardnsoft';

@Injectable({
  providedIn: 'root'
})
export class SHardNSoftService {
  URL= 'https://apbackproj.herokuapp.com/hardnsoft/';
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<HardNSoft[]> {
    return this.httpClient.get<HardNSoft[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<HardNSoft>{
    return this.httpClient.get<HardNSoft>(this.URL + `detail/${id}`);
  }

  public save(hardNSoft: HardNSoft): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', hardNSoft);
  }

  public update(id: number, hardNSoft: HardNSoft): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, hardNSoft);
  }

  public delete(id: number): Observable<any>{
     return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
