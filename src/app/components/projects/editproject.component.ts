import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectServiceService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {

  projects: Project = null;

  constructor(private sProject: ProjectServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProject.detail(id).subscribe(data =>{
      this.projects = data;
    }, err =>{
      alert("Error editando proyecto");
      this.router.navigate(['']);
    }

    )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProject.update(id, this.projects).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error editando proyecto");
      this.router.navigate(['']);
    }
    )
  }
}
