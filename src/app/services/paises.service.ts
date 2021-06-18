import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaisModel } from '../models/pais.model';
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class PaisesService {

    public paises: PaisModel[] = [];

    constructor(private http: HttpClient) { }

    getPaises(): Observable<PaisModel[]> {
        return this.http.get<PaisModel[]>('https://restcountries.eu/rest/v2/lang/es');
    }

    // getPais(id: string){
    //     let pais;
    //     this.getPaises().subscribe( res => {
    //         pais = res.find( p => p.alpha3Code === id);
    //         return pais;
    //     });
    // }
}
