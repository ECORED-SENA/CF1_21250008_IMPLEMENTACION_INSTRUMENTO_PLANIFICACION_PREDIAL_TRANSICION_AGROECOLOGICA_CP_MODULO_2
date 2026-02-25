export default {
  global: {
    Name: 'Fundamentos productivos para el diagnóstico predial',
    Description:
      'Este componente aborda los fundamentos ecológicos de la transición agroecológica y las estrategias prediales para enfrentar la crisis ambiental desde una perspectiva integral. Se analizan los impactos del modelo agroindustrial sobre los ecosistemas, la ruptura con los saberes locales y los límites planetarios que condicionan la sostenibilidad territorial. A partir de este diagnóstico, se promueve el diseño y aplicación de soluciones agroecológicas para la conservación de la biodiversidad, el cuidado del agua y el manejo de residuos, integrando prácticas adaptadas al contexto, monitoreo comunitario y recuperación de relaciones equilibradas entre producción y ambiente.',
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
        download: 'downloads/21250008_CF01_DU.pdf',
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
        'Acevedo, Á., y Jiménez, N. (Comps.). (2019). Agroecología: Experiencias comunitarias para la agricultura familiar en Colombia. Corporación Universitaria Minuto de Dios – Uniminuto; Editorial Universidad del Rosario.',
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
        'Ángel Maya, A. (2013). El reto de la vida: Ecosistema y cultura (2.ª ed.). Ecofondo; Universidad Nacional de Colombia.',
      link: '',
    },
    {
      referencia:
        'Armbrecht, I. (2016). Agroecología y biodiversidad. Universidad del Valle.',
      link: '',
    },
    {
      referencia:
        'Climate Change Institute. (2024). Daily Surface Air Temperature – World (ERA5). Climate Reanalyzer, University of Maine.',
      link: 'https://climatereanalyzer.org/clim/t2_daily/?dm_id=world',
    },
    {
      referencia:
        'Cruz Hincapié, A. (2013). Caracterización y manejo de residuos sólidos de siete predios en Salento, Quindío. Universidad del Tolima.',
      link: '',
    },
    {
      referencia:
        'FAO. (2020). Global Forest Resources Assessment 2020: Key findings. Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      link: '',
    },
    {
      referencia:
        'Giraldo, O. F., y Toro, I. F. (2020). Afectividad ambiental: Sensibilidad, empatía, estéticas del habitar. El Colegio de la Frontera Sur; Universidad Veracruzana.',
      link:
        'https://laoms.org/wp-content/uploads/2020/12/Afectividad-Ambiental-1.pdf',
    },
    {
      referencia: 'IICA. (2021). Gestión y manejo del agua en la agricultura.',
      link:
        'https://repositorio.iica.int/server/api/core/bitstreams/846ee73e-15d2-4aa6-a932-7ff27be5342f/content',
    },
    {
      referencia:
        'Ortega, D. (2011). Diagnóstico sobre la gestión y el uso del agua en el sector agropecuario de Nuevo León. Instituto del Agua del Estado de Nuevo León.',
      link: '',
    },
    {
      referencia:
        'Páez Barón, E. M., Corredor Camargo, E. S., y Fonseca Carreño, J. A. (2019). Metodologías para la estimación de sostenibilidad agropecuaria. Universidad Nacional Abierta y a Distancia.',
      link:
        'https://libros.unad.edu.co/index.php/selloeditorial/catalog/view/98/95/422',
    },
    {
      referencia:
        'Pérez, E. (2022). Métodos para el diagnóstico ambiental de suelos. Universidad del Cauca.',
      link: '',
    },
    {
      referencia:
        'Reyes-García, V. (2010). Conocimiento ecológico tradicional para la conservación: Dinámicas y conflictos. Papeles de relaciones ecosociales y cambio global, (107), 1–12. FUHEM Ecosocial.',
      link:
        'https://www.fuhem.es/media/cdv/file/biblioteca/PDF%20Papeles/107/Conocimiento_ecologico_tradicional.pdf',
    },
    {
      referencia:
        'Rockström, J., Gupta, J., Qin, D., Lade, S. J., Abrams, J. F., Andersen, L. S., Armstrong McKay, D. I., Bai, X., Bala, G., Bunn, S. E., Ciobanu, D., DeClerck, F., Ebi, K., Gifford, L., Gordon, C., Hasan, S., Kanie, N., Lenton, T. M., Loriani, S., Zhang, X. (2023). Safe and just Earth system boundaries. Nature, 619(7968), 102–111.',
      link: 'https://doi.org/10.1038/s41586-023-06083-8',
    },
    {
      referencia:
        'Sarandón, S. J. (Coord.). (2020). Biodiversidad, agroecología y agricultura sustentable. Editorial de la Universidad Nacional de La Plata.',
      link:
        'https://agroecologia.net/wp-content/uploads/2020/12/biodiversidad-agroecologia-santiago-sarandon.pdf',
    },
    {
      referencia:
        'Simón Ruiz, I., y Aravena Rodríguez, B. (2021). El ciclo hidrosocial: Una propuesta didáctica desde la historia, la geografía, las ciencias sociales y la educación para la ciudadanía. Centro de Comunicación de las Ciencias, Universidad Autónoma de Chile.',
      link: '',
    },
    {
      referencia:
        'TecScience. (2023). ¿Cómo la salud de los océanos impacta en el blanqueamiento del coral?. Tecnológico de Monterrey.',
      link:
        'https://tecscience.tec.mx/es/humano-social/blanqueamiento-del-coral/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Alava Arévalo',
          cargo: 'Instructor Técnico',
          centro:
            'Centro Internacional de Producción Limpia Lope - Regional Nariño',
        },
        {
          nombre: 'Gonzalo Cardona',
          cargo: 'Coordinador Colombia',
          centro: 'Agrónomos y Veterinarios sin Fronteras (AVSF)',
        },
        {
          nombre: 'Pablo Aguirre',
          cargo: 'Coordinador',
          centro:
            'Proyecto Apoyo a la Reforma Rural Integral en Colombia (ARRIC) Agrónomos y Veterinarios sin Fronteras (AVSF)',
        },
        {
          nombre: 'Jenny Gómez',
          cargo: 'Asistente Técnica',
          centro:
            'Proyecto Apoyo a la Reforma Rural Integral en Colombia (ARRIC) Agrónomos y Veterinarios sin Fronteras (AVSF)',
        },
        {
          nombre: 'Roger García',
          cargo: 'Consultor',
          centro:
            'Proyecto Apoyo a la Reforma Rural Integral en Colombia (ARRIC) Agrónomos y Veterinarios sin Fronteras (AVSF)',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora Instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Geraldine Viviana Fernández',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Ángulo Rodriguez',
          cargo: 'Desarrollador <i>Fullstack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
