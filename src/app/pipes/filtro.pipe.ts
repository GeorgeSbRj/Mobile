import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( array: any[], texto: string, coluna: string ): any[] {
    console.log(array);
    if ( texto === '' ) {
      return array;
    }
    
    texto = texto.toLowerCase();
     return array.filter( item => { 
      return item[coluna].toLowerCase()
    .includes( texto );
    });
  }

}
