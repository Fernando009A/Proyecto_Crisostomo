import { Pipe, PipeTransform } from '@angular/core';
import { IEtapaInterface } from 'src/app/core/models/IProyecto.interface';

@Pipe({
  name: 'totalLotes'
})
export class TotalLotesPipe implements PipeTransform {
  /**
  * Transforma una lista de etapas en un número que representa la suma total de lotes de todas las etapas.
  *
  * @param etapas - La lista de etapas de las que se calculará la suma total de lotes.
  * @returns El número que representa la suma total de lotes de todas las etapas.
  */
  transform(etapas: IEtapaInterface[]): number {
    if (!etapas || etapas.length === 0) {
      return 0;
    }
    // Se usa el método reduce para sumar el total de lotes de todas las etapas
    return etapas.reduce((total, etapa) => total + etapa.total, 0);
  }

}
