<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Diferencia entre microeconomía y macroeconomía'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="flip-up")
    p.mb-5 La economía, como disciplina, se divide en dos grandes ramas: microeconomía y macroeconomía. Ambas áreas, aunque relacionadas, se enfocan en diferentes aspectos de la actividad económica. 
    .row.justify-content-center.align-items-stretch.mb-5
      .col-sm-12.col-lg-6
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/t2/1.png" alt="")
          .custom-image-card__text.p-4.shadow-soft
            h5.mb-2.text-center Microeconomía
            p.mb-4 Estudia las decisiones de los individuos, las empresas y los mercados a pequeña escala.
      .col-sm-12.col-lg-6
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/t2/2.png" alt="")
          .custom-image-card__text.p-4.shadow-soft
            h5.mb-2.text-center Macroeconomía
            p.mb-0 Se ocupa del comportamiento de la economía en su conjunto, analizando fenómenos como el crecimiento económico, la inflación y el desempleo.
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-12
        .bg-1.p-4
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/t2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Para comprender cómo interactúan estos dos enfoques, es necesario conocer sus características, diferencias y aplicaciones. A continuación, se desarrollan los aspectos puntuales que distinguen a la micro de la macroeconomía, sus aplicaciones en la política económica y los métodos de análisis que emplean para su desarrollo.


    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Visión amplia de la microeconomía y la macroeconomía
    p.mb-3 Estudiemos una visión más amplia de estos dos enfoques:
    .bg-full-width.bg-fondo-slider.mb-5(data-aos="flip-up")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Microeconomía
              p.mb-3 Enfoca su estudio en las decisiones económicas de las personas, los hogares y las empresas, así como su relación con los mercados. Su propósito es entender cómo las fuerzas de oferta y demanda determinan los precios de los bienes y servicios, así como el comportamiento de los agentes económicos a nivel individual. 
              p.mb-0 Esta área analiza la distribución de los recursos y cómo las decisiones de compra y producción afectan la asignación de estos recursos dentro de la economía. Dentro de su estudio se incluyen el análisis de los costos, la maximización de la utilidad y la eficiencia en la producción (eggers, 2016).
            .col-lg-5.d-none.d-lg-block
              figure
                img(src="@/assets/curso/t2/4.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Macroeconomía
              p.mb-3 Tiene un enfoque más amplio, interesado en el comportamiento global de la economía. Examina el producto interno bruto (PIB), el empleo, la inflación y las tasas de interés. Este campo se enfoca en las políticas que pueden influir en la economía en su conjunto, como la política fiscal y la política monetaria, y busca comprender cómo los cambios en estos indicadores afectan el bienestar general de la sociedad. 
              p.mb-0  La macroeconomía es requerida para la toma de decisiones a nivel gubernamental y en la planificación económica de un país (sánchez campillo, 2015).
            .col-lg-5.d-none.d-lg-block
              figure
                img(src="@/assets/curso/t2/5.png")




    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Diferencias entre microeconomía y macroeconomía
    p.mb-3 Aunque, tanto la microeconomía como la macroeconomía pertenecen al campo de la economía, sus enfoques y áreas de estudio, son claramente distintos. A continuación, se presentan las principales diferencias:
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t2/6.png")
      .col-sm-12.col-lg-8
        LineaTiempoD.color-acento-contenido.large
          div(numero="1" titulo="Escala de análisis") 
            ul.lista-ul
              li.d-flex
                i.fas.fa-circle.color-acento-contenido
                span La microeconomía se interesa en la toma de decisiones de los agentes individuales, como consumidores, empresas y trabajadores. Se enfoca en el comportamiento de los mercados específicos y la asignación de recursos en estos.
              li.d-flex
                i.fas.fa-circle.color-acento-contenido
                span La macroeconomía, en cambio, estudia la economía a nivel a mayor escala, es decir, examina las tendencias globales como el crecimiento económico, el empleo, la inflación y el comercio internacional (Tavera Camacho, 2020).
          div(numero="2" titulo="Ámbito de estudio") 
            ul.lista-ul
              li.d-flex
                i.fas.fa-circle.color-acento-contenido
                span En la microeconomía, los temas incluyen la teoría de la demanda, la oferta, la competencia perfecta, los monopolios, la elasticidad, los costos de producción y las decisiones de consumo.
              li.d-flex
                i.fas.fa-circle.color-acento-contenido
                span En la macroeconomía, se analizan variables globales como el PIB, las tasas de interés, el gasto público, la política fiscal y monetaria, el desempleo y la balanza de pagos (Sánchez Campillo, 2015).     
          div(numero="3" titulo="Política económica") 
            ul.lista-ul
              li.d-flex
                i.fas.fa-circle.color-acento-contenido
                span Mientras que la microeconomía se centra en las decisiones de los agentes económicos y su optimización de recursos, la macroeconomía se interesa por las políticas gubernamentales que influyen en la economía global, como la regulación del mercado laboral, el control de la inflación y el estímulo a la inversión (Zevallos Avilés, 2016).
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Aplicaciones y políticas
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/t2/7.png', alt='')
      .col-sm-12.col-lg-9
        p.mb-3 La microeconomía tiene aplicaciones en la optimización de recursos a nivel individual y empresarial. Por ejemplo, las empresas utilizan los principios microeconómicos para maximizar sus beneficios, gestionando eficientemente sus costos y tomando decisiones estratégicas sobre precios y producción. 
        p.mb-3.p-3.bg-1 La política microeconómica se orienta a mejorar la eficiencia de los mercados, regular las prácticas empresariales y promover la competencia (Eggers, 2016).
        p.mb-0 En la macroeconomía, las políticas son cruciales para la estabilidad de la economía a nivel nacional. Las políticas fiscales (como el gasto público y los impuestos) y las políticas monetarias (como la gestión de las tasas de interés y la oferta monetaria) son herramientas utilizadas por los gobiernos para influir en el crecimiento económico, controlar la inflación y reducir el desempleo. 
    .bg-7.mb-5
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0 La política económica internacional se enfoca en la regulación del comercio exterior y el manejo de la balanza de pagos. Estas políticas son necesarias para estabilizar la economía y fomentar un entorno económico favorable para el crecimiento sostenible.
        .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/t2/8.png', alt='')
    
    
    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Métodos de análisis
    p.mb-3 A continuación, se relacionan lo más populares métodos cualitativos y cuantitativos que emplea cada disciplina para analizar los comportamientos del mercado, según su enfoque:
    .bg-full-width.bg-fondo-slider.mb-5(data-aos="flip-up")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Microeconomía
              ul.lista-ul
                li.d-flex
                  i.fas.fa-circle.color-acento-contenido
                  span Método de oferta y demanda.
                li.d-flex
                  i.fas.fa-circle.color-acento-contenido
                  span Elasticidad.
                li.d-flex
                  i.fas.fa-circle.color-acento-contenido
                  span Costo marginal.
                li.d-flex
                  i.fas.fa-circle.color-acento-contenido
                  span Teoría de juegos.
                li.d-flex
                  i.fas.fa-circle.color-acento-contenido
                  span Teoría de la producción.
            .col-lg-5.d-none.d-lg-block
                img(src="@/assets/curso/t2/9.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Macroeconomía
              ul.lista-ul
                li.d-flex
                  i.fas.fa-circle.color-acento-contenido
                  span Curva de Phillips.
                li.d-flex
                  i.fas.fa-circle.color-acento-contenido
                  span Modelo IS-LM.
                li.d-flex
                  i.fas.fa-circle.color-acento-contenido
                  span Modelos de equilibrio general.
                li.d-flex
                  i.fas.fa-circle.color-acento-contenido
                  span Modelos de crecimiento económico.
                li.d-flex
                  i.fas.fa-circle.color-acento-contenido
                  span Modelos de determinación de precios.
            .col-lg-5.d-none.d-lg-block
              figure
                img(src="@/assets/curso/t2/10.png")
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-4
        img(src="@/assets/curso/t2/11.png")
      .col-sm-12.col-lg-8.bg-8.p-4
        p.mb-0 Mientras la microeconomía emplea, en su mayoría, #[b métodos cualitativos y cuantitativos] para analizar el comportamiento de los agentes individuales en el mercado, la macroeconomía, por su parte, utiliza #[b modelos econométricos y estadísticos] que permiten estudiar la relación entre las principales variables macroeconómicas. Estos enfoques permiten comprender los efectos de las políticas fiscales y monetarias en la economía global y anticipar los impactos de diversas intervenciones gubernamentales en los indicadores macroeconómicos (Sánchez Campillo, 2015; Zevallos Avilés, 2016).
    
    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Ejemplos de los enfoques Micro y macroeconómicos
    p.mb-3 Finalicemos este tema, conociendo algunos ejemplos de los enfoques micro y macroeconómicos:
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4
        .custom-image-card.h-100.text-center
          img.custom-image-card__image(src="@/assets/curso/t2/12.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2 Microeconomía
            p.mb-0 Un ejemplo de este enfoque, es el de un mercado local, en el que el precio de un producto puede afectar en la decisión de compra de los consumidores de este producto.
      .col-lg-6.mb-4
        .custom-image-card.h-100.text-center
          img.custom-image-card__image(src="@/assets/curso/t2/13.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2 Macroeconomía
            p.mb-0 Un ejemplo de este enfoque, es cómo el producto interno bruto de un país, afecta el desarrollo económico de este.


      .row.justify-content-center.align-items-center.mb-5
          .col-sm-12.col-lg-10
            .bg-color-white.shadow-soft
              .row.justify-content-around.align-items-center.py-4.px-5
                .col-md-auto.d-none.d-md-block
                  img(src="@/assets/template/icono-pdf.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Para profundizar sobre este concepto, lo invitamos a leer el  siguiente artículo: 
                      p.mb-0 Molina, M. G. (2020). La macroeconomía: un punto de vista metodológico (No. 18595). Universidad Nacional de Colombia, FCE, CID.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/anexo_2.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-arrow-right


    
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
