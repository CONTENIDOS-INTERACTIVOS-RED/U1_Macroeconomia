export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Introducción a la macroeconomía',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Concepto de la Macroeconomía y objetivos principales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto de la Macroeconomía',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Concepto de Microeconomía',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Objetivos de la macroeconomía',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diferencia entre microeconomía y macroeconomía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Visión amplia de la microeconomía y la macroeconomía',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Diferencias entre microeconomía y macroeconomía',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Aplicaciones y políticas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Métodos de análisis',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Ejemplos de los enfoques Micro y macroeconómicos',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Variables macroeconómicas: PIB, inflación, desempleo, balanza de pagos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Producto Interno Bruto (PIB)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Inflación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Desempleo',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Balanza de pagos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Zevallos Avilés, G. (2016). Macroeconomía fundamental I. Difusora Larousse - Ediciones Pirámide.',
      link: 'https://elibro.net/es/lc/tecnologicodeloriente/titulos/49174',
    },
    {
      referencia:
        'Tavera Camacho, I. (2020). Panorámica de la macroeconomía. Grupo Editorial Éxodo.',
      link: 'https://elibro.net/es/lc/tecnologicodeloriente/titulos/130333',
    },
    {
      referencia:
        'Sánchez Campillo, J. (2015). Macroeconomía: cuestiones y ejercicios. Difusora Larousse - Ediciones Pirámide.',
      link: 'https://elibro.net/es/lc/tecnologicodeloriente/titulos/49019',
    },
    {
      referencia:
        'Eggers, F. G. (2016). Elementos de micro y macroeconomía. Editorial Maipue.',
      link: 'https://elibro.net/es/lc/tecnologicodeloriente/titulos/77331',
    },
    {
      referencia:
        'Torres Chacón, J. (2016). Apuntes de macroeconomía avanzada. Servicio de Publicaciones y Divulgación Científica de la Universidad de Málaga.',
      link: 'https://elibro.net/es/lc/tecnologicodeloriente/titulos/60697',
    },
    {
      referencia:
        'Rodríguez Galván, J. Y. (2023). Macroeconomía: teoría y ejercicios (1 ed.). Grupo Editorial Éxodo.',
      link: 'https://elibro.net/es/lc/tecnologicodeloriente/titulos/234711',
    },
  ],
  glosario: [
    {
      termino: 'Balanza de pagos',
      significado:
        'Registra todas las transacciones económicas de un país con el resto del mundo, incluyendo exportaciones, importaciones, inversiones y transferencias. Su análisis permite evaluar la estabilidad financiera de un país.',
    },
    {
      termino: 'Desempleo',
      significado:
        'Situación en la que una parte de la población económicamente activa no tiene empleo y está buscando trabajo. Su medición es un indicador clave del rendimiento del mercado laboral.',
    },
    {
      termino: 'Economía',
      significado:
        'Ciencia que estudia la producción, distribución y consumo de bienes y servicios, y cómo los recursos limitados se asignan para satisfacer las necesidades humanas. Se divide en microeconomía y macroeconomía.',
    },
    {
      termino: 'Macroeconomía',
      significado:
        'Rama de la economía que estudia los agregados económicos a nivel nacional o global, como el producto nacional, el ingreso, el empleo, la inflación y la balanza de pagos.',
    },
    {
      termino: 'Microeconomía',
      significado:
        'Parte de la economía que estudia el comportamiento de los agentes individuales, como consumidores, empresas y trabajadores, y cómo interactúan en mercados específicos.',
    },
    {
      termino: 'Inflación',
      significado:
        'Aumento generalizado y sostenido en los precios de bienes y servicios en una economía durante un periodo prolongado. Es un indicador clave de la estabilidad económica y el poder adquisitivo.',
    },
    {
      termino: 'PIB (Producto Interno Bruto)',
      significado:
        'Valor total de los bienes y servicios producidos dentro de un país en un periodo determinado. Es uno de los principales indicadores de la actividad económica.',
    },
    {
      termino: 'Política económica',
      significado:
        'Conjunto de medidas adoptadas por el gobierno para influir en el comportamiento económico de un país. Incluye políticas fiscales, monetarias, comerciales y laborales.',
    },
    {
      termino: 'Política fiscal',
      significado:
        'Estrategia del gobierno que involucra el manejo de los impuestos y el gasto público para influir en la economía, como el control de la inflación, el desempleo y el crecimiento económico.',
    },
    {
      termino: 'Política monetaria',
      significado:
        'Acciones llevadas a cabo por un banco central para controlar la cantidad de dinero en circulación, las tasas de interés y la oferta de crédito, con el objetivo de garantizar la estabilidad económica.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
