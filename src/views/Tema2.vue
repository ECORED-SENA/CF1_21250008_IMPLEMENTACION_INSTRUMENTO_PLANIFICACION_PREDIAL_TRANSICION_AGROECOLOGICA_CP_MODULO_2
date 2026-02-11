<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Introducción al diagnóstico predial productivo

    //- ## compuesto-imagen 9:3 (bloquefoto + párrafo)
    .row.align-items-center.mb-5
      .col-lg-9(data-aos="fade-right")
        .bg-color-4
          .row.justify-content-center.align-items-center
            .col-xl-auto
              img(src="@/assets/curso/tema2/1.png" style="max-width: 420px" alt="").m-auto.mt-xl-0.mt-4
            .col-xl
              .p-4
                p.mb-0 El diagnóstico predial productivo permite comprender el funcionamiento del agroecosistema en términos de producción, manejo de recursos, integración de componentes y autonomía territorial. A diferencia del diagnóstico ambiental, este enfoque analiza las prácticas que sostienen la vida en el predio: qué se cultiva, qué se cría, cómo se fertiliza, qué se consume, qué se vende y cómo se articulan los ciclos internos.
        p.mt-4 Este proceso reconoce el predio como un sistema vivo, donde interactúan decisiones técnicas, saberes locales, dinámicas familiares y relaciones ecológicas. Al identificar los flujos de materia, energía, nutrientes y conocimientos, el diagnóstico productivo permite visualizar las #[b fortalezas y limitaciones] del sistema, activar procesos de #[b rediseño agroecológico] y proyectar escenarios de #[b transición desde la realidad concreta del territorio].
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/2.png" alt="").m-auto

    //- ## Separador
    Separador

    //- ### 2.1. Importancia del diagnóstico predial productivo
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1. Importancia del diagnóstico predial productivo en la transición agroecológica

    //- //p
    p.mb-5 El diagnóstico productivo no solo describe el estado actual del predio, sino que también se convierte en una herramienta estratégica para guiar el cambio hacia sistemas más sostenibles, autónomos y resilientes. A continuación, se presenta una tabla que sintetiza sus principales aportes en la transición agroecológica:

    //- ## pestanas-verticales col:10
    .row.justify-content-center.mb-5
      .col-lg-8
        TabsA.color-acento-contenido(data-aos="zoom-in")
          .tarjeta.color-acento-contenido--borde.p-4(titulo="Base para el rediseño funcional")
            h4 Base para el rediseño funcional
            p.mb-0 Permite comprender cómo se articulan los componentes productivos del predio y qué ajustes pueden fortalecer su eficiencia ecológica.
          .tarjeta.color-acento-contenido--borde.p-4(titulo="Lectura crítica del modelo dominante")
            h4 Lectura crítica del modelo dominante
            p.mb-0 Visibiliza prácticas heredadas del Sistema Agroalimentario Dominante (SAD) que generan dependencia, degradación o fragmentación.
          .tarjeta.color-acento-contenido--borde.p-4(titulo="Activación de procesos regenerativos")
            h4 Activación de procesos regenerativos
            p.mb-0 Identifica oportunidades para integrar cultivos y animales, reciclar nutrientes, diversificar especies y fortalecer la autonomía alimentaria.
          .tarjeta.color-acento-contenido--borde.p-4(titulo="Fortalecimiento de la toma de decisiones")
            h4 Fortalecimiento de la toma de decisiones
            p.mb-0 Brinda información clara para priorizar acciones, asignar recursos y construir planes de acción predial.
          .tarjeta.color-acento-contenido--borde.p-4(titulo="Reconocimiento de saberes funcionales")
            h4 Reconocimiento de saberes funcionales
            p.mb-0 Integra conocimientos campesinos sobre manejo, adaptación, selección y uso de recursos productivos.
          .tarjeta.color-acento-contenido--borde.p-4(titulo="Monitoreo de la transición")
            h4 Monitoreo de la transición
            p.mb-0 Establece una línea base para evaluar cambios en productividad, eficiencia ecológica y soberanía territorial.

    //- //wrapper: bg-fondo-1
    .bg-full-width.bg-fondo-1.mb-5
      .px-4.px-md-5.py-4

        //- ### 2.2. Relación del diagnóstico con el IPPTA
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2. Relación del diagnóstico con el IPPTA y la planificación territorial

        //- ## imagen-compuesto 3:9 (//p + //bloquefoto img:right)
        .row.align-items-center.mb-5
          .col-lg-3.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src="@/assets/curso/tema2/3.png" alt="").mb-4.mb-lg-0
          .col-lg-9(data-aos="fade-left")
            p.mb-4 El diagnóstico productivo es una herramienta fundamental para alimentar el #[em Instrumento de Planificación Predial para la Transición Agroecológica] (IPPTA), ya que permite que cada acción del plan esté respaldada por una lectura funcional y contextualizada del predio. A través de #[b indicadores participativos], #[b fichas técnicas], #[b mapas productivos] y #[b recorridos interpretativos], se construye una visión integrada del agroecosistema, orientada a la regeneración ecológica, la equidad social y la autonomía territorial.
            .bg-color-3.overflow-hidden
              .row.align-items-center
                .col-xl.order-lg-1
                  .p-4
                    p.mb-0 Este diagnóstico no solo describe el estado actual del sistema productivo, sino que activa #[b procesos de reflexión colectiva], #[b reconexión con los ciclos naturales] y #[b construcción de alternativas productivas contextualizadas]. Su articulación con el componente ambiental del IPPTA permite diseñar estrategias integrales que restauran la base ecológica al tiempo que fortalecen la capacidad productiva del territorio.
                .col-xl-auto.order-lg-2
                  img(src="@/assets/curso/tema2/4.png" style="max-width: 420px" alt="").m-auto.mt-xl-0.mt-4

        //- #### 2.2.1. Componente productivo del IPPTA
        .titulo-h3.mb-5(data-aos="fade-right")
          .titulo-h3__fondo
            img.titulo-h3__imagen(src="@/assets/bullets/title-h3.svg")
            h3.titulo-h3__texto Componente productivo del IPPTA

        //- ## compuesto-imagen 8:4 (//p + //bgcolor-card + //p)
        .row.align-items-center.mb-5
          .col-lg-8(data-aos="fade-right")
            p.mb-4 El componente productivo del IPPTA, sustentado en el diagnóstico, permite entender cómo se organiza, funciona y reproduce el sistema productivo dentro del predio. La información recolectada en esta fase es clave para identificar prácticas que #[b favorecen o limitan] la regeneración ecológica, la eficiencia funcional y la autonomía territorial.
            .bg-color-8.p-4.rounded-3
              .tarjeta.bg-white.p-4
                p.mb-0 Este componente facilita la #[b formulación de metas realistas] de diversificación, integración y reciclaje, y orienta el diseño de estrategias adaptadas a las condiciones #[b productivas, culturales y económicas] de cada finca. Al reconocer los flujos de #[b materia, energía, nutrientes y saberes], se fortalecen las decisiones orientadas a la resiliencia del agroecosistema y su capacidad de sostener la vida desde el territorio.
          .col-lg-4.mb-3.mb-lg-0(data-aos="fade-left")
            figure
              img(src="@/assets/curso/tema2/5.png" alt="").m-auto

        //- //p (fuera del compuesto)
        p.mb-5 A continuación, se resumen los principales aportes del diagnóstico productivo al IPPTA, destacando cómo cada elemento contribuye a una planificación predial coherente con los principios de la transición agroecológica.

    //- //end-wrapper bg-fondo-1

    //- //wrapper: bg-fondo-2
    .bg-full-width.bg-fondo-2.mb-5
      .px-4.px-md-5.py-4

        //- ## carrusel-tarjetas-icono (6 cards)
        SlyderF(columnas="col-lg-6 col-xl-4").mb-5
          .tarjeta.bg-white.shadow.p-4.h-100(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema2/svg/6.svg" alt="")
            h5.text-center Lectura funcional del predio
            p.mb-0.text-center Sustenta cada acción del plan con base en el conocimiento real del sistema productivo.
          .tarjeta.bg-white.shadow.p-4.h-100(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema2/svg/7.svg" alt="")
            h5.text-center Herramientas participativas
            p.mb-0.text-center Utiliza fichas, mapas e indicadores para construir una visión compartida del agroecosistema.
          .tarjeta.bg-white.shadow.p-4.h-100(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema2/svg/8.svg" alt="")
            h5.text-center Activación de procesos colectivos
            p.mb-0.text-center Promueve reflexión, aprendizaje y apropiación territorial de la planificación.
          .tarjeta.bg-white.shadow.p-4.h-100(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema2/svg/9.svg" alt="")
            h5.text-center Articulación con el componente ambiental
            p.mb-0.text-center Permite diseñar estrategias integrales que restauran la base ecológica y productiva.
          .tarjeta.bg-white.shadow.p-4.h-100(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema2/svg/10.svg" alt="")
            h5.text-center Diseño de metas adaptadas
            p.mb-0.text-center Facilita estrategias realistas de diversificación, integración y reciclaje.
          .tarjeta.bg-white.shadow.p-4.h-100(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema2/svg/11.svg" alt="")
            h5.text-center Orientación a la resiliencia
            p.mb-0.text-center Fortalece la capacidad del sistema para sostener la vida y adaptarse al cambio.

    //- ### 2.3. Principio de la transición agroecológica
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3. Principio de la transición agroecológica

    //- //p
    p.mb-5 La transición agroecológica no se basa en recetas fijas, sino en principios que orientan el acompañamiento y las acciones en el territorio. Estos principios permiten leer críticamente el modelo agroindustrial dominante y activar procesos de transformación desde la realidad concreta de cada predio. En el caso del #[b componente productivo], los principios fundamentales que guían la transición son los siguientes:

    //- ## acordeon 3:9
    .row.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/12.png" alt="").mb-4.mb-lg-0
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .div(titulo="Mantener el suelo vivo y fértil")
            p El suelo funciona como un organismo vivo que sostiene el agroecosistema. Conservar su fertilidad implica proteger su estructura, su biota, su capacidad de retener agua y su dinámica de reciclaje de nutrientes. Desde un enfoque agroecológico, esto se estimula mediante:
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Cobertura vegetal permanente.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Rotación de cultivos.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Incorporación de materia orgánica.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Uso de abonos naturales.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Reducción de la compactación del suelo.
            p.mb-0 Estas acciones reducen la dependencia de fertilizantes sintéticos y activan procesos de fertilidad viva donde intervienen lombrices, hongos, bacterias y raíces. Un suelo fértil incrementa la resiliencia frente a sequías, erosión y enfermedades, fortaleciendo la autonomía predial y la solidez ecológica del sistema.
          .div(titulo="Mantener y aumentar la diversidad")
            p.mb-0 La diversidad constituye la base de la resiliencia agroecológica. Su fortalecimiento implica diseñar sistemas que integren múltiples especies vegetales y animales mediante asociaciones funcionales que favorezcan la complementariedad, el reciclaje de nutrientes y la estabilidad ecológica. La diversidad amplía la oferta alimentaria, mejora el aprovechamiento energético y disminuye la presión sobre ecosistemas externos. Además, cada semilla, especie y práctica representa un saber territorial; por ello, aumentar la diversidad es recuperar memoria cultural y fortalecer la autonomía comunitaria.
          .div(titulo="Integración entre animales y cultivos")
            p La integración funcional entre animales y cultivos permite cerrar ciclos, reciclar nutrientes y diversificar la producción. Los animales actúan como agentes ecológicos que aportan fertilidad, regulan arvenses y dinamizan el sistema. Esta lógica circular se activa cuando los residuos vegetales alimentan a los animales y las excretas retornan al suelo como fertilizante. La planificación integrada facilita:
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Producción de forrajes en el predio.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Reducción en la compra de concentrados.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Aprovechamiento de subproductos.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Bienestar animal.
            p.mb-0 Al mismo tiempo, esta articulación recupera prácticas campesinas y saberes tradicionales, fortaleciendo el vínculo entre producción, cultura y cuidado.

    //- ### 2.4. Enfoque integral del predio
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4. Enfoque integral del predio

    //- //p
    p.mb-5 La transición agroecológica exige una comprensión del predio más allá de la simple suma de parcelas, animales y cultivos aislados. Se trata de concebirlo como un #[b sistema vivo, diverso e interconectado], donde cada componente cumple funciones #[b ecológicas, productivas y sociales]. El enfoque integral permite visualizar el agroecosistema en su totalidad, reconociendo las relaciones dinámicas entre el suelo, el agua, la biodiversidad, las prácticas humanas y los flujos internos.

    //- ## compuesto-imagen 9:3 (bgcolor-icono-card)
    .row.align-items-center.mb-5
      .col-lg-9(data-aos="fade-right")
        .bg-color-2.p-4.rounded-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/svg/14.svg" style="max-width: 120px" alt="").m-auto.mb-4.mb-lg-0
            .col-lg
              .tarjeta.bg-white.p-4
                p.mb-0 Este enfoque rompe con la #[b fragmentación impuesta por el Sistema Agroalimentario Dominante (SAD)], que tiende a especializar áreas, separar funciones y desconectar los ciclos naturales. En contraste, propone #[b rediseñar el predio desde la complementariedad], buscando la eficiencia ecológica y la autonomía funcional, de modo que cada decisión productiva esté articulada con las dinámicas del territorio.
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/13.png" alt="").m-auto

    //- #### 2.4.1. Características del Enfoque Integral
    .titulo-h3.mb-5(data-aos="fade-right")
      .titulo-h3__fondo
        img.titulo-h3__imagen(src="@/assets/bullets/title-h3.svg")
        h3.titulo-h3__texto Características del Enfoque Integral

    //- //p
    p.mb-5 El enfoque integral del predio implica una mirada sistémica que incorpora tanto aspectos biofísicos como culturales. Sus principales características son:

    //- ## imagen-compuesto 3:9 (carrusel-tarjetas-icono)
    .row.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/15.png" alt="").mb-4.mb-lg-0
      .col-lg-9(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.bg-white.shadow.p-4.h-100(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema2/svg/16.svg" alt="")
            h5.text-center Zonificación funcional
            p.mb-0.text-center Identificación de zonas con funciones específicas: productivas, de conservación, de descarga, de concentración y de transición.
          .tarjeta.bg-white.shadow.p-4.h-100(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema2/svg/17.svg" alt="")
            h5.text-center Flujos internos
            p.mb-0.text-center Reconocimiento de los flujos de nutrientes, agua, energía, residuos, saberes y alimentos que conectan los distintos elementos del predio.
          .tarjeta.bg-white.shadow.p-4.h-100(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema2/svg/18.svg" alt="")
            h5.text-center Interacciones ecológicas
            p.mb-0.text-center Valoración de las relaciones entre cultivos, animales, microorganismos, coberturas, sombra y humedad, para fortalecer la estabilidad del sistema.
          .tarjeta.bg-white.shadow.p-4.h-100(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema2/svg/19.svg" alt="")
            h5.text-center Prácticas productivas articuladas
            p.mb-0.text-center Asociación de las labores agrícolas con procesos naturales: rotación, reciclaje, cobertura vegetal, integración cultivos–animales.
          .tarjeta.bg-white.shadow.p-4.h-100(data-aos="zoom-in-up")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src="@/assets/curso/tema2/svg/20.svg" alt="")
            h5.text-center Dimensión social y cultural
            p.mb-0.text-center Inclusión del uso familiar del predio, los saberes locales, las decisiones comunitarias y los vínculos afectivos y simbólicos con el paisaje.

    //- ## bgcolor-icono-texto
    .bg-color-5.p-4.rounded-3.mb-5(data-aos="fade-up")
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/tema2/svg/21.svg" style="max-width: 90px" alt="").m-auto.mb-4.mb-lg-0
        .col-lg
          p.mb-0 Este enfoque permite que el predio sea concebido como una #[b unidad de vida] y no simplemente como una unidad de producción. Así, la planificación agroecológica se enraíza en la realidad concreta del territorio, respetando sus ritmos y potenciando su capacidad regenerativa.

    //- #### 2.4.2. Elementos claves del sistema productivo
    .titulo-h3.mb-5(data-aos="fade-right")
      .titulo-h3__fondo
        img.titulo-h3__imagen(src="@/assets/bullets/title-h3.svg")
        h3.titulo-h3__texto Elementos claves del sistema productivo

    //- //p
    p.mb-5 Los siguientes elementos permiten comprender cómo se #[b organiza y funciona el agroecosistema] en su dimensión productiva. Reconocer estos aspectos es esencial para identificar los #[b flujos, interacciones y potencialidades] del predio, desde una mirada integral que articula lo ecológico, lo técnico y lo cultural.

    .row.align-items-center.mb-5.justify-content-center
      .col-lg-6
        //- ## figura
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 1.
          span Enfoque integral del predio
        figure.mb-5(data-aos="fade-up")
          img(src="@/assets/curso/tema2/figura1.png" alt="Figura 1. Enfoque integral del predio" style="max-width: 610px; height: auto;")

    //- //p
    p.mb-5 A continuación, una descripción integral del funcionamiento del predio y sus dinámicas internas:

    //- ## acordeon 3:9 (3 paneles)
    .row.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/22.png" alt="").mb-4.mb-lg-0
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .div(titulo="Componentes productivos")
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Cultivos principales y secundarios: especies sembradas, asociaciones, rotaciones, cobertura vegetal.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Animales criados: especies, sistemas de manejo, integración con cultivos.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Áreas funcionales: zonas de producción, conservación, transición, descarga, concentración.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Infraestructura: corrales, bodegas, riego, cercas, caminos internos.
          .div(titulo="Flujos internos del predio")
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Nutrientes: origen, reciclaje, pérdidas, tipo de fertilización.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Agua: captación, uso, drenaje, almacenamiento, eficiencia.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Materia orgánica: residuos vegetales, estiércol, compostaje, cobertura.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Energía: fuentes (manual, animal, mecánica), eficiencia y autonomía.
          .div(titulo="Relaciones ecológicas")
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Interacciones: cultivos–animales, sombra–humedad, biodiversidad funcional.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Ciclos naturales: activados o interrumpidos (agua, nutrientes, sucesión vegetal).
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Especies clave: polinizadores, controladores biológicos, arvenses útiles.

    //- ## acordeon 9:3 (3 paneles, imagen derecha)
    .row.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/23.png" alt="").mb-4.mb-lg-0
      .col-lg-9.order-lg-1(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .div(titulo="Prácticas de manejo")
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Suelo: labranza, fertilización, conservación, cobertura.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Cultivos: siembra, control de plagas, cosecha, rotación.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Animales: alimentación, sanidad, reproducción, bienestar.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Residuos: aprovechamiento, disposición, reciclaje.
          .div(titulo="Producción y destino")
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Autoconsumo: alimentos, medicina, energía, insumos.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Comercialización: productos vendidos, canales, frecuencia, precios.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Transformación: procesamiento artesanal, valor agregado.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Intercambio comunitario: trueque, redes locales, ferias.
          .div(titulo="Autonomía y resiliencia")
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Dependencia de insumos externos: semillas, fertilizantes, concentrados.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Capacidad de adaptación: frente a clima, mercado, plagas.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Diversificación funcional: especies, usos, ciclos.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Sistemas locales de conocimiento: saberes, prácticas, innovación campesina.

    //- //p (cierre)
    p.mb-0 Estos elementos permiten construir un diagnóstico productivo profundo, que no solo describe el estado del predio, sino que revela su capacidad de transformación y sostenibilidad en el marco de la transición agroecológica.

    //- //end-wrapper bg-fondo-2

</template>

<script>
export default {
  name: 'Tema2',
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
