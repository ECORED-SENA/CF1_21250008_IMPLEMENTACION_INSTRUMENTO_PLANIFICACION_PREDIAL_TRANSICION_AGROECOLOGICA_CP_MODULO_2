<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Suelo como organismo vivo

    //- ## imagen-compuesto 4:8 (texto-imagen 5:4 + bgcolor-icono-texto)
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/1.png" alt="")
      .col-lg-8(data-aos="fade-left")
        .row.align-items-center.mb-4
          .col-lg-7
            p.mb-0 En agroecología, el suelo no se considera un simple soporte físico para los cultivos, sino un #[b organismo vivo, dinámico y complejo] que regula los ciclos ecológicos, sostiene la biodiversidad y posibilita la producción de alimentos. Esta visión lo concibe como un sistema que #[b respira, se alimenta, se regenera y responde activamente a las prácticas humanas].
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3/2.png" alt="")
        .bg-color-5.p-4.tarjeta
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/svg/3.svg" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
            .col-lg
              p.mb-0 La #[b salud del suelo] determina en gran medida la #[b resiliencia del predio], su #[b eficiencia ecológica] y su #[b autonomía territorial]. Reconocerlo como un organismo vivo implica observar sus componentes, comprender sus procesos internos y atender las señales de vitalidad que emergen del agroecosistema.

    //- //p (suelto)
    p.mb-5 Este cambio de enfoque, lejos del paradigma convencional que lo trataba como un material inerte, transforma profundamente la forma en que se #[b concibe, gestiona y rediseña] el agroecosistema productivo. Diseñar estrategias de manejo agroecológico que fortalezcan la fertilidad natural del suelo permite reducir la dependencia de insumos externos y restaurar la base ecológica de la producción.

    //- ## Separador
    Separador

    //- ### 3.1. Componentes de un suelo fértil
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1. Componentes de un suelo fértil

    //- //p
    p.mb-5 Un suelo fértil es aquel que puede #[b sostener la vida vegetal de forma continua, regenerativa y autónoma]. Su capacidad no depende de fertilizantes sintéticos, sino del equilibrio funcional entre #[b sus componentes físicos, químicos y biológicos], que interactúan en sinergia y activan procesos de nutrición, resiliencia y regeneración. A continuación, se presentan estos componentes clave:

    //- ## acordeon 4:8
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/4.png" alt="").mb-4.mb-lg-0
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .div(titulo="Físicos")
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Textura: proporción de arena, limo y arcilla. Define retención de agua y aireación.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Estructura: formación de agregados estables que favorecen la circulación de aire, agua y raíces.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Profundidad efectiva: permite que las raíces se anclen y exploren el suelo.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Porosidad: espacios entre partículas que facilitan la infiltración y el intercambio gaseoso.
          .div(titulo="Químicos")
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 pH estable: rango óptimo para la disponibilidad de nutrientes según el cultivo.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Nutrientes esenciales: nitrógeno (N), fósforo (P), potasio (K), calcio, magnesio, azufre.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Capacidad de intercambio catiónico (CIC): habilidad del suelo para retener y liberar nutrientes.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Materia orgánica: fuente de nutrientes que mejora la estructura y retención de humedad.
          .div(titulo="Biológicos")
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Microorganismos benéficos: bacterias, hongos y actinomicetos que descomponen materia orgánica y fijan nutrientes.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Fauna edáfica: lombrices, insectos y nematodos que airean y fertilizan el suelo.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Raíces vivas: promueven procesos de simbiosis, exudación y regeneración.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Cobertura vegetal: protege contra la erosión, regula la temperatura y alimenta la biota del suelo.

    //- ### 3.2. Bioindicadores de la calidad del suelo
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2. Bioindicadores de la calidad del suelo

    //- //p
    p.mb-5 Los #[b bioindicadores] son señales vivas que permiten evaluar la calidad del suelo sin necesidad de análisis de laboratorio. Constituyen herramientas #[b prácticas, accesibles y contextualizadas], fundamentales para un #[b diagnóstico agroecológico participativo] que involucre a las familias agricultoras en la observación directa de su predio.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        //- ## bloquefoto
        .bg-color-2.mb-5(data-aos="fade-up").p-3.tarjeta
          .row.justify-content-center.align-items-center
            .col-xl-auto
              img(src="@/assets/curso/tema3/5.png" style="max-width: 327px" alt="").mr-0
            .col-xl
              .tarjeta.bg-color-white.px-3.py-4.me-3
                p.mb-0 Estos indicadores permiten identificar la #[b salud del suelo] a partir de la presencia de organismos, el comportamiento de las plantas y las características físicas del terreno. Su lectura integrada ofrece información clave para tomar decisiones de manejo que favorezcan la regeneración de la fertilidad y la autonomía productiva.

    //- //p
    p.mb-5 A continuación, se presentan los principales tipos de bioindicadores utilizados para evaluar la calidad del suelo desde un enfoque agroecológico, agrupados según su naturaleza biológica, vegetal o física, y acompañados de su interpretación práctica en el manejo del predio.

    //- ## slider (3 slides)
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").tarjeta.bg-white.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/6.png" alt="")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Biológicos
              ul.lista-ul
                li
                  i.fas.fa-circle-check
                  | Presencia de lombrices
                li
                  i.fas.fa-circle-check
                  | Olor a tierra fresca
                li
                  i.fas.fa-circle-check
                  | Raíces profundas y ramificadas
                li
                  i.fas.fa-circle-check
                  | Hongos micorrízicos visibles
              p.mb-0 Estos elementos reflejan alta actividad biológica, buen reciclaje de nutrientes, estructura propicia para el desarrollo vegetal y una simbiosis activa entre plantas y suelo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/7.png" alt="")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Vegetales
              ul.lista-ul
                li
                  i.fas.fa-circle-check
                  | Crecimiento vigoroso de cultivos
                li
                  i.fas.fa-circle-check
                  | Arvenses bioindicadoras
                li
                  i.fas.fa-circle-check
                  | Coloración uniforme del follaje
              p.mb-0 Esta información permite identificar fertilidad equilibrada, señales de exceso o carencia de nutrientes y adecuada disponibilidad de nutrientes junto con salud radicular.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/8.png" alt="")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Físicos observables
              ul.lista-ul
                li
                  i.fas.fa-circle-check
                  | Suelo suelto al tacto o al usar una herramienta
                li
                  i.fas.fa-circle-check
                  | Agregados estables
                li
                  i.fas.fa-circle-check
                  | Infiltración rápida del agua
              p.mb-0 Estos aspectos corresponden a porosidad alta, baja compactación, estructura estable y contenido apropiado de materia orgánica.

</template>

<script>
export default {
  name: 'Tema3',
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
