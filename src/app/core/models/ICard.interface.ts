export interface ICardInterface {
    id: number,
    nombre: string,
    imagenes: IImagenesInterface[]
}

export interface IImagenesInterface {
    id: number,
    link: string
}