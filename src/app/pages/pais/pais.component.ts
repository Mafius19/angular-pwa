import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisModel } from 'src/app/models/pais.model';
import { PaisesService } from '../../services/paises.service';

@Component({
    selector: 'app-pais',
    templateUrl: './pais.component.html',
    styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

    pais: PaisModel;

    constructor(
        private paisesService: PaisesService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id')
        if(id) {
            this.getPais(id);
        } else {
            this.router.navigateByUrl('/');
        }
    }

    getPais(id: string){
        let pais
        this.paisesService.getPaises().subscribe( res => {
            pais = res.find( p => p.alpha3Code === id);
            if (pais) {
                this.pais = pais;
            } else {
                this.router.navigateByUrl('/');
            }
        });
    }
}
