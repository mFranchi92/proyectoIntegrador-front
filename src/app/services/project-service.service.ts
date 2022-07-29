import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  projURL = 'http://localhost:8080/projects/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.projURL + 'lista');
  }

  public detail(id: number): Observable<Project>{
    return this.httpClient.get<Project>(this.projURL + `detail/${id}`);
  }

  public save(experience: Project): Observable<any>{
    return this.httpClient.post<any>(this.projURL + 'create', experience);
  }

  public update(id: number, experience: Project): Observable<any>{
    return this.httpClient.put<any>(this.projURL + `update/${id}`, experience);
  }

  public delete(id: number): Observable<any>{
     return this.httpClient.delete<any>(this.projURL + `delete/${id}`);
  }
}
