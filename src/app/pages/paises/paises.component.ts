import { Component, OnInit } from '@angular/core';
import { PaisModel } from 'src/app/models/pais.model';
import { PaisesService } from '../../services/paises.service';

@Component({
    selector: 'app-paises',
    templateUrl: './paises.component.html',
    styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

    paises: PaisModel[] = []

    constructor(private paisesService: PaisesService) { 
        
    }

    ngOnInit() {
        this.paisesService.getPaises().subscribe( resp => {
            this.paises = resp;
        });
    };

}
