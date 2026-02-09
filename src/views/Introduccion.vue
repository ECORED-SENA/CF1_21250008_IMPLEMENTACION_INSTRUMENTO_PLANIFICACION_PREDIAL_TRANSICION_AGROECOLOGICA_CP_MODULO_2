<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.py-4

        .row.align-items-center.mb-5
          .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src="@/assets/curso/introduccion/intro_foto_01.png" alt="Agricultor con sombrero y canasta de productos" style="max-width: 295px").m-auto
          .col-lg-9(data-aos="fade-left")
            p.mb-4 Damos continuidad a la Ruta Formativa del Instrumento de Planificación Predial para la Transición Agroecológica (IPPTA), un recorrido pedagógico por cuatro Estaciones Formativas, cada una diseñada para fortalecer la comprensión integral del territorio y proyectar soluciones contextualizadas.

            //- Sección 2: fondo verde full-width — texto izquierda + foto derecha
            .bg-color-1
              .row.justify-content-center.align-items-center
                .col-xl(data-aos="fade-left")
                  .px-4
                    p.my-0 En la segunda de las cuatro estaciones nos enfocamos en la producción como tal. La Estación Productiva del IPPTA traza caminos para transformar el predio en un espacio de diversidad, regeneración y autonomía. Esta estación profundiza en el diseño técnico-funcional del agroecosistema, reconociendo que producir con criterios agroecológicos implica comprender las causas estructurales de la crisis del sistema agroalimentario para proyectar alternativas desde el territorio.
                .col-xl-auto(data-aos="fade-right")
                  img(src="@/assets/curso/introduccion/intro_foto_02.png", style="max-width: 435px", alt="").m-auto.mt-xl-0.mt-4


        //- Sección 3: barra amarilla highlight
        .bg-color-2
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0(data-aos="fade-right")
                img(src="@/assets/curso/introduccion/intro_icono_01.svg" style="max-width: 90px" alt="Icono Estación Socioeconómica").mx-auto
              .col-lg(data-aos="fade-left")
                p.mb-0 La siguiente parada será la Estación Socioeconómica, donde exploraremos las dimensiones sociales, culturales y económicas que configuran los sistemas de vida rurales. Aquí se analizarán las dinámicas comunitarias, los circuitos económicos locales y las estrategias de fortalecimiento territorial.

        //- Sección 4: icono+texto izquierda + foto derecha
        .bg-color-3
          .row.align-items-center.mb-5.mt-5
            .col-lg-8(data-aos="fade-right")
              .px-4
                .row.align-items-center.mb-4
                  .col-lg-auto.d-none.d-lg-block
                    img(src="@/assets/curso/introduccion/intro_icono_02.svg" style="max-width: 85px" alt="Icono ondas Estación Final").mx-auto
                  .col-lg.pt-4.pt-lg-0
                    p.mb-0 Finalmente, llegaremos a la #[b Estación Final], espacio de síntesis y articulación. En ella se integrarán los resultados de cada componente: diagnósticos, indicadores, mapas temáticos y propuestas de transición agroecológica, consolidando el IPPTA como herramienta para la planificación predial contextualizada, equitativa y regenerativa.
                p(data-aos="fade-right") La transición agroecológica emerge como respuesta a una crisis profunda del modelo productivo dominante. Este sistema ha priorizado la producción monoespecífica sobre la salud de los ecosistemas, generando altos niveles de productividad que han debilitado la fertilidad del suelo, contaminado fuentes hídricas, reducido la biodiversidad y fragmentado los paisajes rurales.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src="@/assets/curso/introduccion/intro_foto_03.png" alt="Mujer campesina con racimo de bananos").m-auto

        //- Sección 5: foto izquierda + texto+icono derecha
        .row.align-items-center.mb-5
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src="@/assets/curso/introduccion/intro_foto_04.png" alt="Invernadero con surcos de cultivos").m-auto
          .col-lg-8(data-aos="fade-left")
            p.mb-4 La expansión del monocultivo, el uso intensivo de agroquímicos, la mecanización sin criterios ecológicos y la homogeneización de prácticas productivas han alterado los equilibrios ecológicos y culturales del territorio. Esta crisis afecta también la soberanía alimentaria, la salud rural y la autonomía de las comunidades, al imponer lógicas externas que desplazan saberes locales y formas tradicionales de producción.
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/introduccion/intro_icono_03.svg" style="max-width: 85px" alt="Icono manos con planta").mx-auto
              .col-lg
                p.mb-0 Desde esta estación, se propone una lectura crítica de los síntomas del colapso productivo en el predio y el paisaje, reconociendo las señales que permiten activar procesos de restauración. La transición agroecológica se fortalece al reconstruir la relación entre producción y naturaleza, integrando diversidad, regeneración y diálogo de saberes en cada decisión predial.

</template>

<script>
export default {
  name: 'Introduccion',
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
