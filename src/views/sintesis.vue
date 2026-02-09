<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.
    p.mb-4 El recorrido abordó los fundamentos productivos de la transición agroecológica, la lectura funcional del predio, el suelo como organismo vivo, la agrobiodiversidad, la autonomía funcional y la elaboración de mapas productivos para la toma de decisiones territoriales.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        .tarjeta.text-center.p-5
          p.mb-2 #[b Reemplazar por recurso final:]
          p.mb-0 #[code sintesis_foto_01.webp] o #[code sintesis.svg]
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
