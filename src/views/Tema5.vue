<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Autonomía funcional

    p.mb-5 La autonomía funcional es la capacidad del predio para sostener procesos productivos, ecológicos y alimentarios con menor dependencia de insumos externos, a través de diseño integrado de cultivos, animales, suelos y saberes.

    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Integración de animales y cultivos

    p.mb-4 La integración funcional activa ciclos ecológicos complementarios: aprovecha residuos, mejora fertilidad, diversifica dieta y fortalece resiliencia.
    .row.justify-content-center.mb-5
      .col-md-6.col-xl-3.mb-4
        .tarjeta--boton.p-4.h-100
          h4 Ciclos cerrados de nutrientes
          p.mb-0 Retorno de materia orgánica al suelo mediante compostaje, lombricultura o fermentados.
      .col-md-6.col-xl-3.mb-4
        .tarjeta--boton.p-4.h-100
          h4 Aprovechamiento de residuos
          p.mb-0 Transformación de estiércoles, restos vegetales y residuos domésticos en insumos útiles.
      .col-md-6.col-xl-3.mb-4.mb-md-0
        .tarjeta--boton.p-4.h-100
          h4 Activación del suelo vivo
          p.mb-0 Fortalecimiento de microorganismos y fauna edáfica que sostienen fertilidad natural.
      .col-md-6.col-xl-3
        .tarjeta--boton.p-4.h-100
          h4 Reducción de insumos externos
          p.mb-0 Disminución de fertilizantes químicos y alimentos concentrados.

    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Autonomía alimentaria

    p.mb-4 La autonomía alimentaria es la capacidad de producir, transformar y consumir alimentos diversos y culturalmente significativos desde recursos locales.
    AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA").mb-4
      .row(titulo="Seguridad alimentaria")
        p.mb-0 Garantiza acceso a alimentos suficientes e inocuos, aunque pueden provenir del mercado o importaciones.
      .row(titulo="Soberanía alimentaria")
        p.mb-0 Derecho de los pueblos a definir sistemas alimentarios con producción local, semillas propias y decisiones colectivas.
      .row(titulo="Autonomía alimentaria")
        p.mb-0 Capacidad práctica del predio/comunidad para generar sus propios alimentos con ciclos cerrados y menor dependencia del mercado.

    .tarjeta.color-secundario.p-4
      p.mb-0 Cada alimento producido en la finca representa ahorro directo, fortalece la nutrición familiar y convierte el trabajo campesino en soberanía territorial.
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
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
