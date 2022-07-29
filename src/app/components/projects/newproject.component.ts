import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectServiceService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {
  nombreProj: string = '';
  descripcionProj: string = '';

  constructor(private sProject: ProjectServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proj = new Project(this.nombreProj, this.descripcionProj);
    this.sProject.save(proj).subscribe(data =>{
      alert("Proyecto añadido");
      this.router.navigate(['']);
    }, err =>{
      alert("Error");
      this.router.navigate(['']);
    })
  }

}
