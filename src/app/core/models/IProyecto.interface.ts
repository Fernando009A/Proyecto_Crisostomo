export interface IProyectoInterface {
    id: number,
    nombre: string,
    resumen: string,
    imgCard: string,
    imagenes: IImagenInterface[]
    ubicacion: IUbicacionInterface,
    estructura: IEstructuraInterface,
    caracteristicas: ICaracteristicasInterface[],
    aspectoLegal: IAspectoLegal,
    aspectoComercial: IAspectoComercial,
    informacion: IInformacionInterface,
    colores: IColoresInterface,
}

export interface IImagenInterface {
    id: number,
    url: string
}

export interface IUbicacionInterface {
    localizacion: string,
    direccion: string,
    referencias: string,
    img: string
}

export interface IEstructuraInterface {
    area: number, 
    img: string,
    lotes: ILoteInterface,
    etapas: IEtapaInterface[]
}

export interface ILoteInterface {
    totalLotes: number, // CM (YO): Posiblementes tenga que hacer un pipe para sacar el total sumando las etapas 
    desde: number, // CM: Lotes desde que area hay
    hasta: number, // CM: Lotes hasta que area hay
    fachadaPromedio: number,
}

export interface IEtapaInterface {
    numero: string, // CM: Numero de la etapa
    total: number // CM: Total de lotes de la etapa
}

export interface ICaracteristicasInterface {
    caracteristica: string, // CM: Nombre de la caracteristica
    logo: string, // CM: Imagen de la caracteristica
    adicional?: string[], // CM: Ejemplo => Servicios Basicos, esta caracteristica se refiere a una lista de otras caracteristicas, como por ejemplo Agua, Luz, Desague
}

export interface IAspectoLegal {
    proyecto: string; //CM (Yo): Ver informacion en documentacion - (Realizar documentacion)
    lotes: string;
    contratos: IContratoInterface[]
}

export interface IContratoInterface {
    nombre: string,
    descripcion: string
}

export interface IAspectoComercial {
    precio: IPrecioInterface[],
    separacion: number,
    adicional: string, // CM: Ejemplo => 07 dias calendario para completar la inicial
    inicial: IInicialInterface[],
    cuotas: ICuotasInterface[],
    maximoCuotas: number,
    intereses: string
}

export interface IPrecioInterface {
    etapa: string, // CM: Nombre de la etapa
    minimo: number,
    maximo: number, 
    promedio: number,
}

export interface IInicialInterface {
    etapa: string,
    porcentaje: number,
    pagoInicial: number, //CM (Yo): Pregunta si es el pago Inicial
}

export interface ICuotasInterface {
    etapa: string,
    pagoCuota: number //CM (Yo): Pregunta si es el pago por Cuota
    hasta: number // CM: Hasta que cuota se puede pagar
}

export interface IInformacionInterface {
    empresa: string,
    ruc: number,
    numeroPartida: number, // CM (Yo): Consultar a que se refiere este dato
    entrega: Date,
    pGracia: Date, // CM (Yo): Consultar a que se refiere este dato y tambien el nombre completo del datos
    zorem: string,
    cuentasDeposito: ICuentaInterface[]
}

export interface ICuentaInterface {
    nombre: string, // CM (Yo): Nombre del banco, puede cambiar segun el cliente
    img: string,
    cuentaCorriente: string,
    cuentaInterbancaria: string,
}

export interface IColoresInterface {
    primario: string,
    secundario: string,
    terciario: string,
    cuartenario?: string,
}