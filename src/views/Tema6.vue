<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Elaboración de mapas productivos

    p.mb-5 Los mapas productivos visualizan áreas de cultivo, crianza, conservación, infraestructura y flujos ecológicos. Son clave para diagnóstico participativo y toma de decisiones en el predio.

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Uso y cobertura del suelo")
        p.mb-0 Representa distribución de cultivos, pasturas, bosques, infraestructura y zonas de conservación.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Zonas de concentración")
        p.mb-0 Áreas con alta actividad productiva o acumulación de residuos: corrales, galpones, patios de trabajo.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Zonas de descarga")
        p.mb-0 Espacios de filtración/regeneración: humedales, barreras vivas, coberturas orgánicas.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Fichas de diagnóstico")
        p.mb-0 Registros por unidad del predio sobre prácticas, recursos, rendimientos, problemas y oportunidades.

    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Uso y cobertura del suelo
    p.mb-5 Los mapas se construyen de manera participativa con recorridos de campo, observación directa y conocimiento local para orientar ubicación de cultivos, rotaciones y manejo de residuos.

    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Zonas de concentración
    p.mb-4 Son áreas donde se acumula actividad, tránsito y carga productiva. Su identificación facilita redistribuir esfuerzos y prevenir compactación o contaminación.
    ul.lista-ul--color.mb-5
      li
        i.fas.fa-map-marker-alt
        | Corrales y galpones.
      li
        i.fas.fa-map-marker-alt
        | Patios de trabajo.
      li
        i.fas.fa-map-marker-alt
        | Zonas de lavado/faenado.
      li
        i.fas.fa-map-marker-alt
        | Áreas de almacenamiento/procesamiento.

    #t_6_3.titulo-segundo.color-acento-contenido
      h2 6.3 Zonas de descarga
    p.mb-4 Son áreas donde se filtran o redistribuyen excedentes del sistema, favoreciendo cierre de ciclos ecológicos.
    ul.lista-ul--color.mb-5
      li
        i.fas.fa-water
        | Composeras y lombricultivos.
      li
        i.fas.fa-water
        | Camas de filtración o biofiltros.
      li
        i.fas.fa-water
        | Barreras vivas y franjas forestales.
      li
        i.fas.fa-water
        | Barbechos y áreas de descanso del suelo.

    #t_6_4.titulo-segundo.color-acento-contenido
      h2 6.4 Fichas de diagnóstico: síntesis territorial para la toma de decisiones
    p.mb-4 Las fichas complementan el mapa y sistematizan información técnica, ecológica y cultural por unidad del predio.
    SlyderA(tipo="b")
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Identificación general
          p.mb-0 Nombre de unidad, ubicación en mapa, responsable y superficie aproximada.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t06_foto_01.webp]
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Componente vegetal y animal
          p.mb-0 Tipo de cultivo, ciclo, estado fenológico, rendimiento, especies animales, manejo y aprovechamiento.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t06_foto_02.webp]
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Ciclos, flujos e infraestructura
          p.mb-0 Insumos, residuos, conexiones funcionales, estado de cercas, galpones, composteras y herramientas.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t06_foto_03.webp]
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Evaluación funcional
          p.mb-0 Problemas observados, potencial de mejora y funciones alimentarias, ecológicas y culturales.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t06_foto_04.webp]
</template>

<script>
export default {
  name: 'Tema6',
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
