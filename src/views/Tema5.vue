<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Autonomía funcional

    //- ## imagen-compuesto 4:8 (//p + //bloquefoto #BCCDB2)
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema5/1.png" alt="")
      .col-lg-8(data-aos="fade-left")
        p.mb-4 La autonomía funcional en el agroecosistema se refiere a la capacidad del predio para sostener sus procesos productivos, ecológicos y alimentarios sin depender de insumos externos. Esta autonomía no es una condición dada, sino una construcción territorial que se logra mediante el diseño integrado de cultivos, animales, suelos y saberes.
        .bg-color-1.overflow-hidden
          .row.align-items-center
            .col-xl-auto
              img(src="@/assets/curso/tema5/2.png" style="max-width: 420px" alt="").m-auto.mt-xl-0.mt-4
            .col-xl
              .p-4
                p.mb-0 Un sistema autónomo se caracteriza por activar ciclos cerrados, promover sinergias ecológicas y aplicar estrategias adaptadas al contexto local. De este modo, el agroecosistema puede reciclar nutrientes, regular plagas, producir alimento y conservar biodiversidad, lo que fortalece su resiliencia y soberanía.

    //- ## bgcolor-icono-texto (#FFC94A)
    .bg-color-2.p-4.rounded-3.mb-5(data-aos="fade-up")
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/tema5/svg/1.svg" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
        .col-lg
          p.mb-0 En este marco, la autonomía alimentaria se manifiesta en la capacidad de producir alimentos diversos, nutritivos y culturalmente significativos para la familia y la comunidad, disminuyendo la dependencia del mercado y reforzando la seguridad alimentaria desde el territorio.

    //- ## Separador
    Separador

    //- ### 5.1. Integración de animales y cultivos
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1. Integración de animales y cultivos

    //- //p
    p.mb-5 La integración funcional de cultivos y animales es una estrategia central para consolidar la autonomía del predio. Esta relación activa ciclos ecológicos complementarios, que permiten aprovechar residuos orgánicos, mejorar la fertilidad del suelo, diversificar la dieta y reducir la dependencia de insumos externos.

    //- ## compuesto-imagen 8:4 (bgcolor-icono-card #638A4B + //p)
    .row.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .bg-color-7.p-4.rounded-3.mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/svg/2.svg" style="max-width: 120px" alt="").m-auto.mb-4.mb-lg-0
            .col-lg
              .tarjeta.bg-white.p-4
                p.mb-0 A través del reciclaje de nutrientes, los residuos de cosecha, estiércoles, podas y restos domésticos se transforman en abonos, compost o bioles que alimentan el suelo vivo. Los animales aportan materia orgánica y control biológico, mientras que los cultivos ofrecen alimento, sombra, cobertura y estructura al sistema.
        p.mb-0 Esta articulación genera un diseño productivo más eficiente, resiliente y culturalmente significativo, enraizado en los saberes campesinos. Los elementos clave en la integración de especies vegetales y animales son:
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema5/3.png" alt="").m-auto

    //- ## imagen-compuesto 4:8 (carrusel-tarjetas-icono)
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema5/4.png" alt="").mb-4.mb-lg-0
      .col-lg-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.bg-white.shadow.p-4.h-100
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema5/svg/3.svg" alt="")
            h5.text-center Ciclos cerrados de nutrientes
            p.mb-0.text-center Retorno de la materia orgánica al suelo mediante compostaje, lombricultura o fermentados.
          .tarjeta.bg-white.shadow.p-4.h-100
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema5/svg/4.svg" alt="")
            h5.text-center Aprovechamiento de residuos
            p.mb-0.text-center Transformación de estiércoles, restos vegetales y residuos domésticos en insumos útiles para la producción.
          .tarjeta.bg-white.shadow.p-4.h-100
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema5/svg/5.svg" alt="")
            h5.text-center Activación del suelo vivo
            p.mb-0.text-center Fortalecimiento de microorganismos, lombrices y fauna edáfica que sostienen la fertilidad natural del suelo.
          .tarjeta.bg-white.shadow.p-4.h-100
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema5/svg/6.svg" alt="")
            h5.text-center Reducción de insumos externos
            p.mb-0.text-center Disminución del uso de fertilizantes químicos y alimentos concentrados, aumentando la autonomía predial.

    //- //p
    p.mb-5 Este modelo de integración favorece la creación de agroecosistemas #[b productivos, regenerativos y soberanos], alineados con los principios de la agroecología y las condiciones reales del territorio.

    //- ## Separador
    Separador

    //- ### 5.2. Autonomía alimentaria
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2. Autonomía alimentaria

    //- ## compuesto-imagen 8:4 (bloquefoto #FFE9B5 + //p)
    .row.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .bg-color-4.overflow-hidden.mb-4
          .row.align-items-center
            .col-xl-auto
              img(src="@/assets/curso/tema5/5.png" style="max-width: 420px" alt="").m-auto.mt-xl-0.mt-4
            .col-xl
              .p-4
                p.mb-0 La autonomía alimentaria es la capacidad del sistema y la comunidad para producir, transformar y consumir alimentos diversos, nutritivos y culturalmente significativos, sin depender de insumos ni mercados externos. Esta autonomía fortalece la seguridad alimentaria, al garantizar el acceso constante a alimentos sanos y suficientes, y activa la soberanía alimentaria, al permitir decidir qué, cómo y para quién se produce, desde el territorio y los saberes locales.
        p.mb-0 Se trata de una construcción territorial que se nutre de cultivos propios, animales criados localmente, saberes campesinos, prácticas agroecológicas y decisiones familiares o comunitarias, que permiten sostener la alimentación desde adentro, utilizando los recursos disponibles en el entorno inmediato. Los tres conceptos complementarios para entender su alcance:
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema5/6.png" alt="").m-auto

    //- ## pestañas-horizontales (TabsC) con imagen + texto por tab
    TabsC.color-acento-contenido.mb-5.bg-color-11(data-aos="zoom-in")
      .py-4.px-3(titulo="Seguridad alimentaria")
        .row.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/7.png" alt="").m-auto
          .col-lg-7
            h4 Seguridad alimentaria
            p Garantiza acceso físico y económico a alimentos suficientes, inocuos y nutritivos para todas las personas, en todo momento. Incluye alimentos adquiridos o importados y no exige control sobre su origen ni adecuación cultural.
            p #[b Características clave:]
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Los alimentos pueden provenir del mercado o de importaciones.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 No asegura coherencia cultural ni autonomía sobre el origen.
      .py-4.px-3(titulo="Soberanía alimentaria")
        .row.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/8.png" alt="").m-auto
          .col-lg-7
            h4 Soberanía alimentaria
            p Derecho de los pueblos a definir sus sistemas alimentarios, priorizando producción local, mercados campesinos y alimentos culturalmente adecuados. Involucra control político, territorial y comunitario.
            p #[b Características clave:]
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Centralidad del control político y territorial.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Prioridad para semillas propias y decisiones colectivas.
      .py-4.px-3(titulo="Autonomía alimentaria")
        .row.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/9.png" alt="").m-auto
          .col-lg-7
            h4 Autonomía alimentaria
            p Capacidad práctica del predio o comunidad para generar sus propios alimentos mediante recursos locales, decisiones propias y ciclos cerrados. Se articula en la huerta, el corral, la cocina y el calendario agrícola.
            p #[b Características clave:]
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Producción basada en recursos locales.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Menor dependencia del mercado.

    //- //p
    p.mb-5 Cada alimento producido en la finca representa un #[b ahorro directo y tangible]: es un alimento menos que debe comprarse, una necesidad cubierta con recursos propios. Esta lógica convierte la #[b producción agroecológica en una forma de economía territorial], donde el predio funciona como #[b fuente de nutrición, salud y soberanía].

    //- ## bgcolor-icono-card col:10 (#D9E8F9)
    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-color-3.p-4.rounded-3(data-aos="fade-in")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/svg/7.svg" style="max-width: 120px" alt="").m-auto.mb-4.mb-lg-0
            .col-lg
              .tarjeta.bg-white.p-4
                p.mb-0 Cultivar hortalizas, criar animales, transformar excedentes o recolectar frutos nativos #[b equivale a "imprimir dinero en casa"], ya que reduce gastos, fortalece la autonomía familiar y convierte el trabajo campesino en alimento, #[b sin intermediarios ni dependencia del mercado].

</template>

<script>
export default {
  name: 'Tema5',
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
