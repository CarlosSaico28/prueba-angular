import {Injectable } from '@angular/core'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { casas } from '../domain/casas';


@Injectable({

    providedIn: 'root'
  })
  
  export class CasasService {

    lstCasas = new Array()  
    private productsCollection: AngularFirestoreCollection<casas>;
    casa: any

    constructor(private afs: AngularFirestore){
            this.productsCollection = afs.collection<casas>('casas');
         

    }
    getCasasFire() {
        return this.productsCollection.valueChanges();
      }

  }

