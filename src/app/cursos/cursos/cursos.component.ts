import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements  OnInit {

  cursos: Curso[] = [];
  displayedColumns = ['name', 'category'];
  
  constructor(){
  
  } 

  ngOnInit(): void {
      
  }


}
