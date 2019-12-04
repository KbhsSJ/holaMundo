import { Component } from '@angular/core';
import { SimplePlaceholderMapper } from '@angular/compiler/src/i18n/serializers/serializer';

@Component({
    selector: 'web-body',
    templateUrl: './body.component.html'
})

export class BodyComponents {
    // correo: string;
    // nombre: string;
    // apellido: string;
    // constructor(){
    //     this.correo="cavalierramosrj@gmail.com"
    //     this.nombre="Richard Joel"
    //     this.apellido="Cavalier Ramos"
    // }
    mostrar = true;

    frase: any = {
        mensaje: 'un gran poder requiere una gran responsabilidad',
        autor: 'Ben Parker'
    };

    personajes: string[] = ['Spiderman', 'Venon', 'Dr. Optocus'];




}