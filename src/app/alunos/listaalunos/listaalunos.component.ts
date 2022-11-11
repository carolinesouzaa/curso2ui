import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/core/model';

@Component({
  selector: 'app-listaalunos',
  templateUrl: './listaalunos.component.html',
  styleUrls: ['./listaalunos.component.scss']
})
export class ListaalunosComponent implements OnInit {

  alunos: Aluno[] = [
    { id: 1, nomealuno: 'Carol' },
    { id: 2, nomealuno: 'Richard' },
    { id: 3, nomealuno: 'Barbara' },
    { id: 4, nomealuno: 'Vitor' },
    { id: 5, nomealuno: 'Gabriel' },
    { id: 6, nomealuno: 'Livia' },
    { id: 7, nomealuno: 'Pedro' },
    { id: 8, nomealuno: 'Maria' },
    { id: 9, nomealuno: 'Othavio' },
    { id: 10, nomealuno: 'Bianca' }
  ];

  displayedColumns= ['id', 'nomealuno'];

  constructor() { }

  ngOnInit(): void {
  }

}
