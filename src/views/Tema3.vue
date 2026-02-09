<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Suelo como organismo vivo

    p.mb-4 En agroecología, el suelo no es un soporte inerte; es un organismo vivo, dinámico y complejo que regula ciclos ecológicos, sostiene biodiversidad y posibilita producción de alimentos.
    p.mb-5 Reconocer su salud permite mejorar resiliencia predial, eficiencia ecológica y autonomía territorial.

    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Componentes de un suelo fértil

    p.mb-4 Un suelo fértil sostiene la vida vegetal de forma continua, regenerativa y autónoma mediante equilibrio entre componentes físicos, químicos y biológicos.
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Físicos")
        ul.lista-ul--color.mb-0
          li
            i.fas.fa-check
            | Textura: define retención de agua y aireación.
          li
            i.fas.fa-check
            | Estructura: agregados estables para aire, agua y raíces.
          li
            i.fas.fa-check
            | Profundidad efectiva: anclaje y exploración radicular.
          li
            i.fas.fa-check
            | Porosidad: facilita infiltración e intercambio gaseoso.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Químicos")
        ul.lista-ul--color.mb-0
          li
            i.fas.fa-check
            | pH estable para disponibilidad de nutrientes.
          li
            i.fas.fa-check
            | Nutrientes esenciales: N, P, K, Ca, Mg y S.
          li
            i.fas.fa-check
            | CIC: capacidad para retener y liberar nutrientes.
          li
            i.fas.fa-check
            | Materia orgánica como fuente de nutrición y estructura.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Biológicos")
        ul.lista-ul--color.mb-0
          li
            i.fas.fa-check
            | Microorganismos benéficos: bacterias, hongos y actinomicetos.
          li
            i.fas.fa-check
            | Fauna edáfica: lombrices, insectos y nematodos.
          li
            i.fas.fa-check
            | Raíces vivas: simbiosis y regeneración.
          li
            i.fas.fa-check
            | Cobertura vegetal: protección, regulación térmica y alimento para biota.

    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Bioindicadores de la calidad del suelo

    p.mb-4 Los bioindicadores son señales vivas y observables que permiten evaluar la calidad del suelo sin laboratorio, facilitando diagnóstico participativo y decisiones de manejo.
    SlyderA(tipo="b")
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Biológicos
          ul.lista-ul--color.mb-0
            li
              i.fas.fa-seedling
              | Presencia de lombrices.
            li
              i.fas.fa-seedling
              | Olor a tierra fresca.
            li
              i.fas.fa-seedling
              | Raíces profundas y ramificadas.
            li
              i.fas.fa-seedling
              | Hongos micorrízicos visibles.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t03_foto_01.webp]
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Vegetales
          ul.lista-ul--color.mb-0
            li
              i.fas.fa-leaf
              | Crecimiento vigoroso de cultivos.
            li
              i.fas.fa-leaf
              | Arvenses bioindicadoras.
            li
              i.fas.fa-leaf
              | Coloración uniforme del follaje.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t03_foto_02.webp]
      .row.align-items-center.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Físicos observables
          ul.lista-ul--color.mb-0
            li
              i.fas.fa-mountain
              | Suelo suelto al tacto.
            li
              i.fas.fa-mountain
              | Agregados estables.
            li
              i.fas.fa-mountain
              | Infiltración rápida de agua.
        .col-lg-5
          .tarjeta.p-4.text-center
            p.mb-0 #[b Imagen sugerida:] #[code t03_foto_03.webp]
</template>

<script>
export default {
  name: 'Tema3',
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
