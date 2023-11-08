/**
* Interfaz que define la estructura de datos para representar una red social o enlace web.
*/
export interface IRedesInterface {
    id: number, // Identificador único de la red social o enlace.
    nombre: string, // Nombre de la red social.
    logo: string, // Ruta al logo o icono de la red social.
    link: string, // Enlace URL asociado a la red social o enlace.
}