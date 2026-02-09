<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Agrobiodiversidad

    p.mb-5 La agrobiodiversidad integra la variedad de animales, plantas y microorganismos del agroecosistema, y constituye una estrategia clave para resiliencia predial, eficiencia ecológica y autonomía territorial.

    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Dimensiones de la agrobiodiversidad

    .row.justify-content-center.mb-5
      .col-md-6.col-xl-4.mb-4
        .tarjeta--boton.p-4.h-100
          h4 Genética
          p.mb-0 Variabilidad dentro de una misma especie (ej. variedades criollas adaptadas).
      .col-md-6.col-xl-4.mb-4
        .tarjeta--boton.p-4.h-100
          h4 Específica
          p.mb-0 Número de especies presentes en el sistema.
      .col-md-6.col-xl-4.mb-4
        .tarjeta--boton.p-4.h-100
          h4 Funcional
          p.mb-0 Roles ecológicos: reciclaje, cobertura, alimentación y control biológico.
      .col-md-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta--boton.p-4.h-100
          h4 Espacial
          p.mb-0 Distribución en bordes, corredores, zonas húmedas y cultivos asociados.
      .col-md-6.col-xl-4.mb-4.mb-md-0
        .tarjeta--boton.p-4.h-100
          h4 Temporal
          p.mb-0 Sucesión a lo largo del tiempo: rotaciones, policultivos y floraciones.
      .col-md-6.col-xl-4
        .tarjeta--boton.p-4.h-100
          h4 Cultural
          p.mb-0 Saberes, prácticas y significados vinculados al uso de especies.

    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Tipos de biodiversidad en el agroecosistema

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Productiva")
        p.mb-0 Especies con funciones alimenticias, medicinales, ecológicas o culturales aprovechadas directamente por la familia.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Asociada")
        p.mb-0 Especies que coexisten sin manejo directo, pero influyen en funcionamiento del predio.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Indicadora")
        p.mb-0 Especies cuya presencia o comportamiento refleja estado ecológico del sistema.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Funcional")
        p.mb-0 Especies con potencial ecológico, cultural o económico para mejorar el sistema.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Antagonista")
        p.mb-0 Plagas, patógenos o arvenses invasoras que evidencian desequilibrios.

    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Semillas nativas y criollas

    p.mb-4 Las semillas nativas y criollas son patrimonio biocultural y bien común. Su conservación fortalece autonomía productiva y soberanía alimentaria.
    SlyderA(tipo="b").mb-5
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Adaptación territorial
          p.mb-0 Se ajustan a clima, altitud, humedad y manejo local por procesos de coevolución.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t04_foto_01.webp]
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Resiliencia ecológica
          p.mb-0 Toleran variabilidad climática y sistemas con bajos insumos externos.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t04_foto_02.webp]
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Reproducción campesina
          p.mb-0 Pueden guardarse, seleccionarse y mejorarse en finca.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t04_foto_03.webp]
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Diversidad alimentaria y memoria biocultural
          p.mb-0 Aportan sabores, nutrientes, historias, calendarios agrícolas y saberes comunitarios.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t04_foto_04.webp]

    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4 Diversidad vegetal

    AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA").mb-5
      .row(titulo="Alimenticias para consumo humano")
        p.mb-0 Maíz, frijol, yuca, arracacha, quinua, hortalizas y frutales nativos.
      .row(titulo="Forrajeras y de pastoreo")
        p.mb-0 Kikuyo, botón de oro, morera, caña forrajera, alfalfa.
      .row(titulo="Fijadoras y recicladoras de nutrientes")
        p.mb-0 Leguminosas y especies de raíz profunda que mejoran fertilidad y estructura del suelo.
      .row(titulo="Coberturas vivas y protectoras del suelo")
        p.mb-0 Mucuna, avena, centeno, canavalia, calabaza.
      .row(titulo="Aromáticas, medicinales y repelentes")
        p.mb-0 Ruda, albahaca, ajenjo, menta, citronela.
      .row(titulo="Melíferas, polinizadoras, trampa y bioindicadoras")
        p.mb-0 Especies que atraen polinizadores, regulan plagas e indican estado ecológico.

    #t_4_5.titulo-segundo.color-acento-contenido
      h2 4.5 Diversidad animal

    SlyderA(tipo="b")
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Productores de proteína
          p.mb-0 Gallinas, bovinos, cerdos, cabras, abejas, peces.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t04_foto_05.webp]
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Recicladores y mejoradores del suelo
          p.mb-0 Transforman residuos, airean suelo y activan fertilidad biológica.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t04_foto_06.webp]
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Reguladores, trabajo y bioindicadores
          p.mb-0 Controlan plagas, apoyan labores y reflejan estado ecológico del agroecosistema.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t04_foto_07.webp]
</template>

<script>
export default {
  name: 'Tema4',
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
