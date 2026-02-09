export default {
  global: {
    Name: 'Fundamentos productivos para el diagnóstico predial',
    Description:
      'Componente formativo orientado a fortalecer el diagnóstico predial productivo y la transición agroecológica mediante criterios de manejo del suelo, agrobiodiversidad, autonomía funcional y elaboración de mapas productivos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos productivos de la transición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sistema Agroalimentario Dominante - SAD',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Impactos del sistema agroalimentario dominante (SAD)',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Introducción al diagnóstico predial productivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Importancia del diagnóstico predial productivo en la transición agroecológica',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Relación del diagnóstico con el IPPTA y la planificación territorial',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Principio de la transición agroecológica',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Enfoque integral del predio',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Suelo como organismo vivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Componentes de un suelo fértil',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Bioindicadores de la calidad del suelo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Agrobiodiversidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Dimensiones de la agrobiodiversidad',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de biodiversidad en el agroecosistema',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Semillas nativas y criollas',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Diversidad vegetal',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Diversidad animal',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Autonomía funcional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Integración de animales y cultivos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Autonomía alimentaria',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Elaboración de mapas productivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Uso y cobertura del suelo',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Zonas de concentración',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Zonas de descarga',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo:
              'Fichas de diagnóstico: síntesis territorial para la toma de decisiones',
            hash: 't_6_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Fundamentos productivos de la transición',
      referencia:
        'ONU Colombia. (2021, 26 agosto). Transiciones agroecológicas: prácticas y experiencias [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Wtjdi0POvxU',
    },
    {
      tema: 'Fundamentos productivos de la transición',
      referencia:
        'Agencia de Desarrollo Rural Colombia. (2024, 18 octubre). Tutorial del Instrumento de Planificación Predial para la Transición Agroecológica - IPPTA [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pE801QBON00',
    },
    {
      tema: 'Suelo como organismo vivo',
      referencia: 'Teachers For Future Spain. (s. f.). El suelo.',
      tipo: 'Sitio web',
      link: 'https://teachersforfuturespain.org/el-suelo/',
    },
  ],
  glosario: [
    {
      termino: 'Agroecosistema',
      significado:
        'Sistema vivo y complejo que integra la actividad agrícola con los componentes ecológicos (bióticos y abióticos) del entorno, buscando la sostenibilidad y resiliencia.',
    },
    {
      termino: 'Agroecología',
      significado:
        'Enfoque que promueve la transición de los sistemas productivos hacia modelos más sostenibles y resilientes, integrando la conservación de los recursos naturales con la productividad.',
    },
    {
      termino:
        'IPPTA (Instrumento de Planificación Predial para la Transición Agroecológica)',
      significado:
        'Herramienta técnica y conceptual, fundamentada en el diagnóstico detallado, que estructura acciones concretas para guiar la finca hacia la sostenibilidad agroecológica.',
    },
    {
      termino: 'Planificación territorial',
      significado:
        'Proceso de gestión a escalas mayores (veredas, municipios, cuencas) con el que el diagnóstico predial debe alinearse para garantizar coherencia entre decisiones de la finca y objetivos de desarrollo rural y conservación.',
    },
    {
      termino: 'Resiliencia ecológica',
      significado:
        'Capacidad de los sistemas naturales y productivos para adaptarse y recuperarse frente a perturbaciones, fortalecida por la diversificación y el manejo adaptativo.',
    },
    {
      termino: 'Sistema agroalimentario dominante',
      significado:
        'Conjunto de prácticas, actores e infraestructuras del modelo agroalimentario predominante, basado en lógica de mercado y productividad intensiva, con impactos sobre ecosistemas, salud y soberanía alimentaria.',
    },
    {
      termino: 'Servicios ecosistémicos',
      significado:
        'Beneficios que la naturaleza provee al ser humano, como regulación hídrica, control de erosión, polinización y captura de carbono.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acevedo, A., y Jiménez, N. (Comps.). (2019). Agroecología: Experiencias comunitarias para la agricultura familiar en Colombia. Corporación Universitaria Minuto de Dios – Uniminuto; Editorial Universidad del Rosario.',
      link:
        'https://repository.uniminuto.edu/server/api/core/bitstreams/cbb44aa8-a288-4a83-85bf-8ecc2c4ec430/content',
    },
    {
      referencia:
        'Amazon Conservation Team; The Nature Conservancy. (2020). Guía práctica de reconversión de un sistema ganadero extensivo en un sistema con prácticas de ganadería sostenible.',
      link:
        'https://www.nature.org/content/dam/tnc/nature/en/documents/AFC_Guia_Asistencia_tecnica_paginas_baja.pdf',
    },
    {
      referencia:
        'Armbrecht, I. (2016). Agroecología y biodiversidad. Universidad del Valle.',
      link: '',
    },
    {
      referencia: 'IICA. (2021). Gestión y manejo del agua en la agricultura.',
      link:
        'https://repositorio.iica.int/server/api/core/bitstreams/846ee73e-15d2-4aa6-a932-7ff27be5342f/content',
    },
    {
      referencia:
        'Rockström, J., et al. (2023). Safe and just Earth system boundaries. Nature, 619(7968), 102–111.',
      link: 'https://doi.org/10.1038/s41586-023-06083-8',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
