<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Agrobiodiversidad

    //- ## bloque-texto-g
    .bloque-texto-g.bg-color-7.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b La agrobiodiversidad] representa la variedad y variabilidad de animales, plantas y microorganismos que forman parte de los agroecosistemas, incluyendo cultivos, razas animales, especies silvestres asociadas, microorganismos del suelo, polinizadores y controladores biológicos. Esta definición, adoptada por la Convención sobre la Diversidad Biológica de las Naciones Unidas, reconoce que los sistemas agrícolas están sostenidos por una red viva de interacciones ecológicas, culturales y productivas.

    //- //p (suelto)
    p.mb-5 Desde el enfoque agroecológico, la agrobiodiversidad no es solo un componente del paisaje, sino una #[b estrategia clave para fortalecer la resiliencia del predio], mejorar la eficiencia ecológica y consolidar la autonomía territorial. Su manejo implica conservar, diversificar y activar relaciones funcionales entre especies, saberes y procesos.

    //- ## Separador
    Separador

    //- ### 4.1. Dimensiones de la agrobiodiversidad
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1. Dimensiones de la agrobiodiversidad

    //- //p
    p.mb-5 Para comprender su complejidad y orientar su planificación, analizar la agrobiodiversidad a partir de #[b seis dimensiones complementarias]:

    //- ## tarjetas-foto-hover col-lg-4
    .row.mb-5
      .col-lg-4.mb-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/2.png" alt="")
          .crd_hover_txt--body
            h4.mb-3 Genética
            p.mb-0 Variabilidad dentro de una misma especie. Ejemplo: variedades locales de frijol criollo adaptadas al clima del territorio.
      .col-lg-4.mb-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/3.png" alt="")
          .crd_hover_txt--body
            h4.mb-3 Específica
            p.mb-0 Número de especies presentes en el agroecosistema: cultivos, animales, arvenses, microorganismos.
      .col-lg-4.mb-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/4.png" alt="")
          .crd_hover_txt--body
            h4.mb-3 Funcional
            p.mb-0 Roles ecológicos que cumplen las especies: reciclaje, cobertura, alimentación, control biológico.
      .col-lg-4.mb-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/5.png" alt="")
          .crd_hover_txt--body
            h4.mb-3 Espacial
            p.mb-0 Distribución de la biodiversidad en el predio: bordes, corredores, zonas húmedas, cultivos asociados.
      .col-lg-4.mb-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/6.png" alt="")
          .crd_hover_txt--body
            h4.mb-3 Temporal
            p.mb-0 Sucesión de especies a lo largo del tiempo: rotaciones, policultivos, floraciones escalonadas.
      .col-lg-4.mb-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/7.png" alt="")
          .crd_hover_txt--body
            h4.mb-3 Cultural
            p.mb-0 Saberes, prácticas, rituales y significados vinculados al manejo y uso de las especies.

    //- ## Separador
    Separador

    //- ### 4.2. Tipos de biodiversidad en el agroecosistema
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2. Tipos de biodiversidad en el agroecosistema

    //- //p
    p.mb-5 Además de sus dimensiones, la agrobiodiversidad puede analizarse en función de su #[b rol dentro del sistema productivo y ecológico]. Esta clasificación permite una lectura integral del agroecosistema, reconociendo no solo lo que se cultiva o cría, sino también lo que #[b acompaña, indica o puede ser activado como recurso territorial].

    //- ## imagen-compuesto 4:8 (pestanas-verticales)
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/8.png" alt="")
      .col-lg-8(data-aos="fade-left")
        TabsA.color-acento-contenido
          .tarjeta.p-4(titulo="Productiva")
            p.mb-0 Incluye especies con funciones alimenticias, medicinales, ecológicas o culturales directamente aprovechadas por la familia campesina.
          .tarjeta.p-4(titulo="Asociada")
            p.mb-0 Especies que coexisten en el predio sin ser manejadas directamente, pero que influyen en su funcionamiento: arvenses, fauna silvestre, microorganismos espontáneos.
          .tarjeta.p-4(titulo="Indicadora")
            p.mb-0 Especies cuya presencia, abundancia o comportamiento refleja el estado ecológico del sistema: fertilidad, equilibrio o degradación.
          .tarjeta.p-4(titulo="Funcional")
            p.mb-0 Especies con potencial ecológico, cultural o económico que pueden incorporarse al sistema para mejorar su funcionamiento: insectos depredadores, plantas nativas, hongos benéficos.
          .tarjeta.p-4(titulo="Antagonista")
            p.mb-0 Especies que afectan negativamente el agroecosistema: plagas, patógenos o arvenses invasoras. Indican desequilibrios y pueden ser reguladas mediante biodiversidad funcional (rotaciones, cobertura, control biológico).

    //- //p (suelto)
    p.mb-5 Esta mirada amplia y dinámica de la agrobiodiversidad permite diseñar sistemas más #[b resilientes, eficientes y culturalmente significativos ], en los que se reconoce el valor de #[b lo cultivado, lo espontáneo, lo simbólico y lo relacional ] como parte de un mismo tejido agroecológico.

    //- ## Separador
    Separador

    //- ### 4.3. Semillas nativas y criollas
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3. Semillas nativas y criollas

    //- //p
    p.mb-5 Las semillas nativas y criollas son una expresión viva de la agrobiodiversidad y del patrimonio biocultural de los pueblos. Muchas de ellas han sido domesticadas y cuidadas por comunidades campesinas e indígenas durante milenios, a través de procesos de selección y adaptación que reflejan una relación profunda con el territorio. Son semillas con historia, memoria y propósito.

    //- ## bgcolor-icono-card col:10
    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-color-2.p-4.rounded-3(data-aos="fade-up")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/svg/2.svg" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
            .col-lg
              .tarjeta.bg-white.p-4
                p.mb-0 Estas variedades representan un bien común, no solo por su valor alimentario y ecológico, sino también por el conocimiento colectivo que las sostiene. A diferencia de las semillas comerciales, las semillas criollas y nativas pueden reproducirse, intercambiarse y evolucionar en finca, lo que fortalece la autonomía productiva y contribuye a la soberanía alimentaria de las comunidades rurales.

    //- //p
    p.mb-5 Las funciones agroecológicas y culturales de las semillas nativas y criollas son:

    //- ## imagen-compuesto 4:8 (carrusel-tarjetas-icono)
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/9.png" alt="")
      .col-lg-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.bg-white.p-4.shadow(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema4/svg/3.svg" alt="")
            h5.text-center Adaptación territorial
            p.mb-0.text-center Se ajustan a condiciones locales de clima, altitud, humedad y manejo, gracias a su coevolución con los ecosistemas y las prácticas campesinas.
          .tarjeta.bg-white.p-4.shadow(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema4/svg/4.svg" alt="")
            h5.text-center Resiliencia ecológica
            p.mb-0.text-center Toleran variabilidad climática, suelos empobrecidos y sistemas de producción con bajos insumos externos.
          .tarjeta.bg-white.p-4.shadow(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema4/svg/5.svg" alt="")
            h5.text-center Reproducción campesina
            p.mb-0.text-center Pueden guardarse, seleccionarse y mejorarse en la finca sin depender de empresas o tecnologías externas.
          .tarjeta.bg-white.p-4.shadow(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema4/svg/6.svg" alt="")
            h5.text-center Diversidad alimentaria
            p.mb-0.text-center Aportan sabores, colores, texturas y nutrientes únicos, fortaleciendo la salud y la cultura alimentaria local.
          .tarjeta.bg-white.p-4.shadow(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema4/svg/7.svg" alt="")
            h5.text-center Memoria biocultural
            p.mb-0.text-center Cada semilla guarda historias, rituales, calendarios agrícolas y saberes comunitarios transmitidos entre generaciones.

    //- //p (suelto)
    p.mb-5 El rescate, la conservación y el intercambio de estas semillas son acciones clave para #[b defender la diversidad, fortalecer la autonomía rural y proteger los sistemas de vida locales ] frente a los modelos uniformes e industriales de producción.

    //- ## Separador
    Separador

    //- ### 4.4. Diversidad vegetal
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4. Diversidad vegetal

    //- //p
    p.mb-5 La #[b diversidad vegetal] en el predio agroecológico es la base de #[b múltiples funciones ecológicas, productivas y culturales] que fortalecen la resiliencia del sistema. Cada especie aporta #[b estructura, nutrientes, relaciones simbióticas] y respuestas adaptativas que enriquecen el agroecosistema. Esta diversidad se expresa en el #[b espacio, el tiempo y la interacción] entre plantas, suelos, animales y saberes. Diseñar con diversidad vegetal permite:

    //- ## imagen-compuesto 4:8 (6 bgcolor-icono-texto en grid 6)
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/10.png" alt="")
      .col-lg-8(data-aos="fade-left")
        .row
          .col-lg-6.mb-3(data-aos="fade-up")
            .bg-color-4.p-3.rounded-3
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema4/svg/8.svg" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
                .col-lg
                  p.mb-0.text-center.text-lg-start Regular organismos antagonistas.
          .col-lg-6.mb-3(data-aos="fade-up")
            .bg-color-4.p-3.rounded-3
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema4/svg/9.svg" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
                .col-lg
                  p.mb-0.text-center.text-lg-start Proteger el suelo.
          .col-lg-6.mb-3(data-aos="fade-up")
            .bg-color-4.p-3.rounded-3
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema4/svg/10.svg" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
                .col-lg
                  p.mb-0.text-center.text-lg-start Reciclar nutrientes.
          .col-lg-6.mb-3(data-aos="fade-up")
            .bg-color-4.p-3.rounded-3
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema4/svg/11.svg" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
                .col-lg
                  p.mb-0.text-center.text-lg-start Alimentar a la familia.
          .col-lg-6.mb-3(data-aos="fade-up")
            .bg-color-4.p-3.rounded-3
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema4/svg/12.svg" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
                .col-lg
                  p.mb-0.text-center.text-lg-start Conservar la humedad.
          .col-lg-6.mb-3(data-aos="fade-up")
            .bg-color-4.p-3.rounded-3
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema4/svg/13.svg" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
                .col-lg
                  p.mb-0.text-center.text-lg-start Sostener la biodiversidad funcional del territorio.

    //- //p
    p.mb-5 A diferencia de una visión que se limita a contar el número de especies, la agroecología propone organizar las plantas según sus #[b funciones ecológicas], lo que permite rediseñar predios más equilibrados, con #[b menor dependencia de insumos externos] y #[b mayor capacidad de regeneración].

    //- //p
    p.mb-5 Los grupos funcionales de plantas en el agroecosistema son:

    //- ## acordeon 3:9 (5 paneles)
    .row.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/11.png" alt="")
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .div(titulo="Alimenticias para consumo humano")
            p.mb-0 Aportan energía, proteínas, vitaminas y cultura alimentaria. Ejemplos: maíz, frijol, yuca, arracacha, quinua, hortalizas, frutales nativos.
          .div(titulo="Forrajeras y de pastoreo")
            p.mb-0 Alimentan animales, aportan fibra y proteína vegetal. Ejemplos: kikuyo, botón de oro, morera, caña forrajera, alfalfa.
          .div(titulo="Fijadoras de nitrógeno")
            p.mb-0 Enriquecen el suelo mediante simbiosis con microorganismos. Ejemplos: frijol, caupí, canavalia, trébol, soya criolla.
          .div(titulo="Recicladoras de nutrientes")
            p.mb-0 Extraen nutrientes de capas profundas y los reincorporan al sistema. Ejemplos: nabo forrajero, yuca, sorgo, rábano.
          .div(titulo="Coberturas vivas y protectoras del suelo")
            p.mb-0 Conservan humedad, protegen contra la erosión y alimentan la biota edáfica. Ejemplos: mucuna, centeno, avena, canavalia, calabaza.

    //- ## acordeon 9:3 (4 paneles)
    .row.align-items-center.mb-5
      .col-lg-9(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .div(titulo="Aromáticas, medicinales y repelentes")
            p.mb-0 Regulan insectos, aportan salud familiar y diversidad cultural. Ejemplos: ruda, albahaca, ajenjo, menta, citronela.
          .div(titulo="Melíferas y polinizadoras")
            p.mb-0 Atraen abejas y mariposas, mejoran la polinización y conservan la biodiversidad. Ejemplos: girasol, flor de jamaica, trébol, caléndula.
          .div(titulo="Plantas trampa y reguladoras")
            p.mb-0 Atraen plagas específicas para facilitar su monitoreo y control ecológico. Ejemplos: maíz (gusano cogollero), caléndula (pulgones), tabaco (trips).
          .div(titulo="Bioindicadoras")
            p.mb-0 Reflejan el estado del suelo y el equilibrio ecológico. Ejemplos: ortiga (nitrógeno), verdolaga (humedad), cola de caballo (compactación).
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/12.png" alt="")

    //- //p (suelto)
    p.mb-5 Esta clasificación funcional permite integrar la diversidad vegetal al diseño agroecológico, activando su potencial para #[b nutrir, proteger, regular y regenerar] el sistema desde una lógica sistémica y territorial.

    //- ## Separador
    Separador

    //- ### 4.5. Diversidad animal
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.5. Diversidad animal

    //- //p
    p.mb-5 La diversidad animal en el agroecosistema activa relaciones ecológicas clave para la resiliencia, la fertilidad y la autonomía del predio. Cada especie cumple funciones específicas que van más allá de la producción de carne, leche o huevos: acumula biomasa, recicla nutrientes, regula poblaciones, mejora la estructura del suelo y fortalece la cultura alimentaria local.

    //- ## compuesto-imagen 8:4
    .row.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .bg-color-2.p-4.rounded-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/svg/14.svg" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
            .col-lg
              p.mb-0 Organizar los animales según sus funciones ecológicas y productivas permite diseñar sistemas integrados, eficientes y adaptados al contexto territorial, reduciendo la dependencia de insumos externos y aumentando la estabilidad del agroecosistema.
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/13.png" alt="")

    //- //p
    p.mb-5 Los grupos funcionales de animales en el agroecosistema son:

    //- ## slider (6 slides)
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").tarjeta.bg-white.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/21.png" alt="")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Productores de proteína para consumo humano
              p.mb-0 Aportan alimentos esenciales como carne, leche, huevos y miel. 
              p.mb-0 #[b Ejemplos]: gallinas, cerdos, bovinos, cabras, abejas, peces.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/22.png" alt="")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Recicladores de residuos orgánicos
              p.mb-0 Transforman restos vegetales y desechos en abono, cerrando ciclos y reduciendo la carga orgánica. 
              p.mb-0 #[b Ejemplos]: cerdos, gallinas, patos, lombrices, cuyes, conejos, mosca soldado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/23.png" alt="")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Mejoradores del suelo
              p.mb-0 Airean, fertilizan y activan la vida del suelo, mejorando su estructura y dinámica biológica. 
              p.mb-0 #[b Ejemplos]: lombrices, escarabajos, microorganismos asociados a animales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/24.png" alt="")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Reguladores biológicos
              p.mb-0 Controlan poblaciones de plagas, arvenses o vectores por medio de la depredación o competencia. 
              p.mb-0 #[b Ejemplos]: patos, aves insectívoras, sapos, murciélagos, arañas, avispas, gallinas de campo, mariquitas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/25.png" alt="")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Animales de trabajo y compañía
              p.mb-0 Apoyan labores productivas, aportan seguridad y fortalecen vínculos afectivos y culturales. 
              p.mb-0 #[b Ejemplos]: caballos, burros, perros, bueyes.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/26.png" alt="")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Bioindicadores
              p.mb-0 Su presencia, comportamiento o variación reflejan el estado ecológico, climático o cultural del agroecosistema. 
              p.mb-0 #[b Ejemplos]: abejas, ranas, aves silvestres, hormigas; comportamientos animales que anuncian lluvias, heladas o sequías.

    //- ## bgcolor-icono-texto
    .bg-color-2.p-4.rounded-3.mb-5(data-aos="fade-in")
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/tema4/svg/15.svg" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
        .col-lg
          p.mb-0 La diversidad animal también fortalece la cultura rural, la economía familiar y la transmisión de saberes sobre crianza, sanidad y manejo adaptado. Su integración con cultivos, pasturas y zonas de conservación permite activar agroecosistemas vivos, productivos y regenerativos.

</template>

<script>
export default {
  name: 'Tema4',
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
