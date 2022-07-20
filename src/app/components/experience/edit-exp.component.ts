import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {

  expLab: Experience = null;

  constructor(private sExperiencia: SExperienciaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(data =>{
      this.expLab = data;
    }, err =>{
      alert("Error editando experiencia");
      this.router.navigate(['']);
    }

    )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error editando experiencia");
      this.router.navigate(['']);
    }
    )
  }

}
