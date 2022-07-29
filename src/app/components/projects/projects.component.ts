import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectServiceService } from 'src/app/services/project-service.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  proj: Project[] = [];

  constructor(private sProject: ProjectServiceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    
    this.loadExperience();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
  }

  loadExperience(): void {
    this.sProject.lista().subscribe(
      data => {this.proj = data;}
    )
  }

  delete(id?:number){
    if(id != undefined){
      this.sProject.delete(id).subscribe(data =>{
        this.loadExperience();
      }, err =>{
        alert("Error al borrar proyecto");
      })
    }
  }

}
