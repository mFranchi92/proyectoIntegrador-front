import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  exp: Experience[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

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
    this.sExperiencia.lista().subscribe(
      data => {this.exp = data;}
    )
  }

  delete(id?:number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(data =>{
        this.loadExperience();
      }, err =>{
        alert("Error al borrar experiencia");
      })
    }
  }

}


