import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criadores',
  templateUrl: './criadores.page.html',
  styleUrls: ['./criadores.page.scss'],
})
export class CriadoresPage implements OnInit {

  titulo = 'Messias';
  listaNumeros: number[] = [];
  tituloBoleano = false;

  constructor() { }

  ngOnInit() {
    // this.gerarNumerosDe0a10();
  }

  trocarTitulo(novoTitulo) {
    this.titulo = novoTitulo;
  }

  gerarNumerosDe0a10() {
    // int => number
    // string => string
    // boolean => boolean

    for (let i = 0; i <= 10; i++) {
      this.listaNumeros.push(i);
    }

  }

  jogarCod() {
    this.tituloBoleano = !this.tituloBoleano;
  }

}
