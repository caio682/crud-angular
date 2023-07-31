import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { CursosService } from '../services/cursos.service';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements  OnInit {

  cursos$: Observable<Curso[]> ;
  displayedColumns = ['name', 'category'];
  // cursoService: CursosService;
  
  constructor(private cursoService: CursosService){

    // this.cursoService = new CursosService();
    // this.cursos = this.cursoService.list();
    // this.cursos$ = this.cursoService.list();
    this.cursos$ = this.cursoService.list().pipe(
      catchError(error => { 
        console.log(error);
        return of([]) 
      })
    );
  
  } 

  ngOnInit(): void {

    
      
  }


}
