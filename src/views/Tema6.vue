<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Elaboración de mapas productivos

    //- //p (párrafo suelto)
    p.mb-5 Los #[b mapas productivos] son herramientas fundamentales para #[b visualizar el funcionamiento del predio agroecológico], ya que permiten identificar áreas de cultivo, crianza, conservación, infraestructura y flujos ecológicos. Al representar el #[b uso y cobertura del suelo], así como las #[b zonas de concentración y descarga], los mapas facilitan el #[b diagnóstico participativo, la planificación territorial] y la toma de decisiones adaptadas al contexto.

    //- ## imagen-compuesto 4:8 (bloque-texto-g inverso)
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema6/1.png" alt="Mapa productivo del predio")
      .col-lg-8(data-aos="fade-left")
        .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-4.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Esta herramienta activa procesos de #[b diseño funcional, manejo integrado y evaluación colectiva], al permitir una lectura espacial del agroecosistema que combina observación directa, conocimiento local y análisis técnico.

        //- ## icono-texto (sin bgcolor)
        .row.align-items-center.mb-5(data-aos="fade-up")
          .col-lg-auto
            img(src="@/assets/curso/tema6/svg/1.svg" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
          .col-lg
            p.mb-0 El enfoque espacial también incluye la #[b identificación de  zonas con alta carga orgánica o actividad productiva] (zonas de concentración) y áreas dedicadas a la #[b absorción, filtración o regeneración ecológica] (zonas de descarga). Para complementar esta visión, las #[b fichas de diagnóstico productivo] registran información clave sobre prácticas, recursos, rendimientos, problemas y potencialidades en cada unidad del predio. Los elementos clave en la elaboración de mapas productivos son:

    //- ## tarjetas-foto col-lg-4 (3 tarjetas estáticas)
    .row.mb-5
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .crd_foto
          .crd_foto__img(:style="{'background-image': `url(${require('@/assets/curso/tema6/3b.png')})`}")
          .crd_foto__body
            p.crd_foto__title Uso y cobertura del suelo
            p.crd_foto__text Representa la distribución de cultivos, pasturas, bosques, infraestructura y zonas de conservación dentro del predio.
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .crd_foto
          .crd_foto__img(:style="{'background-image': `url(${require('@/assets/curso/tema6/4b.png')})`}")
          .crd_foto__body
            p.crd_foto__title Zonas de concentración
            p.crd_foto__text Áreas con alta actividad productiva, tránsito frecuente o acumulación de residuos (corrales, galpones, patios de trabajo).
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .crd_foto
          .crd_foto__img(:style="{'background-image': `url(${require('@/assets/curso/tema6/5b.png')})`}")
          .crd_foto__body
            p.crd_foto__title Zonas de descarga
            p.crd_foto__text Espacios que reciben, filtran o regeneran materia y energía: humedales, franjas de vegetación, barreras vivas, coberturas orgánicas.
      p.mb-0 Fichas de diagnóstico productivo: registros por unidad del predio con información sobre prácticas agrícolas, recursos disponibles, problemas y oportunidades de mejora. 
    //- ## Separador
    Separador

    //- ### 6.1. Uso y cobertura del suelo
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1. Uso y cobertura del suelo

    //- //p
    p.mb-5 Los mapas de uso y cobertura del suelo permiten representar la distribución espacial de áreas productivas, zonas de crianza, espacios de transformación, almacenamiento, circulación y descanso, facilitando la comprensión integral del funcionamiento del predio y sus dinámicas agroecológicas.

    //- ## compuesto-imagen 9:3 (bgcolor-texto #FFE9B5)
    .row.align-items-center.mb-5
      .col-lg-9(data-aos="fade-right")
        .bg-color-4.px-4.py-lg-4.py-xl-5.rounded-3
          p.mb-4 En contextos agroecológicos, estos mapas se elaboran de forma participativa, generalmente a mano alzada, integrando recorridos de campo, observación directa y conocimiento local sobre prácticas, rendimientos y necesidades. Aunque en algunos casos se emplean imágenes satelitales o software especializado, en los territorios rurales la construcción colectiva de mapas es especialmente valiosa porque:
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.fas.fa-circle-check
              p.mb-0 Activa la memoria productiva de las familias.
            li.mb-0.d-flex
              i.fas.fa-circle-check
              p.mb-0 Visibiliza cuellos de botella, duplicaciones, vacíos y oportunidades.
            li.mb-0.d-flex
              i.fas.fa-circle-check
              p.mb-0 Fortalece la toma de decisiones basadas en el conocimiento del territorio.
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema6/6.png" alt="").m-auto

    //- //p
    p.mb-5 Este ejercicio orienta decisiones sobre la ubicación de cultivos, las rotaciones, el manejo de residuos, la integración animal–vegetal y el diseño funcional del agroecosistema. La clasificación de los usos del suelo se basa en la experiencia de las familias, reconociendo:

    //- ## tarjetas separadas col:9
    .row.justify-content-center.mb-5
      .col-lg-9
        .row.g-3(data-aos="fade-up")
          .col-md-4
            .bg-color-10.p-4.rounded-3.text-white.h-100.d-flex.align-items-center.justify-content-center
              p.mb-0.text-center Los flujos de trabajo
          .col-md-4
            .bg-color-10.p-4.rounded-3.text-white.h-100.d-flex.align-items-center.justify-content-center
              p.mb-0.text-center Los ciclos de producción
          .col-md-4
            .bg-color-10.p-4.rounded-3.text-white.h-100.d-flex.align-items-center.justify-content-center
              p.mb-0.text-center Y los elementos clave para la autonomía y la eficiencia agroecológica

    //- ## Separador
    Separador

    //- ### 6.2. Zonas de concentración
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2. Zonas de concentración

    //- ## imagen-compuesto 3:9 (//p + bloquefoto #BCCDB2)
    .row.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema6/7.png" alt="")
      .col-lg-9(data-aos="fade-left")
        p.mb-4 Las #[b zonas de concentración] son áreas del predio donde se #[b acumula actividad productiva, tránsito, residuos o presión sobre el suelo]. En estos espacios se concentran nutrientes, energía, herramientas y personas, lo que puede generar #[b eficiencia operativa], pero también #[b riesgos de saturación, compactación o contaminación] si no se gestionan adecuadamente. Ejemplos típicos de zonas de concentración incluyen:
        .bg-color-1.overflow-hidden
          .row.align-items-center
            .col-xl.order-lg-1
              .p-4
                ul.lista-ul--color.mb-0
                  li.mb-0.d-flex
                    i.fas.fa-circle-check(style="color: #638A4B")
                    p.mb-0 Corrales y galpones.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check(style="color: #638A4B")
                    p.mb-0 Patios de trabajo.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check(style="color: #638A4B")
                    p.mb-0 Zonas de lavado y faenado.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check(style="color: #638A4B")
                    p.mb-0 Áreas de almacenamiento o procesamiento.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check(style="color: #638A4B")
                    p.mb-0 Puntos de carga y descarga.
            .col-xl-auto.order-lg-2
              img(src="@/assets/curso/tema6/8.png" style="max-width: 420px" alt="").m-auto.mt-xl-0.mt-4

    //- ## bgcolor-icono-texto #FFC94A
    .bg-color-2.p-4.rounded-3.mb-5(data-aos="fade-up")
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/tema6/svg/3.svg" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
        .col-lg
          p.mb-0 Identificarlas en el mapa productivo permite tomar decisiones sobre la redistribución de cargas, el manejo de residuos, la rotación de actividades y el diseño funcional del predio. Esta lectura espacial facilita el diagnóstico participativo, al visibilizar dónde se acumulan los esfuerzos, insumos y problemas, y cómo pueden equilibrarse con zonas de descanso, regeneración o descarga.

    //- ## Separador
    Separador

    //- ### 6.3. Zonas de descarga
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.3. Zonas de descarga

    //- ## compuesto-imagen 8:4 (//p + bloquefoto-card #BCCDB2 + //p)
    .row.align-items-center.mb-5
      .col-lg-9(data-aos="fade-right")
        p.mb-4 Las #[b zonas de descarga] son áreas del predio donde se canalizan, filtran o redistribuyen los excedentes del sistema productivo, como residuos orgánicos, aguas de lavado, estiércoles, restos de cosecha o materiales en descomposición. Estas zonas cumplen funciones clave para el manejo interno de nutrientes, #[b humedad y energía], ayudando a #[b cerrar ciclos ecológicos] y a evitar la saturación en las zonas de concentración.
        .bg-color-1.overflow-hidden.rounded-3.mb-4
          .row.align-items-center
            .col-xl-7
              .ps-5.pe-3.py-4
                .tarjeta.bg-white.p-4
                  p Ejemplos comunes incluyen:
                  ul.lista-ul--color.mb-0
                    li.mb-0.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Composeras y lombricultivos.
                    li.mb-0.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Camas de filtración o biofiltros.
                    li.mb-0.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Barreras vivas y franjas forestales.
                    li.mb-0.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Cultivos de absorción o fitorremediación.
                    li.mb-0.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Áreas de descanso del suelo o barbechos agroecológicos.
            .col-xl-5
              img(src="@/assets/curso/tema6/10.png" alt="").img-fluid
        p.mb-0 Identificar y ubicar estratégicamente estas zonas en el #[b mapa productivo] mejora la funcionalidad del agroecosistema, reduce impactos negativos y #[b fortalece la autonomía y la resiliencia agroecológica].
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema6/9.png" alt="").m-auto

    //- ## Separador
    Separador

    //- ### 6.4. Fichas de diagnóstico
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.4. Fichas de diagnóstico: síntesis territorial para la toma de decisiones

    //- //p
    p.mb-5 Las fichas de diagnóstico productivo son herramientas complementarias al mapa del predio, diseñadas para registrar, analizar y mejorar el funcionamiento de cada unidad del agroecosistema. Estas fichas permiten sistematizar información clave sobre cultivos, animales, infraestructura, prácticas, rendimientos, problemas y potencialidades, facilitando la toma de decisiones y el diseño funcional del sistema productivo.

    //- ## bloquefoto img:right #DDE6D8
    .bg-color-11.overflow-hidden.rounded-3.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-lg-1
          .p-4
            p Su elaboración puede ser colectiva, integrando recorridos, observación directa y saberes locales, lo cual enriquece la mirada técnica con la experiencia de las familias campesinas. Estas fichas profundizan en los aspectos técnicos, ecológicos y culturales de cada zona, registrando datos sobre uso del suelo, manejo, insumos, ciclos, flujos y relaciones funcionales. De esta forma, permiten identificar:
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Cuellos de botella.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Oportunidades de mejora.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Estrategias para fortalecer la autonomía, la eficiencia y resiliencia del sistema.
        .col-xl-auto.order-lg-2
          img(src="@/assets/curso/tema6/12.png" style="max-width: 420px" alt="").m-auto.mt-xl-0.mt-4

    //- //p
    p.mb-5 Las variables sugeridas para las fichas de diagnóstico productivo son:

    //- ## imagen-compuesto 3:9 (acordeón 1)
    .row.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema6/13.png" alt="")
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .div(titulo="Identificación general")
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Nombre de la unidad o zona.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Ubicación en el mapa productivo.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Responsable o grupo encargado.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Superficie aproximada.
          .div(titulo="Componente vegetal")
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Tipo de cultivo o asociación.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Ciclo (anual, perenne, rotación).
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Estado fenológico.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Rendimiento estimado.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Prácticas de manejo (siembra, fertilización, control).
          .div(titulo="Componente animal")
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Especie o grupo animal.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Número de individuos.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Tipo de alimentación.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Manejo sanitario.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Aprovechamiento (carne, huevos, estiércol, etc.).

    //- ## compuesto-imagen 9:3 (acordeón 2)
    .row.align-items-center.mb-5
      .col-lg-9(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .div(titulo="Ciclos y flujos internos")
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Insumos utilizados (internos/externos).
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Residuos generados y destino.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Conexiones con otras unidades (forraje, sombra, agua, reciclaje).
          .div(titulo="Infraestructura y herramientas")
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Presencia de cercas, galpones, composteras, bebederos, etc.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Estado y funcionalidad.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Necesidades de mejora o mantenimiento.
          .div(titulo="Evaluación funcional")
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Problemas observados (plagas, compactación, exceso de carga).
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Potencial de mejora (diversificación, integración, redistribución).
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Funciones que cumple en el sistema (alimentaria, ecológica, cultural).
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema6/14.png" alt="").m-auto

    //- ## bgcolor-icono-texto #FFC94A (cierre)
    .bg-color-2.p-4.rounded-3.mb-5(data-aos="fade-up")
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/tema6/svg/4.svg" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
        .col-lg
          p.mb-0 Estas fichas permiten una lectura fina del predio, facilitando procesos de planificación agroecológica territorial, monitoreo de la transición y diseño de estrategias adaptadas a la realidad concreta de cada familia o comunidad.

</template>

<script>
export default {
  name: 'Tema6',
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
