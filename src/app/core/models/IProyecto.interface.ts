/**
* Interfaz que define la estructura de datos para representar un proyecto en una empresa inmobiliaria.
*/
export interface IProyectoInterface {
    id: number, // Identificador único del proyecto.
    nombre: string, // Nombre del proyecto.
    resumen: string, // Resumen o descripción breve del proyecto.
    imgCard: string, // Ruta de la imagen de la tarjeta del proyecto.
    imagenes: IImagenInterface[] // Arreglo de rutas de las imágenes del proyecto.
    video: string, // Enlace al video del proyecto.
    ubicacion: IUbicacionInterface, // Objeto que contiene la información de la ubicación del proyecto.
    estructura: IEstructuraInterface, // Objeto que contiene la información de la estructura del proyecto.
    caracteristicas: ICaracteristicasInterface[], // Arreglo de objetos que contienen la información de las características del proyecto.
    aspectoLegal: IAspectoLegal, // Objeto que contiene la información del aspecto legal del proyecto.
    aspectoComercial: IAspectoComercial, // Objeto que contiene la información del aspecto comercial del proyecto.
    informacion: IInformacionInterface, // Objeto que contiene la información de la empresa inmobiliaria.
    colores: IColoresInterface, // Objeto que contiene la información de la paleta de colores del proyecto.
}

/**
* Interfaz que define la estructura de datos para representar una imagen.
*/
export interface IImagenInterface {
    id: number, // Identificador único de la imagen.
    url: string // Ruta de la imagen.
}

/**
* Interfaz que define la estructura de datos para representar la ubicación de un proyecto.
*/
export interface IUbicacionInterface {
    localizacion: string, // Localización del proyecto.
    direccion: string, // Dirección del proyecto.
    referencias: string, // Referencias de la dirección del proyecto.
    img: string // Ruta de la imagen de la ubicación del proyecto.
}

/**
* Interfaz que define la estructura de datos para representar la estructura de un proyecto.
*/
export interface IEstructuraInterface {
    area: number, // Área del proyecto.
    img: string, // Ruta de la imagen de la estructura del proyecto.
    lotes: ILoteInterface, // Objeto que contiene la información de los lotes del proyecto.
    etapas: IEtapaInterface[] // Arreglo de objetos que contienen la información de las etapas del proyecto.
}

/**
* Interfaz que define la estructura de datos para representar información de lotes en un proyecto.
*/
export interface ILoteInterface {
    totalLotes: number, // CM (YO): Posiblementes tenga que hacer un pipe para sacar el total sumando las etapas 
    desde: number, // Área mínima desde la que se ofrecen lotes.
    hasta: number, // Área máxima hasta la que se ofrecen lotes.
    fachadaPromedio: number, // Valor promedio de la fachada de los lotes.
}

/**
 * Interfaz que define la estructura de datos para representar una etapa en un proyecto.
 */
export interface IEtapaInterface {
    numero: string, // Número de la etapa
    total: number // Número Total de lotes de la etapa
}

/**
 * Interfaz que define la estructura de datos para representar las características de un proyecto.
 */
export interface ICaracteristicasInterface {
    caracteristica: string, // Nombre de la caracteristica
    logo: string, // Ruta o enlace a la imagen representativa de la característica.
    /**
    * Lista opcional de características adicionales relacionadas. Por ejemplo, si la característica
    * se refiere a "Servicios Básicos", esta propiedad podría contener una lista de servicios como
    * "Agua", "Luz", "Desagüe", etc.
    */
    adicional?: string[],
}

/**
* Interfaz que define la estructura de datos para representar aspectos legales de un proyecto inmobiliario.
*/
export interface IAspectoLegal {
    proyecto: string; // Información legal relacionada con el proyecto.
    lotes: string; // Información legal relacionada con los lotes del proyecto.
    contratos: IContratoInterface[] // Lista de contratos asociados al proyecto.
}

/**
* Interfaz que define la estructura de datos para representar un contrato.
*/
export interface IContratoInterface {
    nombre: string, // Nombre del contrato.
    descripcion: string // Descripción del contrato.
}

/**
* Interfaz que define la estructura de datos para representar aspectos comerciales de un proyecto inmobiliario.
*/
export interface IAspectoComercial {
    precio: IPrecioInterface[], // Lista de precios por etapa del proyecto.
    separacion: number, // Monto de la separación.
    adicional: string, // Información adicional sobre la separacion.
    inicial: IInicialInterface[], // Lista de montos iniciales por etapa del proyecto.
    cuotas: ICuotasInterface[], // Lista de montos por cuota por etapa del proyecto.
    maximoCuotas: number, // Número máximo de cuotas.
    intereses: string, // Información sobre los intereses.
}

/**
* Interfaz que define la estructura de datos para representar los precios por etapa de un proyecto inmobiliario.
*/
export interface IPrecioInterface {
    etapa: string, // Nombre de la etapa.
    minimo: number, // Precio mínimo.
    maximo: number, // Precio máximo.
    promedio: number, // Precio promedio.
}

/**
* Interfaz que define la estructura de datos para representar los montos iniciales requeridos por etapa de un proyecto inmobiliario.
*/
export interface IInicialInterface {
    etapa: string, // Nombre de la etapa a la que se refiere el monto inicial.
    porcentaje: number, // Porcentaje del precio de la propiedad que corresponde al monto inicial.
    pagoInicial: number, // Monto del pago inicial requerido para adquirir una propiedad en esta etapa.
}

/**
* Interfaz que define la estructura de datos para representar las cuotas de un proyecto inmobiliario.
*/
export interface ICuotasInterface {
    etapa: string, // Nombre de la etapa a la que se refieren las cuotas.
    pagoCuota: number // Monto del pago de cada cuota.
    hasta: number // Número de cuotas hasta las cuales se puede pagar.
}

/**
* Interfaz que define la estructura de datos para representar información general de un proyecto inmobiliario.
*/
export interface IInformacionInterface {
    empresa: string, // Nombre de la empresa inmobiliaria.
    ruc: number, // Número de RUC (Registro Único de Contribuyentes) de la empresa.
    numeroPartida: number, // Número de partida registral, utilizado para identificar la propiedad o el proyecto.
    entrega: Date, // Fecha de entrega estimada del proyecto inmobiliario.
    pGracia: Date, // Fecha de inicio del período de gracia (si aplica).
    zorem: string, // Zona de referencia del proyecto inmobiliario.
    cuentasDeposito: ICuentaInterface[] // Lista de cuentas bancarias para depósitos relacionados con el proyecto.
}

/**
* Interfaz que define la estructura de datos para representar una cuenta bancaria utilizada para depósitos.
*/
export interface ICuentaInterface {
    nombre: string, // Nombre del banco en el que se encuentra la cuenta.
    img: string, // logotipo del banco.
    cuentaCorriente: string, // Número de cuenta corriente.
    cuentaInterbancaria: string, // Número de cuenta interbancaria.
}

/**
* Interfaz que define la estructura de datos para representar los colores asociados a un proyecto inmobiliario.
*/
export interface IColoresInterface {
    primario: string, // Color primario utilizado en la interfaz del proyecto.
    secundario: string, // Color secundario utilizado en la interfaz del proyecto.
    terciario: string, // Color terciario utilizado en la interfaz del proyecto.
    cuartenario?: string, // Color cuaternario opcional utilizado en la interfaz del proyecto.
}