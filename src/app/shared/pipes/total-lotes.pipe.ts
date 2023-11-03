import { Pipe, PipeTransform } from '@angular/core';
import { IEtapaInterface } from 'src/app/core/models/IProyecto.interface';

@Pipe({
  name: 'totalLotes'
})
export class TotalLotesPipe implements PipeTransform {

  transform(etapas: IEtapaInterface[]): number {
    if (!etapas || etapas.length === 0) {
      return 0;
    }
    // CM: Se usa el método reduce para sumar el total de lotes de todas las etapas
    return etapas.reduce((total, etapa) => total + etapa.total, 0);
  }

}
