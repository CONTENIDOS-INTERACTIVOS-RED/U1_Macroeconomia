<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .row.justify-content-center.mb-5
      .col-lg-5.d-none.d-lg-block
          img(src="@/assets/curso/intro/1.svg")
      .col-sm-12.col-lg-7
        p.mb-3 La macroeconomía es una rama de la economía que se encarga del estudio de fenómenos y procesos económicos a gran escala. En esta unidad, se presentarán los conceptos esenciales de la macroeconomía, los cuales son indispensables para entender cómo funcionan las economías nacionales y globales. En un contexto económico global, es considerable que los estudiantes reconozcan la importancia de los indicadores macroeconómicos, tales como el Producto Interno Bruto (PIB), la inflación, el desempleo y la balanza de pagos, dado que estos proporcionan información para la comprensión de los factores determinantes en el funcionamiento económico del país y del mundo.
        .bg-1.p-3
          p.mb-3 El resultado de aprendizaje de esta unidad se fundamente en que los estudiantes puedan comprender los conceptos básicos de la macroeconomía y desarrollen la capacidad de reconocer la relevancia de los indicadores macroeconómicos, en la evaluación de la economía. 
          p.mb-0 Para esto, se organiza el estudio de esta unidad a través de subtemas que permiten profundizar el tema principal: “Introducción a la macroeconomía”.
    p.mb-3 La estructura de esta unidad se divide en tres subtemas principales:
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-7
        AcordionA(tipo="b")
          div(titulo="Concepto y objetivos de la macroeconomía")
            p.mb-0 Este subtema explica, de forma detallada, que es la macroeconomía y que objetivos persigue logrando, de esta forma, situar al estudiante en el contexto.
          div(titulo="Diferencias entre la macroeconomía y microeconomía")
            p.mb-0 Este subtema se encarga de exponer las principales diferencias entre cada una, para proporcionar una comprensión clara de sus respectivos campos de estudio.
          div(titulo="Variables macroeconómicas")
            p.mb-0 Con este subtema, se profundizará en las variables macroeconómicas claves, como el PIB, la inflación, el desempleo y la balanza de pagos, de considerable conocimiento para la evaluación del desempeño económico de un país.
      .col-sm-12.col-lg-5
        img(src="@/assets/curso/intro/2.png")
    p.mb-5 Al finalizar esta unidad, se espera que los estudiantes dominen los conceptos básicos de la macroeconomía y adquieran las habilidades necesarias para interpretar y analizar los indicadores macroeconómicos, elementos primarios para el entendimiento y la participación en el análisis económico global. 
    .bg-2.py-4.px-4
      p.mb-0 Los invitamos a participar en el proceso de aprendizaje, con la finalidad que puedan conectar los conceptos aprendidos con situaciones económicas reales, tanto a nivel local como global, y desarrollar un enfoque crítico hacia los fenómenos económicos que afectan a la sociedad.
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
