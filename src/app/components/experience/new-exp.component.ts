import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent implements OnInit {

  nombreExp: string = '';
  descripcionExp: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const exp = new Experience(this.nombreExp, this.descripcionExp);
    this.sExperiencia.save(exp).subscribe(data =>{
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("Error");
      this.router.navigate(['']);
    })
  }

}
