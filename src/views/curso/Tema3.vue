<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Variables macroeconómicas: PIB, inflación, desempleo, balanza de pagos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Las variables macroeconómicas son los indicadores que se utilizan para medir el desempeño de una economía a nivel global. 
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t3/1.png", alt="")
      .col-sm-12.col-lg-8
        .bg-9.p-4
          p.mb-0 Estas variables son fundamentales para analizar la salud económica de un país y para la formulación de políticas públicas que puedan promover el desarrollo económico y el bienestar social; la medición de estas variables permite a los economistas, gobiernos y organizaciones internacionales comprender cómo se está comportando la economía, identificar desequilibrios y tomar decisiones informadas para fomentar el crecimiento económico sostenible. 
    p.mb-5 En este contexto, algunas de las variables macroeconómicas más relevantes son el Producto Interno Bruto (PIB), la inflación, el desempleo y la balanza de pagos, cada una con su función específica y su relación directa con las políticas económicas de los gobiernos.
    .titulo-figura.mb-2
        h5 Figura 1. 
        span Variables económicas 
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        figure(data-aos="fade-up").mb-5
          img(src='@/assets/curso/t3/2.svg', alt='').mb-0




    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Producto Interno Bruto (PIB)

    .bg-8.p-4.mb-5
      p.mb-3 Es una de las variables más importantes en la macroeconomía, refleja el valor total de los bienes y servicios finales producidos en un país durante un periodo determinado, generalmente un año o un trimestre. El PIB se utiliza como indicador del tamaño y la salud de una economía, y su crecimiento; tiene implicaciones significativas en la política económica y social de un país. Un aumento en el PIB generalmente se relaciona con un crecimiento económico, mientras que una disminución puede señalar una recesión o desaceleración económica.
      p.mb-0.fw-bold El cálculo del PIB, puede realizarse de tres maneras principales: 
    

    .bg-full-width.bg-fondo-slider-2.mb-5(data-aos="flip-up")
      .p-4.p-md-5
        .row.justify-content-center.mb-5
          .col-sm-12.col-lg-4.pe-xl-8.d-none.d-lg-block
            figure.mb-0
              img(src='@/assets/curso/t3/3.svg', alt='Texto que describa la imagen')
          .col-11.col-md-8.col-xl-7
            SlyderF(columnas="col-12 col-lg-6")
              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t3/4.svg' alt='AvatarTop')
                  p.mb-0.text-center Por el enfoque de la producción.
              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t3/5.svg' alt='AvatarTop')
                  p.mb-0.text-center Por el enfoque del ingreso.
              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t3/6.svg' alt='AvatarTop')
                  p.mb-0.text-center Por el enfoque del gasto.

    p.mb-3 Cada uno de estos métodos proporciona una visión diferente del proceso económico, pero todos apuntan a medir el mismo valor total de la producción, en la economía. 
    p.mb-3 El PIB ajustado por inflación se conoce como el PIB real, mientras que el PIB nominal se refiere al valor total sin ajustes, por cambios en los precios (Zevallos Avilés, 2016).
    .p-4.bg-6.mb-5
      p.mb-0 #[b El PIB] también es crucial para la comparación entre economías, dado que permite evaluar el nivel de desarrollo de un país y su capacidad para generar empleo, inversión y riqueza. Es una herramienta útil para la toma de decisiones en materia de política económica, especialmente en la implementación de políticas fiscales y monetarias.
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-8
        .bg-color-white.shadow-soft.py-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-md-auto.d-none.d-lg-block
              img(src="@/assets/template/bg-icono-video.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Para conocer más sobre el tema, lo invitamos a ver el siguiente video:
                  p.mb-0 Solopapelyboli (2023). 2.1 Cálculo del PIB. (video). YouTube
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href='https://youtu.be/yblqORM7BGc?si=zDfccDci3cl-Fs28' target="_blank")
                    span Ver Video
                    i.fas.fa-arrow-right
    
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Inflación
    p.mb-5 Es un indicador macroeconómico que se refiere al aumento generalizado y sostenido de los precios de los bienes y servicios, en una economía durante un periodo de tiempo prolongado. 
    .bg-3.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/t3/7.png', alt='')
        .col-lg
          .p-4
            p.mb-0 Este fenómeno implica una pérdida del poder adquisitivo de la moneda, lo que afecta negativamente a los consumidores, pues con la misma cantidad de dinero, podrán adquirir menos bienes y servicios.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-9
        p.mb-3 La tasa de inflación se calcula generalmente utilizando índices de precios como el Índice de Precios al Consumidor (IPC), que mide la variación en los precios de una canasta representativa de bienes y servicios, consumidos por los hogares.
        p.mb-3.bg-6.p-3 La inflación moderada puede ser un signo de una economía en crecimiento, debido a que indica una demanda creciente, pero cuando la inflación es excesiva (hiperinflación), genera inestabilidad económica, disminuyendo el valor de los ahorros y aumentando la incertidumbre (Eggers, 2016).
        p.mb-0 Uno de los compromisos de los gobiernos y los bancos centrales, es el de controlar la inflación a través de políticas monetarias y fiscales. 
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/t3/8.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-12
        .bg-1.p-4
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/t3/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Un nivel adecuado de inflación incentiva el consumo y la inversión, mientras que una inflación excesiva o muy baja, es perjudicial para la economía en su conjunto. 

    p.mb-5 Para controlarla, se utilizan herramientas como la modificación de las tasas de interés, la oferta monetaria y el control del gasto público (Sánchez Campillo, 2015).
    .row.justify-content-center.align-items-center.mb-5
          .col-sm-12.col-lg-8
            .bg-color-white.shadow-soft
              .row.justify-content-around.align-items-center.py-4.px-5
                .col-md-auto.d-none.d-lg-block
                  img(src="@/assets/template/bg-icono-link.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Para profundizar en este tema, lo invitamos a leer el siguiente artículo:
                      p.mb-0 Gutiérrez Andrade, O. & Zurita Moreno, A. (2006). Sobre la inflación. PERSPECTIVAS, 9(3), pp. 81-115. 
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/anexo_3.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-arrow-right


    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Desempleo
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/t3/10.png", alt="")
      .col-sm-12.col-lg-8
        p.mb-3 Es una variable macroeconómica que refleja la cantidad de personas que están dispuestas y disponibles para trabajar, pero que no pueden encontrar empleo. 
        p.mb-3 La tasa de desempleo es uno de los indicadores más importantes para medir el bienestar de una economía, puesto que está directamente relacionado con la capacidad productiva y la eficiencia de los recursos humanos de un país.
        p.mb-0.fw-bold El desempleo se clasifica en tres categorías: 

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="flip-up")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Desempleo cíclico
              p El que se produce durante las recesiones económicas, cuando la demanda agregada disminuye.
            .col-lg-5.d-none.d-lg-block
              figure
                img(src='@/assets/curso/t3/11.png', alt='Texto que describa la imagen')
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Desempleo estructural
              p El que ocurre cuando hay desajustes entre las habilidades de los trabajadores y las necesidades del mercado laboral.
            .col-lg-5.d-none.d-lg-block
              figure
                img(src='@/assets/curso/t3/12.png', alt='Texto que describa la imagen')
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Desempleo friccional
              p El que refleja el tiempo de transición entre empleos o cambios en las condiciones laborales.
            .col-lg-5.d-none.d-lg-block
              figure
                img(src='@/assets/curso/t3/13.png', alt='Texto que describa la imagen')
    
    
    p.mb-3 Un nivel elevado de desempleo es un signo de una economía ineficiente, afectando negativamente al crecimiento económico, conllevando al aumento de la pobreza y generando tensiones sociales.
    p.mb-3 Caso contrario, un nivel muy bajo de desempleo, refleja una economía sobrecalentada, lo que podría llevar a la inflación. 
    p.mb-5 La política económica debe buscar un equilibrio entre estos extremos, promoviendo el pleno empleo sin generar inflación excesiva (Eggers, 2016).
    .bg-full-width.bg-4.mb-lg-5(data-aos="flip-up")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4  Lo invitamos a leer los siguientes artículos, los culaes le permitirán tener una mejor comprensión del tema:
            p.mb-4 Pugliese, E. (2000). Qué es el desempleo. Política y sociedad, 34, pp. 59-67.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> ¿Qué es el desempleo?.
            p.mb-4 Arango, L. E. (2001). El desempleo en Colombia. Borradores de Economía, 176.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> El desempleo en Colombia.
          .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/14.png', alt='')

    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Balanza de pagos
    p.mb-5 La balanza de pagos es un registro contable de todas las transacciones económicas realizadas entre un país y el resto del mundo, durante un periodo determinado. Esta variable refleja las exportaciones e importaciones de bienes y servicios, los movimientos de capital y la transferencia de recursos entre el país y el exterior. 
    p.mb-5 Se divide en dos grandes cuentas: 
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/t3/15.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2 Cuenta corriente
            p.mb-0 Incluye el comercio de bienes, servicios, ingresos y transferencias.
      .col-lg-6.mb-4
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/t3/16.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2 Cuenta de capital y financiera
            p.mb-0 Muestra los flujos de inversión y de financiamiento.
    p.mb-5 Una balanza de pagos equilibrada, es aquella en la que las exportaciones e importaciones están en equilibrio, es decir, el país no tiene un déficit o superávit excesivo. 
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-12
        .bg-1.p-4
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/t3/17.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Un déficit en la balanza de pagos puede generar presión sobre la moneda nacional, porque implica que el país está importando más de lo que exporta y podría necesitar financiamiento externo. Un superávit puede ser muestra de una economía competitiva y saludable (Sánchez Campillo, 2015).
    p.mb-5 El análisis de la balanza de pagos es necesario para la formulación de políticas monetarias y fiscales, permitiendo identificar desequilibrios en la economía externa y prever las consecuencias de los movimientos de capitales y las fluctuaciones del tipo de cambio (Tavera Camacho, 2020).
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-8
        .bg-color-white.shadow-soft.py-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-md-auto.d-none.d-lg-block
              img(src="@/assets/template/bg-icono-video.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Para conocer más sobre el tema, lo invitamos a ver el siguiente video:
                  p.mb-0 Solopapelyboli (2024). La balanza de pagos (video). YouTube
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href='https://youtu.be/RET50ZTLrUA?si=oHVVJJZeL-_E7_yJ' target="_blank")
                    span Ver Video
                    i.fas.fa-arrow-right
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-9
        p.mb-3 Como conclusión, logramos exponer como la macroeconomía y el análisis de sus variables, permiten a los gobiernos, instituciones internacionales, empresas y ciudadanos, tener una mejor comprensión de los procesos económicos y de cómo afectan al bienestar general. 
        p.mb-3.bg-6.p-3 El estudio de la interacción de estas variables macroeconómicas y su gestión mediante políticas económicas adecuadas, es necesario para asegurar un desarrollo sostenible, evitar crisis económicas y promover una mayor equidad en la distribución de los beneficios del crecimiento económico.  
        p.mb-0 Así, la macroeconomía no solo es una herramienta de análisis económico, sino también una base sobre la cual se pueden construir las decisiones políticas y económicas que guían el futuro de las sociedades.
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/t3/18.png', alt='')


    .bg-full-width.border-top.actividad.ctn-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario='cuestionario'/>
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Variables macroeconómicas',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el principal objetivo de la macroeconomía?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Estudiar el comportamiento individual de los consumidores',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Analizar el funcionamiento de la economía en su conjunto',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Examinar los precios de productos específicos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Investigar las decisiones de empresas individuales',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! La macroeconomía se enfoca en estudiar la economía a gran escala, considerando factores como el PIB, el desempleo y la inflación. Este enfoque permite comprender los ciclos económicos y la política económica global.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'La balanza de pagos se divide principalmente en:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Importaciones y exportaciones únicamente',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuenta corriente y cuenta de capital y financiera',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Bienes y servicios solamente',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Deuda externa e interna',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Elección correcta. La balanza de pagos es un resumen de todas las transacciones económicas entre un país y el resto del mundo, dividiéndose en estos dos componentes fundamentales: la cuenta corriente y la cuenta de capital y financiera.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de desempleo refleja el tiempo de transición entre empleos o cambios en las condiciones laborales?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desempleo estructural',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desempleo friccional',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Desempleo cíclico',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Desempleo voluntario',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto, este tipo de desempleo ocurre en cambios de condiciones laborales.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'El PIB se puede calcular mediante los siguientes enfoques, EXCEPTO:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Enfoque de producción',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Enfoque de ingreso',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Enfoque del gasto',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Enfoque de la inflación',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Muy bien, el PIB no se calcula con el enfoque de la inflación, sino a través de los enfoques de producción, ingreso y gasto. La inflación es un fenómeno relacionado, pero no es una forma de medir el PIB directamente.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes NO es un factor de producción en economía?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tierra',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Capital',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Trabajo',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inflación',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Es correcto. La inflación no es un factor de producción. Los factores de producción son la tierra, el capital y el trabajo, que son esenciales para la producción de bienes y servicios.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Felicidades! Has superado la prueba con éxito.',
      mensaje_final_reprobado:
        'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>
