import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements  OnInit {

  cursos: Curso[] = [];
  displayedColumns = ['name', 'category'];
  // cursoService: CursosService;
  
  constructor(private cursoService: CursosService){

    // this.cursoService = new CursosService();
    // this.cursos = this.cursoService.list();
  
  } 

  ngOnInit(): void {

    this.cursos = this.cursoService.list();
      
  }


}
