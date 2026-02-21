<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos productivos de la transición

    //- ## bloque-texto-g
    .bloque-texto-g.bg-color-8.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La urgencia de la transición agroecológica es motivada por la crisis productiva que atraviesa el planeta y sus externalidades concretas en los territorios rurales. Esta unidad temática permite analizar las causas estructurales del impacto del sistema agroalimentario dominante en las bases de la producción agropecuaria, los equilibrios naturales y la urgencia de recuperar prácticas de manejo adecuadas a las bases de la producción.

    //- ## Separador
    Separador

    //- ### 1.1. Sistema Agroalimentario Dominante - SAD
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1. Sistema Agroalimentario Dominante - SAD

    //- //p
    p.mb-5 La transición agroecológica se plantea como una #[b respuesta a la crisis profunda del modelo productivo convencional]. El SAD ha priorizado la #[b productividad inmediata] por encima de la salud de los ecosistemas, generando consecuencias graves:

    //- ## imagen-compuesto 4:8 (5 bgcolor-icono-texto con grid 6)
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/2.png" alt="")
      .col-lg-8(data-aos="fade-left")
        .row
          .col-lg-6.mb-3(data-aos="fade-up")
            .bg-color-4.p-3.rounded-3
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/3.png" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
                .col-lg
                  p.mb-0.text-center.text-lg-start Reducción de la agrobiodiversidad.
          .col-lg-6.mb-3(data-aos="fade-up")
            .bg-color-4.p-3.rounded-3
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/4.png" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
                .col-lg
                  p.mb-0.text-center.text-lg-start Fragmentación de los paisajes rurales.
          .col-lg-6.mb-3(data-aos="fade-up")
            .bg-color-4.p-3.rounded-3
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/5.png" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
                .col-lg
                  p.mb-0.text-center.text-lg-start Contaminación de fuentes hídricas.
          .col-lg-6.mb-3(data-aos="fade-up")
            .bg-color-4.p-3.rounded-3
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/6.png" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
                .col-lg
                  p.mb-0.text-center.text-lg-start Pérdida de saberes y prácticas tradicionales.
          .col-lg-6.mb-3(data-aos="fade-up")
            .bg-color-4.p-3.rounded-3
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/7.png" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
                .col-lg
                  p.mb-0.text-center.text-lg-start Empobrecimiento y compactación del suelo.

    //- ## compuesto-imagen 9:3
    .row.align-items-center.mb-5
      .col-lg-9(data-aos="fade-right")
        p.mb-4 Este modelo ha promovido:
        .bg-color-7.overflow-hidden
          .row.align-items-center
            .col-xl-7.ps-5.pe-3
              .tarjeta.bg-white.p-4
                ul.lista-ul.mb-0
                  li
                    i.fas.fa-circle-check
                    | Monocultivo extensivo.
                  li
                    i.fas.fa-circle-check
                    | Uso intensivo de agroquímicos.
                  li
                    i.fas.fa-circle-check
                    | Mecanización sin criterios ecológicos.
                  li.mb-0
                    i.fas.fa-circle-check
                    | Homogeneización de prácticas productivas.
            .col-xl-5
              figure
                img(src="@/assets/curso/tema1/8.png" alt="").img-fluid
        p.mt-4 Como resultado, se han alterado profundamente los #[b equilibrios ecológicos y culturales del territorio], afectando también la #[b soberanía alimentaria], la #[b salud rural] y la #[b autonomía de las comunidades].
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/9.png" alt="").m-auto

    //- ## bgcolor-icono-texto
    .bg-color-6.p-4.rounded-3.mb-5(data-aos="fade-up")
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/tema1/10.png" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
        .col-lg
          p.mb-0 Desde esta perspectiva, se propone una lectura crítica de los síntomas del colapso productivo, tanto en el predio como en el paisaje, reconociendo las señales que permiten activar procesos de restauración. La transición agroecológica se fortalece al reconstruir la relación entre producción y naturaleza, incorporando diversidad, regeneración y diálogo de saberes en cada decisión productiva.

    //- ### 1.2 Impactos del sistema agroalimentario dominante (SAD)
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Impactos del sistema agroalimentario dominante (SAD)

    //- ## imagen-compuesto 4:8 (//p + //bgcolor-texto con indentación)
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/11.png" alt="")
      .col-lg-8(data-aos="fade-left")
        p.mb-4 El uso intensivo de fertilizantes sintéticos es una de las expresiones más claras del quiebre entre la agricultura industrial y los procesos ecológicos que sostienen la fertilidad natural del suelo. En el marco del  <b>Sistema Agroalimentario Dominante (SAD)</b>, estos insumos se promovieron como estrategia para mantener altos niveles de productividad, sin considerar sus efectos sobre los ciclos biogeoquímicos y la vida del suelo.
        .bg-color-5.p-4.rounded-3
          p Elaborados mediante procesos químicos de alta energía, los fertilizantes sintéticos sustituyen los mecanismos naturales de reciclaje de nutrientes, lo que altera profundamente el equilibrio del agroecosistema. Desde una perspectiva ecológica, introducen concentraciones excesivas de nitrógeno y fósforo, superando la capacidad de absorción de las plantas y del suelo. Esto genera:
          ol.lista-ol--cuadro
            li
              .lista-ol--cuadro__vineta
                span a
              | Acumulación superficial de nutrientes.
            li
              .lista-ol--cuadro__vineta
                span b
              | Lixiviación hacia fuentes hídricas.
            li
              .lista-ol--cuadro__vineta
                span c
              | Alteración de la microbiota del suelo.
            li
              .lista-ol--cuadro__vineta
                span d
              | Reducción de la fertilidad regenerativa.

    //- ## compuesto-imagen 7:5
    .row.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        .bg-color-9.p-4.rounded-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/svg/12.svg" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
            .col-lg
              p.mb-0 En lugar de fomentar procesos como la #[b simbiosis con microorganismos], la #[b descomposición de materia orgánica] o la #[b diversificación biológica], los fertilizantes sintéticos simplifican la nutrición vegetal, desvinculándola de su base ecológica. Esta desconexión afecta la #[b estructura del suelo], su #[b capacidad de retención de agua], y genera una #[b dependencia creciente de insumos externos].
      .col-lg-5.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/13.png" alt="").m-auto

    //- //p (suelto)
    p.mb-5 Además, el exceso de nutrientes puede alcanzar cuerpos de agua cercanos, provocando #[b procesos de eutrofización], que deterioran la calidad del agua, reducen el oxígeno disponible y afectan la biodiversidad acuática, con impactos negativos para el uso comunitario y los servicios ecosistémicos.

    //- #### Principales impactos del uso de fertilizantes sintéticos
    .titulo-h3.mb-5(data-aos="fade-right")
      .titulo-h3__fondo
        img.titulo-h3__imagen(src="@/assets/bullets/title-h3.svg")
        h3.titulo-h3__texto Principales impactos del uso de fertilizantes sintéticos

    //- //p
    p.mb-5 Los efectos negativos más relevantes que genera el uso prolongado de fertilizantes sintéticos sobre el suelo, el agua y la autonomía productiva del agroecosistema:

    //- //wrapper: bg-fondo-1 + ## carrusel-tarjetas-icono
    .bg-full-width.bg-fondo-2.mb-5
      .px-4.px-md-5.py-4
        SlyderF(columnas="col-lg-6 col-xl-3")
          .tarjeta.bg-white.p-4.shadow(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema1/svg/14.svg" alt="")
            h5.text-center Interrupción de los ciclos del nitrógeno y fósforo
            p.mb-0.text-center Saturación del suelo y contaminación de aguas superficiales y subterráneas.
          .tarjeta.bg-white.p-4.shadow(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema1/svg/15.svg" alt="")
            h5.text-center Alteración de la microbiota del suelo
            p.mb-0.text-center Pérdida de vida edáfica y reducción de la fertilidad regenerativa.
          .tarjeta.bg-white.p-4.shadow(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema1/svg/16.svg" alt="")
            h5.text-center Desvinculación del manejo ecológico
            p.mb-0.text-center Nutrición vegetal simplificada, desconectada de procesos simbióticos y orgánicos.
          .tarjeta.bg-white.p-4.shadow(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema1/svg/17.svg" alt="")
            h5.text-center Eutrofización de ecosistemas acuáticos
            p.mb-0.text-center Proliferación de algas, pérdida de oxígeno y deterioro de la biodiversidad y servicios ecosistémicos.
          .tarjeta.bg-white.p-4.shadow(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema1/svg/18.svg" alt="")
            h5.text-center Dependencia de insumos externos
            p.mb-0.text-center Aumento de costos de producción y pérdida de autonomía predial.

        br
        br
        br
        br
        br
        br

    //- ## bloquefoto-card (con indentación: //p + //list + //p)
    .bg-color-7.rounded-3.overflow-hidden.mb-5(data-aos="fade-up" style="margin-top: -7rem")
      .row.align-items-center
        .col-xl-7.ps-5.pe-3.py-4
          .tarjeta.bg-white.p-4
            p.mt-2 La #[b transición agroecológica] busca #[b restaurar estos equilibrios] mediante prácticas regenerativas como:
            ul.lista-ul
              li
                i.fas.fa-circle-check
                | Uso de materia orgánica.
              li
                i.fas.fa-circle-check
                | Rotación de cultivos.
              li
                i.fas.fa-circle-check
                | Asociación con leguminosas.
              li
                i.fas.fa-circle-check
                | Aplicación de biofertilizantes producidos localmente.
            p.mb-2 Estas prácticas contribuyen a fortalecer la #[b fertilidad viva del suelo], disminuyendo la dependencia de insumos industriales y promoviendo sistemas más resilientes, autónomos y ecológicamente equilibrados.
        .col-xl-5
          figure
            img(src="@/assets/curso/tema1/19.png" alt="").img-fluid

    //- #### Fertilizantes sintéticos y alteración de los ciclos biogeoquímicos
    .titulo-h3.mb-5(data-aos="fade-right")
      .titulo-h3__fondo
        img.titulo-h3__imagen(src="@/assets/bullets/title-h3.svg")
        h3.titulo-h3__texto Fertilizantes sintéticos y alteración de los ciclos biogeoquímicos

    //- //p
    p.mb-5 A continuación, se presenta un video que analiza los impactos ecológicos del uso de fertilizantes sintéticos en la agricultura industrial y su relación con la alteración de los ciclos biogeoquímicos, destacando la necesidad de una transición hacia prácticas agroecológicas regenerativas.

    //- ## video
    figure.mb-5(data-aos="fade-up")
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.mt-2 Título del video

    //- #### Homogeneización productiva y lógica contra natura
    .titulo-h3.mb-5(data-aos="fade-right")
      .titulo-h3__fondo
        img.titulo-h3__imagen(src="@/assets/bullets/title-h3.svg")
        h3.titulo-h3__texto Homogeneización productiva y lógica #[em contra natura]

    //- ## compuesto-imagen 8:4
    .row.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .bg-color-9.p-4.rounded-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/svg/20.svg" style="max-width: 167px" alt="").m-auto.mb-4.mb-lg-0
            .col-lg
              .tarjeta.bg-white.p-4
                p.mb-0 La pérdida de diversidad en los sistemas agropecuarios contemporáneos no es solo un fenómeno ecológico, sino también #[b cultural]. Refleja una #[b ruptura profunda con las formas tradicionales de habitar y producir] en el territorio, y responde a la #[b lógica impuesta por el Sistema Agroalimentario Dominante (SAD)], que prioriza la #[b eficiencia técnica], la #[b estandarización] y la #[b especialización productiva], ignorando los #[b ritmos ecológicos] y las #[b dinámicas culturales].
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/21.png" alt="").m-auto

    //- //p (suelto)
    p.mb-5 En muchos territorios rurales, la #[b diversidad que antes caracterizaba los agroecosistemas] ha sido sustituida por esquemas #[b uniformes], diseñados para responder a demandas del mercado y no a las necesidades del territorio. Esto ha transformado el predio en una estructura #[b rígida y frágil], incapaz de adaptarse a cambios climáticos, enfermedades o fluctuaciones del mercado. A continuación se presenta la Estación Productiva del IPPTA, orientada al diseño agroecológico del predio desde una mirada integral y contextualizada:

    //- ## slider
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").tarjeta.bg-white.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/22.png" alt="")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Consecuencias ecológicas
              p.mb-0 Desde una mirada agroecológica, esta homogeneización simplifica los paisajes, reduce la variedad de especies cultivadas y criadas, debilita la biodiversidad funcional y fragmenta ciclos naturales vinculados con la rotación de cultivos, la cobertura vegetal y las interacciones entre especies. Este tipo de manejo rompe la lógica del predio como sistema vivo, restringe su regeneración y limita su capacidad de respuesta ante perturbaciones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/23.png" alt="")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Consecuencias culturales
              p.mb-0 A nivel cultural, la homogeneización desplaza prácticas campesinas tradicionales como la siembra asociada, el barbecho, la crianza múltiple y la selección de semillas. Además, interrumpe la relación entre producción, alimentación, medicina, ritualidad y cuidado del entorno, y erosiona un conjunto de saberes locales que las comunidades han construido históricamente.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/24.png" alt="")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Alternativa agroecológica: rediseñar desde la diversidad
              p.mb-0 La transición agroecológica invita a rediseñar el predio como un sistema diverso e integrado, coherente con las condiciones ecológicas, sociales y culturales de cada territorio. Para ello, se fomentan prácticas como la diversificación de cultivos y animales, la asociación funcional entre especies, las rotaciones planificadas y la integración de zonas de conservación. Estas acciones restauran la resiliencia ecológica, fortalecen la soberanía alimentaria y reconstruyen el vínculo entre la producción y el territorio.

    //- ##### Impactos más relevantes de la homogeneización productiva
    h4.mb-5.titulo-h4(data-aos="fade-right") Impactos más relevantes de la homogeneización productiva

    //- //p
    p.mb-5 A continuación, se enumeran los principales efectos negativos que genera la lógica de homogeneización sobre el agroecosistema y la cultura rural:

    //- ## tarjetas-icono col:4 (sin descripción, solo título)
    .row.mb-5
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .tarjeta.bg-color-5.p-4.shadow.h-100
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src="@/assets/curso/tema1/svg/25.svg" alt="")
          h5.text-center Reducción de la variabilidad de cultivos y animales.
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .tarjeta.bg-color-5.p-4.shadow.h-100
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src="@/assets/curso/tema1/svg/26.svg" alt="")
          h5.text-center Disrupción de las interacciones ecológicas.
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .tarjeta.bg-color-5.p-4.shadow.h-100
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src="@/assets/curso/tema1/svg/27.svg" alt="")
          h5.text-center Desconexión entre prácticas productivas y ritmos naturales.
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .tarjeta.bg-color-5.p-4.shadow.h-100
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src="@/assets/curso/tema1/svg/28.svg" alt="")
          h5.text-center Fragilidad ante enfermedades y variabilidad climática.

    //- ### Dependencia tecnológica y concentración de insumos
    .titulo-h3.mb-5(data-aos="fade-right")
      .titulo-h3__fondo
        img.titulo-h3__imagen(src="@/assets/bullets/title-h3.svg")
        h3.titulo-h3__texto Dependencia tecnológica y concentración de insumos

    //- ## compuesto-imagen 8:4 (bloquefoto + //p)
    .row.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .bg-color-1
          .row.justify-content-center.align-items-center
            .col-xl-auto
              img(src="@/assets/curso/tema1/29.png" style="max-width: 420px" alt="")
            .col-xl
              p.mb-0 Uno de los efectos menos visibles pero más profundos del Sistema Agroalimentario Dominante (SAD) es la pérdida de autonomía tecnológica en los predios rurales, provocada por la concentración del control sobre los insumos básicos de producción.
        p.mt-4 Con la intensificación del SAD, la producción agropecuaria depende cada vez más de insumos externos como semillas híbridas o transgénicas, fertilizantes sintéticos, maquinaria especializada y agroquímicos. Estos insumos son controlados por grandes corporaciones, que imponen sus condiciones desde fuera del territorio, afectando directamente la autonomía económica, técnica y organizativa de las familias campesinas.
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/30.png" alt="").m-auto

    //- ## tarjetas-conectadas
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5(data-aos="fade-right")
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src="@/assets/curso/tema1/svg/31.svg" style="max-width: 90px" alt="").m-auto
          .col
            h4.text-white Consecuencias de la dependencia tecnológica
        p.mb-0 Esta dependencia impone modelos estandarizados que no se ajustan a los suelos, climas, ritmos culturales ni posibilidades económicas. En numerosos predios, se adoptan paquetes tecnológicos completos construidos desde lógicas externas al territorio. Esto transforma al agricultor en un consumidor de tecnologías, debilita su capacidad para experimentar, adaptar y mejorar prácticas locales, y aumenta la fragilidad del sistema productivo ante variaciones de precios, escasez de insumos o interrupciones en los suministros.
      .col-md.tarjeta.color-acento-botones.p-5(data-aos="fade-left")
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src="@/assets/curso/tema1/svg/32.svg" style="max-width: 90px" alt="").m-auto
          .col
            h4 Propuesta agroecológica
        p.mb-0 Desde la perspectiva agroecológica, la transición requiere recuperar capacidades locales para producir insumos propios. Esto integra el uso de semillas criollas y nativas, la elaboración de abonos orgánicos y preparados naturales, herramientas apropiadas y de bajo costo, y la valoración de saberes campesinos y comunitarios. Estas estrategias fortalecen la autonomía funcional, reducen la dependencia del mercado y permiten ajustar el diseño predial a las condiciones reales del territorio.

    //- #### Factores que aumentan la dependencia tecnológica
    h4.mb-5.titulo-h4(data-aos="fade-right") Factores que aumentan la dependencia tecnológica en el ámbito rural

    //- //p
    p.mb-5 A continuación, se presentan los principales factores que fortalecen la dependencia tecnológica en los predios agropecuarios, limitando su capacidad de adaptación y sostenibilidad:

    //- ## imagen-compuesto 4:8 (carrusel-tarjetas)
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/33.png" alt="")
      .col-lg-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.bg-white.p-4.shadow(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema1/svg/34.svg" alt="")
            h5.text-center Control corporativo de insumos
            p.mb-0.text-center Monopolio sobre semillas, fertilizantes, maquinaria y agroquímicos.
          .tarjeta.bg-white.p-4.shadow(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema1/svg/35.svg" alt="")
            h5.text-center Aumento de costos y endeudamiento rural
            p.mb-0.text-center Pérdida de autonomía económica y riesgo financiero para las familias.
          .tarjeta.bg-white.p-4.shadow(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema1/svg/36.svg" alt="")
            h5.text-center Inadecuación tecnológica al contexto local
            p.mb-0.text-center Imposición de soluciones estandarizadas, poco eficaces en condiciones reales del predio.
          .tarjeta.bg-white.p-4.shadow(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema1/svg/37.svg" alt="")
            h5.text-center Pérdida de saberes productivos locales
            p.mb-0.text-center Desvalorización del conocimiento campesino y de la capacidad de innovación territorial.

    //- ### Desarticulación entre producción pecuaria y agrícola
    .titulo-h3.mb-5(data-aos="fade-right")
      .titulo-h3__fondo
        img.titulo-h3__imagen(src="@/assets/bullets/title-h3.svg")
        h3.titulo-h3__texto Desarticulación entre producción pecuaria y agrícola

    //- //p
    p.mb-5 Uno de los efectos más profundos del #[em Sistema Agroalimentario Dominante] (SAD) ha sido la ruptura de la relación funcional entre la producción agrícola y la producción pecuaria. Esta desarticulación ha provocado la fragmentación de los ciclos ecológicos dentro del predio, debilitando su capacidad de regeneración, eficiencia energética y funcionalidad sistémica. A continuación se comparan dos formas de organizar la producción y la propuesta agroecológica para integrar cultivos y animales.

    //- ## slider (4 slides)
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").tarjeta.bg-white.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/38.png" alt="")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Lógica campesina: integración ecológica
              p.mb-0 Históricamente, los sistemas campesinos mantenían una relación circular entre cultivos y animales. Los residuos de cosecha alimentaban al ganado, las excretas fertilizaban los suelos, se cerraban ciclos de nutrientes, se reducía la dependencia de insumos externos y se promovía la acumulación de biomasa y la fertilidad natural. Esta integración sostenía un agroecosistema funcional, resiliente y adaptado al territorio.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/39.png" alt="")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Lógica del SAD: especialización y fragmentación
              p.mb-0 La especialización impulsada por el sistema agroalimentario dominante separó agricultura y ganadería, generando predios exclusivamente agrícolas, donde los residuos vegetales se subutilizan o se queman, y predios exclusivamente pecuarios, donde los animales dependen de concentrados externos y las excretas dejan de aprovecharse. Esta fragmentación convierte subproductos valiosos en residuos contaminantes y dificulta el cierre de ciclos y la generación de fertilidad local.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/40.png" alt="")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Consecuencias de la desarticulación
              p.mb-0 La separación entre ambas actividades provoca ineficiencia ecológica, aumento de costos de producción, mayor dependencia de insumos externos y pérdida de resiliencia ante crisis climáticas, económicas o sanitarias.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/41.png" alt="")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Propuesta agroecológica: restaurar la integración
              p.mb-0 La transición agroecológica propone recuperar la integración entre cultivos y animales como base del diseño predial. Esto contempla planificar la producción de forrajes locales, usar residuos vegetales como alimento animal, transformar excretas en abonos orgánicos y establecer flujos internos de nutrientes, materia y energía. Con ello se fortalece la autonomía funcional, se mejora la eficiencia ecológica y el predio vuelve a operar como un sistema vivo, regenerativo y coherente con su contexto.

    //- //wrapper: bg-fondo-3
    .bg-full-width.bg-fondo-3.mb-5
      .px-4.px-md-5.py-4
        //- ##### Impactos de la desarticulación agrícola-pecuaria
        h4.mb-5.titulo-h4(data-aos="fade-right") Impactos de la desarticulación agrícola-pecuaria

        //- //p
        p.mb-5 A continuación, se resumen los principales impactos que genera la separación entre la producción agrícola y pecuaria, evidenciando cómo esta fragmentación debilita la funcionalidad del agroecosistema y refuerza la dependencia del modelo externo promovido por el SAD.

        //- ## tarjetas-icono 3 (col-lg-3, 4 cards)
        .row.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .tarjeta.bg-color-5.p-4.shadow.h-100
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src="@/assets/curso/tema1/svg/42.svg" alt="")
              h5.text-center Separación de ciclos integrados
              p.mb-0.text-center Se pierde la conexión entre alimentación animal, fertilización del suelo y reciclaje de nutrientes.
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .tarjeta.bg-color-5.p-4.shadow.h-100
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src="@/assets/curso/tema1/svg/43.svg" alt="")
              h5.text-center Subutilización de subproductos animales
              p.mb-0.text-center Las excretas no se transforman en abono ni en  energía; se convierten en residuos contaminantes.
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .tarjeta.bg-color-5.p-4.shadow.h-100
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src="@/assets/curso/tema1/svg/44.svg" alt="")
              h5.text-center Dependencia de insumos externos
              p.mb-0.text-center Mayor uso de concentrados y suplementos alimenticios, aumentando los costos.
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .tarjeta.bg-color-5.p-4.shadow.h-100
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src="@/assets/curso/tema1/svg/45.svg" alt="")
              h5.text-center Reducción de la eficiencia ecológica
              p.mb-0.text-center El predio opera de forma fragmentada, con baja capacidad de regeneración y adaptación.

        //- ### 1.2.6. Pérdida de semillas y saberes
        .titulo-h3.mb-5(data-aos="fade-right")
          .titulo-h3__fondo
            img.titulo-h3__imagen(src="@/assets/bullets/title-h3.svg")
            h3.titulo-h3__texto  Pérdida de semillas y saberes

        //- //p
        p La transformación del sistema agroalimentario bajo lógicas de mercado global ha generado una profunda erosión de la diversidad genética y cultural en los territorios rurales. La imposición de semillas comerciales, híbridas y transgénicas ha desplazado progresivamente las variedades criollas y nativas, junto con los saberes que las acompañan: formas de selección, conservación, intercambio, siembra y uso alimentario. A continuación se presentan los aspectos centrales relacionados con la pérdida de semillas y saberes en los territorios rurales.

    //- ## acordeon 4:8
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/46.png" alt="").mb-4.mb-lg-0
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .div(titulo="Naturaleza de la pérdida")
            p La pérdida no es solo biológica, sino también simbólica y funcional. Las semillas criollas representan una memoria viva del territorio: están adaptadas a sus suelos, climas, ritmos y culturas. Su desaparición implica la ruptura de ciclos de cientos y miles de años de coevolución entre comunidades y paisajes, debilitando la capacidad de adaptación local frente a crisis climáticas, plagas o cambios en la disponibilidad de recursos.
          .div(titulo="Dependencia de semillas externas")
            p La dependencia de semillas externas impone condiciones técnicas que limitan la autonomía campesina. Muchas semillas comerciales requieren paquetes tecnológicos específicos, no pueden reproducirse libremente y están sujetas a regulaciones que favorecen su concentración en manos de grandes empresas. Esto transforma al agricultor en consumidor y al predio en una plataforma de reproducción controlada.
          .div(titulo="Pérdida de saberes tradicionales")
            p Al desaparecer las semillas, también se desvanecen los saberes asociados: calendarios de siembra, rituales de intercambio, prácticas de selección, formas de almacenamiento, recetas tradicionales y vínculos comunitarios. Esta erosión cultural debilita la soberanía alimentaria, la identidad territorial y la capacidad de regeneración desde el conocimiento local.
          .div(titulo="Propuestas de transición agroecológica")
            p La transición agroecológica propone recuperar y fortalecer los sistemas locales de semillas mediante bancos comunitarios, redes de intercambio, reproducción en finca, selección participativa y documentación de saberes. Estas estrategias permiten restaurar la diversidad genética, revitalizar la cultura campesina y consolidar la autonomía predial como base de la resiliencia territorial.

    //- ## compuesto-imagen 8:4 (bloquefoto)
    .row.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .bg-color-5
          .row.justify-content-center.align-items-center
            .col-xl-auto
              img(src="@/assets/curso/tema1/svg/47.svg" style="max-width: 420px" alt="").m-auto.mt-xl-0.mt-4
            .col-xl
              .p-4
                p Los impactos que genera la dominación del sistema agroalimentario son:
                ul.lista-ul.mb-0
                  li
                    i.fas.fa-circle-check
                    | Sustitución de semillas criollas por variedades comerciales.
                  li
                    i.fas.fa-circle-check
                    | Erosión genética y cultural en los sistemas de cultivo.
                  li
                    i.fas.fa-circle-check
                    | Reducción de la capacidad de adaptación local.
                  li.mb-0
                    i.fas.fa-circle-check
                    | Desvinculación de las comunidades de sus prácticas ancestrales.
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/48.png" alt="").m-auto

</template>

<script>
export default {
  name: 'Tema1',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.lista-ol--cuadro__vineta
  span
    color: $black
</style>
