<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Introducción al diagnóstico predial productivo

    p.mb-4 El diagnóstico predial productivo permite comprender el funcionamiento del agroecosistema en términos de producción, manejo de recursos, integración de componentes y autonomía territorial.
    p.mb-5 Este proceso reconoce el predio como un sistema vivo donde interactúan decisiones técnicas, saberes locales, dinámicas familiares y relaciones ecológicas.

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Importancia del diagnóstico predial productivo en la transición agroecológica

    p.mb-4 El diagnóstico productivo no solo describe el estado actual del predio, también guía el cambio hacia sistemas más sostenibles, autónomos y resilientes.
    SlyderA(tipo="b").mb-5
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Base para el rediseño funcional
          p.mb-0 Permite comprender cómo se articulan los componentes productivos del predio y qué ajustes fortalecen su eficiencia ecológica.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t02_foto_01.webp]
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Lectura crítica del modelo dominante
          p.mb-0 Visibiliza prácticas heredadas del SAD que generan dependencia, degradación o fragmentación.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t02_foto_02.webp]
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Activación de procesos regenerativos
          p.mb-0 Identifica oportunidades para integrar cultivos y animales, reciclar nutrientes y fortalecer autonomía alimentaria.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t02_foto_03.webp]
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Fortalecimiento de decisiones
          p.mb-0 Brinda información para priorizar acciones, asignar recursos y construir planes prediales.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t02_foto_04.webp]
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Reconocimiento de saberes funcionales
          p.mb-0 Integra conocimientos campesinos sobre manejo, adaptación, selección y uso de recursos productivos.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t02_foto_05.webp]
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Monitoreo de la transición
          p.mb-0 Establece línea base para evaluar cambios en productividad, eficiencia ecológica y soberanía territorial.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t02_foto_06.webp]

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Relación del diagnóstico con el IPPTA y la planificación territorial

    p.mb-4 El diagnóstico productivo alimenta el IPPTA con indicadores participativos, fichas técnicas, mapas productivos y recorridos interpretativos.
    p.mb-5 Su articulación con el componente ambiental permite diseñar estrategias integrales para regenerar base ecológica y fortalecer capacidad productiva.

    h3.mb-4 2.2.1 Componente productivo del IPPTA
    p.mb-4 El componente productivo permite entender cómo se organiza y reproduce el sistema dentro del predio.
    .row.justify-content-center.mb-5
      .col-md-6.col-xl-4.mb-4
        .tarjeta--boton.p-4.h-100
          h4 Lectura funcional del predio
          p.mb-0 Sustenta cada acción del plan con base en el conocimiento real del sistema productivo.
      .col-md-6.col-xl-4.mb-4
        .tarjeta--boton.p-4.h-100
          h4 Herramientas participativas
          p.mb-0 Utiliza fichas, mapas e indicadores para construir visión compartida del agroecosistema.
      .col-md-6.col-xl-4.mb-4
        .tarjeta--boton.p-4.h-100
          h4 Activación de procesos colectivos
          p.mb-0 Promueve reflexión, aprendizaje y apropiación territorial de la planificación.
      .col-md-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta--boton.p-4.h-100
          h4 Articulación ambiental
          p.mb-0 Diseña estrategias que restauran base ecológica y productiva.
      .col-md-6.col-xl-4.mb-4.mb-md-0
        .tarjeta--boton.p-4.h-100
          h4 Metas adaptadas
          p.mb-0 Facilita estrategias realistas de diversificación, integración y reciclaje.
      .col-md-6.col-xl-4
        .tarjeta--boton.p-4.h-100
          h4 Orientación a la resiliencia
          p.mb-0 Fortalece la capacidad del sistema para sostener la vida y adaptarse al cambio.

    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Principio de la transición agroecológica

    p.mb-4 La transición agroecológica no se basa en recetas fijas, sino en principios que orientan acciones contextualizadas.
    AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA").mb-5
      .row(titulo="Mantener el suelo vivo y fértil")
        p.mb-2 El suelo se entiende como organismo vivo. Su conservación implica proteger estructura, biota, retención de agua y dinámica de reciclaje.
        ul.lista-ul--color.mb-0
          li
            i.fas.fa-leaf
            | Cobertura vegetal permanente.
          li
            i.fas.fa-leaf
            | Rotación de cultivos.
          li
            i.fas.fa-leaf
            | Incorporación de materia orgánica.
          li
            i.fas.fa-leaf
            | Uso de abonos naturales.
      .row(titulo="Mantener y aumentar la diversidad")
        p.mb-0 Diseñar sistemas con múltiples especies vegetales y animales mejora resiliencia, oferta alimentaria, reciclaje y autonomía comunitaria.
      .row(titulo="Integración entre animales y cultivos")
        p.mb-0 La integración funcional permite cerrar ciclos, reciclar nutrientes y fortalecer bienestar animal, soberanía y eficiencia ecológica.

    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Enfoque integral del predio

    p.mb-4 Concebir el predio como sistema vivo, diverso e interconectado permite articular suelo, agua, biodiversidad, prácticas humanas y flujos internos.
    p.mb-5 Este enfoque rompe con la fragmentación del SAD y orienta decisiones de complementariedad, eficiencia ecológica y autonomía funcional.

    h3.mb-4 2.4.1 Características del enfoque integral
    SlyderA(tipo="b").mb-5
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Zonificación funcional
          p.mb-0 Identificación de zonas productivas, de conservación, descarga, concentración y transición.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t02_foto_07.webp]
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Flujos internos
          p.mb-0 Lectura de flujos de nutrientes, agua, energía, residuos, saberes y alimentos.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t02_foto_08.webp]
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Interacciones ecológicas
          p.mb-0 Valoración de relaciones entre cultivos, animales, microorganismos, sombra y humedad.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t02_foto_09.webp]
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Prácticas productivas articuladas
          p.mb-0 Asociación de labores agrícolas con reciclaje, rotaciones y coberturas.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t02_foto_10.webp]
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Dimensión social y cultural
          p.mb-0 Inclusión de saberes locales, uso familiar del predio y decisiones comunitarias.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t02_foto_11.webp]

    h3.mb-4 2.4.2 Elementos claves del sistema productivo
    p.mb-4 Los siguientes elementos permiten comprender organización, interacciones y potencialidades del agroecosistema.
    AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
      .row(titulo="Componentes productivos")
        p.mb-0 Cultivos principales y secundarios, animales criados, áreas funcionales e infraestructura.
      .row(titulo="Flujos internos del predio")
        p.mb-0 Nutrientes, agua, materia orgánica y energía: origen, uso, reciclaje, pérdidas y eficiencia.
      .row(titulo="Relaciones ecológicas")
        p.mb-0 Interacciones cultivos-animales, ciclos naturales activados/interrumpidos y especies clave.
      .row(titulo="Prácticas de manejo")
        p.mb-0 Manejo de suelo, cultivos, animales y residuos desde criterios agroecológicos.
      .row(titulo="Producción y destino")
        p.mb-0 Autoconsumo, comercialización, transformación e intercambio comunitario.
      .row(titulo="Autonomía y resiliencia")
        p.mb-0 Dependencia de insumos externos, capacidad de adaptación y sistemas locales de conocimiento.
</template>

<script>
export default {
  name: 'Tema2',
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
