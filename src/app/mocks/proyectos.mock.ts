import { IProyectoInterface } from "../core/models/IProyecto.interface";

export const ListaProyectos: IProyectoInterface[] = [
    {
        id: 1,
        nombre: "Estancia del Prado",
        resumen: "Invierte en una zona exclusiva cerca a la ciudad y disfruta de la tranquilidad de la naturaleza",
        imgCard: "assets/img/proyectos/estancia_prado/card_prado.webp",
        imagenes: [
            {
                id: 1,
                url: "assets/img/proyectos/estancia_prado/1.webp"
            },
            {
                id: 2,
                url: "assets/img/proyectos/estancia_prado/2.webp"
            },
            {
                id: 3,
                url: "assets/img/proyectos/estancia_prado/3.webp"
            },
            {
                id: 4,
                url: "assets/img/proyectos/estancia_prado/4.webp"
            },
            {
                id: 5,
                url: "assets/img/proyectos/estancia_prado/5.webp"
            },
            {
                id: 6,
                url: "assets/img/proyectos/estancia_prado/6.webp"
            },
        ],
        video: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FCrisostomoInmobiliaria%2Fvideos%2F834538154805464%2F&show_text=false&width=560&t=0",
        ubicacion: {
            localizacion: "Pachinga, Pisco, Ica",
            direccion: "CAMPO VERDE, Lotes N°3-B y 3-C",
            referencias: "Entre Pisco y el terminal a unos pasos del trebol en la nueva panamericana",
            img: "assets/img/proyectos/estancia_prado/ubicacion.webp"
        },
        estructura: {
            area: 4.7,
            img: "assets/img/proyectos/estancia_prado/plano_general.webp",
            lotes: {
                totalLotes: 253,
                desde: 90,
                hasta: 164.76,
                fachadaPromedio: 6
            },
            etapas: [
                {
                    numero: "Primera etapa",
                    total: 76,
                },
                {
                    numero: "Segunda Etapa",
                    total: 93,
                },
                {
                    numero: "Tercera Etapa",
                    total: 84
                },
            ]
        },
        caracteristicas: [
            {
                caracteristica: "Servicios Basicos",
                logo: "assets/img/logos/servicios_basicos.svg",
                adicional: [
                    "Agua",
                    "Luz",
                    "Desague"
                ]
            },
            {
                caracteristica: "Parques con zonas comunes (03)",
                logo: "assets/img/logos/campo_deportivo.svg",
                adicional: [
                    "Áreas de Esparcimiento",
                    "Zona de Ajedrez",
                    "Zona de Recreación Infantil",
                    "Loza Multideportiva"
                ]
            },
            {
                caracteristica: "Cerco Perimétrico Vivo",
                logo: "assets/img/logos/centro_perimetrico.svg",
                adicional: [
                    "Cerco Perimetrico frontal de cañas de guayaquil y base de concreto"
                ]
            },
            {
                caracteristica: "Pórtico de Ingreso",
                logo: "assets/img/logos/porton.svg"
            },
            {
                caracteristica: "Vias niveladas y Compactadas",
                logo: "assets/img/logos/vias_veredas.svg"
            },
            {
                caracteristica: "Copia Literal",
                logo: "assets/img/logos/copia_literal.svg"
            },
        ],
        aspectoLegal: {
            proyecto: "Lote Matriz con Copia Literal",
            lotes: "Los lotes se entregaran con copia literal e independizados",
            contratos: [
                {
                    nombre: "Credito",
                    descripcion: "Contrato privado de compraventa",
                },
                {
                    nombre: "Contado",
                    descripcion: "Contrato notariado de compraventa",
                }
            ]
        },
        aspectoComercial: {
            precio: [
                {
                    etapa: "Primera Etapa",
                    minimo: 44500,
                    maximo: 74630,
                    promedio: 46449,
                },
                {
                    etapa: "Segunda Etapa",
                    minimo: 49010,
                    maximo: 75220,
                    promedio: 50565,
                },
                {
                    etapa: "Tercera Etapa",
                    minimo: 53910,
                    maximo: 107890,
                    promedio: 58526,
                },
            ],
            separacion: 500,
            adicional: "07 dias calendario para completar la inicial",
            inicial: [
                {
                    etapa: "Primera Etapa",
                    porcentaje: 10,
                    pagoInicial: 4655
                },
                {
                    etapa: "Segunda Etapa",
                    porcentaje: 15,
                    pagoInicial: 7585
                },
                {
                    etapa: "Tercera Etapa",
                    porcentaje: 15,
                    pagoInicial: 8779
                }
            ],
            cuotas: [
                {
                    etapa: "Primera Etapa",
                    pagoCuota: 631.20,
                    hasta: 60,
                },
                {
                    etapa: "Segunda Etapa",
                    pagoCuota: 694.40,
                    hasta: 60,
                },
                {
                    etapa: "Tercera Etapa",
                    pagoCuota: 763.80,
                    hasta: 60,
                }
            ],
            maximoCuotas: 60,
            intereses: "0%"
        },
        informacion: {
            empresa: "INMOBILIARIA ALBHA",
            ruc: 20608187597,
            numeroPartida: 20223967822,
            entrega: new Date(2024,12,30),
            pGracia: new Date(2025,6,30),
            zorem: "http://laestancia.zorem.pe/etapas/plano/11",
            cuentasDeposito: [
                {
                    nombre: "Banco Continental (BBVA)",
                    img: "assets/img/logos/logo_bbva.png",
                    cuentaCorriente: "0011-0053-0100013796",
                    cuentaInterbancaria: "0011-0053-000100013796-66"
                },
                {
                    nombre: "Banco de Credito del Peru",
                    img: "assets/img/logos/logo_bcp.png",
                    cuentaCorriente: "",
                    cuentaInterbancaria: ""
                }
            ]
        },
        colores: {
            primario: "#E88917",
            secundario: "#F1BC0A",
            terciario: "#7B3F14"
        }
    },
    {
        id: 2,
        nombre: "Arboleda",
        resumen: "Tu casa de campo en Pisco ahora es posible con Arboleda",
        imgCard: "assets/img/proyectos/arboleda/card_arboleda.webp",
        imagenes: [
            {
                id: 1,
                url: "assets/img/proyectos/arboleda/1.webp"
            },
            {
                id: 2,
                url: "assets/img/proyectos/arboleda/2.webp"
            },
            {
                id: 3,
                url: "assets/img/proyectos/arboleda/3.webp"
            },
            {
                id: 4,
                url: "assets/img/proyectos/arboleda/4.webp"
            },
            {
                id: 5,
                url: "assets/img/proyectos/arboleda/5.webp"
            },
            {
                id: 6,
                url: "assets/img/proyectos/arboleda/6.webp"
            },
        ],
        video: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FCrisostomoInmobiliaria%2Fvideos%2F1389952465282462%2F&show_text=false&width=560&t=0",
        ubicacion: {
            localizacion: "Pisco, Pisco, Ica",
            direccion: "Parcela N°58 - Caucato Alto",
            referencias: "Cerca al centro poblado Caucato pasando el pryecto de Menorca.",
            img: "assets/img/proyectos/arboleda/ubicacion.webp"
        },
        estructura: {
            area: 3.1,
            img: "assets/img/proyectos/arboleda/plano_general.webp",
            lotes: {
                totalLotes: 150,
                desde: 101.80,
                hasta: 320.54,
                fachadaPromedio: 8.50
            },
            etapas: [
                {
                    numero: "Primera etapa",
                    total: 150,
                },
            ]
        },
        caracteristicas: [
            {
                caracteristica: "Pórtico de Ingreso",
                logo: "assets/img/logos/porton.svg"
            },
            {
                caracteristica: "Cerco Perimétrico",
                logo: "assets/img/logos/centro_perimetrico.svg"
            },
            {
                caracteristica: "Zona Fogata",
                logo: "assets/img/logos/fogata.svg"
            },
            {
                caracteristica: "Zona de recreación infantil",
                logo: "assets/img/logos/zona_recreacion_infantil.svg"
            },
            {
                caracteristica: "Cancha Sintética",
                logo: "assets/img/logos/campo_deportivo.svg"
            },
            {
                caracteristica: "Copia Literal",
                logo: "assets/img/logos/copia_literal.svg"
            },
            {
                caracteristica: "Servicios Basicos",
                logo: "assets/img/logos/servicios.svg",
                adicional: [
                    "Agua",
                    "Luz",
                ]
            },
        ],
        aspectoLegal: {
            proyecto: "Lote Matriz con Copia Literal",
            lotes: "Los lotes se entregaran con copia literal sujeta al lote matriz, sin independización",
            contratos: [
                {
                    nombre: "Credito",
                    descripcion: "Contrato privado de compraventa por acciones y derechos",
                },
                {
                    nombre: "Contado",
                    descripcion: "Minuta de compraventa por acciones y derechos y escritura pública notarial",
                }
            ]
        },
        aspectoComercial: {
            precio: [
                {
                    etapa: "Primera Etapa",
                    minimo: 21420,
                    maximo: 67450,
                    promedio: 27303.87,
                },
            ],
            separacion: 200,
            adicional: "07 dias calendario para completar la inicial",
            /* CM: Consultar datos para saber como poner los datos */
            inicial: [
                {
                    etapa: "Primera Etapa",
                    porcentaje: 10,
                    pagoInicial: 4655
                },
            ],
            cuotas: [
                {
                    etapa: "Primera Etapa",
                    pagoCuota: 489.30,
                    hasta: 60,
                },
            ],
            maximoCuotas: 60,
            /* CM: Tambien consultar acerca de este datos */
            intereses: "14% TCEA - 1.1% TCEM"
        },
        informacion: {
            empresa: "INMOBILIARIA & ARQUITECTURA 360 S.A.C.",
            ruc: 20607207969,
            numeroPartida: 11006798,
            entrega: new Date(2025,12,30),
            pGracia: new Date(2026,6,30),
            zorem: "",
            cuentasDeposito: [
                {
                    nombre: "Banco Continental (BBVA)",
                    img: "assets/img/logos/logo_bbva.png",
                    cuentaCorriente: "0011-0053-0100013877",
                    cuentaInterbancaria: "0011-0053-000100013887-64"
                },
                {
                    nombre: "Banco de Credito del Peru",
                    img: "assets/img/logos/logo_bcp.png",
                    cuentaCorriente: "380-8967-965-0-85",
                    cuentaInterbancaria: "002-380-008967965085"
                }
            ]
        },
        colores: {
            primario:"#38492E",
            secundario: "#BDA938",
            terciario: "#010101"
        }
    },
    {
        id: 3,
        nombre: "Costa Azul",
        resumen: "Vive cerca de todo lo que la hermosa ciudad de Pisco te ofrece",
        imgCard: "assets/img/proyectos/costa_azul/card_costa_azul.webp",
        imagenes: [
            // CM: Cambiar por las de Cosa azul
            {
                id: 1,
                url: "assets/img/proyectos/costa_azul/1.webp"
            },
            {
                id: 2,
                url: "assets/img/proyectos/costa_azul/2.webp"
            },
            {
                id: 3,
                url: "assets/img/proyectos/costa_azul/3.webp"
            },
            {
                id: 4,
                url: "assets/img/proyectos/costa_azul/4.webp"
            },
            {
                id: 5,
                url: "assets/img/proyectos/costa_azul/5.webp"
            },
            {
                id: 6,
                url: "assets/img/proyectos/costa_azul/6.webp"
            },
        ],
        video: "",
        ubicacion: {
            localizacion: "Santa Rosa, Pisco, Ica",
            direccion: "Av. Las Americas con la Av. San Isidro",
            referencias: "A la espalda del instituto tecnológico de Pisco",
            img: "assets/img/proyectos/costa_azul/ubicacion.webp"
        },
        estructura: {
            area: 5.7,
            img: "assets/img/proyectos/costa_azul/plano_general.webp",
            lotes: {
                totalLotes: 189,
                desde: 90,
                hasta: 220.85,
                fachadaPromedio: 6
            },
            etapas: [
                {
                    numero: "Primera etapa",
                    total: 189,
                },
            ]
        },
        caracteristicas: [
            {
                caracteristica: "Parques con zonas comunes",
                logo: "assets/img/logos/campo_deportivo.svg",
                adicional: [
                    "Áreas de Esparcimiento",
                    "Zona de Recreación Infantil",
                    "Gimnasio al aire libre"
                ]
            },
            {
                caracteristica: "Servicios Basicos",
                logo: "assets/img/logos/servicios_basicos.svg",
                adicional: [
                    "Agua",
                    "Luz",
                    "Desague"
                ]
            },
            {
                caracteristica: "Vias niveladas y Compactadas",
                logo: "assets/img/logos/vias_veredas.svg"
            },
            {
                caracteristica: "Copia Literal",
                logo: "assets/img/logos/copia_literal.svg"
            }
        ],
        aspectoLegal: {
            proyecto: "Lote Matriz con Copia Literal",
            lotes: "Los lotes se entregaran con copia sujeta al lote matriz, sin independización",
            contratos: [
                {
                    nombre: "Credito",
                    descripcion: "Contrato privado de compraventa por acciones y derechos",
                },
                {
                    nombre: "Contado",
                    descripcion: "Contrato notariado de compraventavpor acciones y derechos",
                }
            ]
        },
        aspectoComercial: {
            precio: [
                {
                    etapa: "Primera Etapa",
                    minimo: 79200,
                    maximo: 204065,
                    promedio: 95826.20,
                },
            ],
            separacion: 500,
            adicional: "07 dias calendario para completar la inicial",
            inicial: [
                {
                    etapa: "Primera Etapa",
                    porcentaje: 10,
                    pagoInicial: 9582.62
                },
            ],
            cuotas: [
                {
                    etapa: "Primera Etapa",
                    pagoCuota: 1031.40,
                    hasta: 96,
                },
            ],
            maximoCuotas: 96,
            intereses: "9% TCEA - 0.72% TCEM"
        },
        informacion: {
            empresa: "INMOBILIARIA & ARQUITECTURA 360 S.A.C.",
            ruc: 20607207969,
            numeroPartida: 20224149095,
            entrega: new Date(2025,12,30),
            pGracia: new Date(2026,6,30),
            zorem: "http://crisostomo.zorem.pe/etapas/lotes/34",
            cuentasDeposito: [
                {
                    nombre: "Banco Continental (BBVA)",
                    img: "assets/img/logos/logo_bbva.png",
                    cuentaCorriente: "0011-0053-0100013877",
                    cuentaInterbancaria: "0011-0053-000100013877-64"
                },
                {
                    nombre: "Banco de Credito del Peru",
                    img: "assets/img/logos/logo_bcp.png",
                    cuentaCorriente: "380-8967-965-0-85",
                    cuentaInterbancaria: "002-380-008967965085"
                }
            ]
        },
        colores: {
            primario: "#406960",
            secundario: "#53BCBB",
            terciario:"#20B7C8",
            cuartenario: "#1398A4"
        }
    }
];