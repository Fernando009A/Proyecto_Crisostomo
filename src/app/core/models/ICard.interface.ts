/**
* Interfaz que representa una tarjeta (card) en la aplicación.
*/
export interface ICardInterface {
    id: number, // El identificador único de la tarjeta.
    nombre: string, // El nombre de la tarjeta.
    imagenes: IImagenesInterface[], // Una lista de imágenes relacionadas con la tarjeta.
}
/**
* Interfaz que representa una imagen.
*/
export interface IImagenesInterface {
    id: number, // El identificador único de la imagen.
    link: string, // El enlace o URL de la imagen.
}