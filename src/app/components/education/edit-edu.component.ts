import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/services/s-educacion.service';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit {

  educacion: Educacion = null;

  constructor(private sEducacion: SEducacionService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(data =>{
      this.educacion = data;
    }, err =>{
      alert("Error editando educación");
      this.router.navigate(['']);
    }

    )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sEducacion.update(id, this.educacion).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error editando educación");
      this.router.navigate(['']);
    }
    )
  }

}
