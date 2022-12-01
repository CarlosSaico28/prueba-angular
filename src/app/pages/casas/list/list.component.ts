import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CasasService } from 'src/app/services/casas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  casas: any
  constructor(
    private casaService: CasasService){

  }
  ngOnInit(): void {
    this.loadProducts()
  }
  loadProducts(){
    this.casas=this.casaService.getCasasFire()
  }

  title= "Listar productos existentes"
}
