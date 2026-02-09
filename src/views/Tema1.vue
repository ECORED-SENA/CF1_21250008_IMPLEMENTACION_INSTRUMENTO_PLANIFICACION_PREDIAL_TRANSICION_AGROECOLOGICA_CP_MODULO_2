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
          .col-lg-6.mb-4(data-aos="fade-up")
            .bg-color-4.p-4.rounded-3
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/3.png" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
                .col-lg
                  p.mb-0 Reducción de la agrobiodiversidad.
          .col-lg-6.mb-4(data-aos="fade-up")
            .bg-color-4.p-4.rounded-3
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/4.png" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
                .col-lg
                  p.mb-0 Fragmentación de los paisajes rurales.
          .col-lg-6.mb-4(data-aos="fade-up")
            .bg-color-4.p-4.rounded-3
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/5.png" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
                .col-lg
                  p.mb-0 Contaminación de fuentes hídricas.
          .col-lg-6.mb-4(data-aos="fade-up")
            .bg-color-4.p-4.rounded-3
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/6.png" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
                .col-lg
                  p.mb-0 Pérdida de saberes y prácticas tradicionales. 
          .col-lg-6.mb-4(data-aos="fade-up")
            .bg-color-4.p-4.rounded-3
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/7.png" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
                .col-lg
                  p.mb-0 Empobrecimiento y compactación del suelo.

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
        p.mt-4 Como resultado, se han alterado profundamente los equilibrios ecológicos y culturales del territorio, afectando también la soberanía alimentaria, la salud rural y la autonomía de las comunidades.
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
        p.mb-4 El uso intensivo de fertilizantes sintéticos es una de las expresiones más claras del quiebre entre la agricultura industrial y los procesos ecológicos que sostienen la fertilidad natural del suelo. En el marco del #[em Sistema Agroalimentario Dominante (SAD)], estos insumos se promovieron como estrategia para mantener altos niveles de productividad, sin considerar sus efectos sobre los ciclos biogeoquímicos y la vida del suelo.
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
        .bg-color-5.p-4.rounded-3.mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/svg/12.svg" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
            .col-lg
              p.mb-0 En lugar de fomentar procesos como la #[b simbiosis con microorganismos], la #[b descomposición de materia orgánica] o la #[b diversificación biológica], los fertilizantes sintéticos simplifican la nutrición vegetal, desvinculándola de su base ecológica. Esta desconexión afecta la #[b estructura del suelo], su #[b capacidad de retención de agua], y genera una #[b dependencia creciente de insumos externos].
      .col-lg-5.mb-3.mb-lg-0(data-aos="fade-left")
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
        SlyderF(columnas="col-lg-6 col-xl-4")
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

    //- ## bloquefoto-card (con indentación: //p + //list + //p)
    .bg-color-7.rounded-3.overflow-hidden.mb-5(data-aos="fade-up")
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

<style lang="sass"></style>
