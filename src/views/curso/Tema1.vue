<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'Concepto de la macroeconomía y objetivos principales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .bg-3.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/t1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0 La macroeconomía es una de las ramas de la economía, que se encarga de estudiar fenómenos y procesos que afectan la economía en su conjunto, a diferencia de la microeconomía que lo hace basándose en decisiones individuales de los consumidores y las empresas. 
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Concepto de economía
    p.mb-5 La economía, en términos generales, se refiere al estudio de cómo las sociedades utilizan sus recursos limitados para producir bienes y servicios y distribuirlos entre los miembros de la sociedad. 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-8
        .bg-4.p-4
          p.mb-0.p-4 #[b Según Zevallos Avilés (2016)], la economía se ocupa de los procesos de producción, distribución y consumo de los recursos, bienes y servicios dentro de una sociedad. Es, por tanto, una ciencia social que analiza cómo los individuos, empresas y gobiernos toman decisiones sobre la asignación de recursos en un entorno donde estos son escasos. La economía estudia tanto las decisiones a nivel individual (microeconomía) como a nivel agregado (macroeconomía).
      .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/t1/2.png', alt='')

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/t1/3.png', alt='')
      .col-sm-12.col-lg-9
        p.mb-3 El término "economía" proviene del griego, que significa "el que administra el hogar", refiriéndose a la manera en que una familia o una sociedad organiza y distribuye sus recursos limitados. A nivel de la sociedad, las decisiones sobre la asignación de recursos se realizan a través del sistema de mercado, donde las personas toman decisiones sobre qué producir, cómo producirlo y para quién. 
        p.mb-3.p-3.bg-3 Este sistema está basado en la capacidad, los esfuerzos y las decisiones de los individuos, como por ejemplo, quién se dedica a labrar la tierra, quién se ocupa de la construcción, o quién trabaja en la salud.
        p.mb-0 El concepto de economía está relacionado con la evolución histórica del pensamiento económico. Adam Smith, con su obra La riqueza de las naciones, fue pionero en la formulación de lo que hoy conocemos como economía de mercado. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-12
        .bg-1.p-4
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/t1/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0  En este contexto, Smith sentó las bases para lo que hoy conocemos como microeconomía, al enfocarse en cómo los individuos, a través de sus decisiones, contribuyen al bienestar general de la sociedad, con una clara tendencia hacia la liberalización de precios y salarios y una postura contraria a la intervención del Estado (Zevallos Avilés, 2016).
    p.mb-5(data-aos="flip-up") Los economistas encuentran útil clasificar los recursos disponibles en tres categorías principales: #[b tierra, capital y trabajo ] que, en conjunto, reciben el nombre de #[b factores de producción]. Cada uno de estos factores participan en la creación de bienes y servicios dentro de la economía.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-5
        img(src="@/assets/curso/t1/5.png")
      .col-sm-12.col-lg-7
        AcordionA(tipo="b")
          div(titulo="Tierra")
            p.mb-0 Este factor incluye todos los recursos naturales que proporciona la naturaleza. En este sentido, abarca no solo la tierra cultivable o el suelo urbanizable, sino también otros recursos como los minerales, los recursos hídricos, los forestales, los eólicos, la luz solar, entre otros. Algunos de estos recursos son #[b no renovables], como el petróleo, lo que implica que su disponibilidad está limitada (Zevallos Avilés, 2016).
          div(titulo="Capital")
            p.mb-0 El capital se refiere a los bienes producidos por el ser humano para incrementar el nivel de producción. Entre estos bienes se encuentran las fábricas, edificios, naves industriales, maquinaria, herramientas, tractores y demás elementos empleados en la producción. El proceso de producir y acumular estos bienes es lo que se conoce como inversión. A diferencia de los bienes de consumo (como ropa, alimentos o vehículos), los bienes de capital o de #[b inversión], no están destinados a satisfacer necesidades humanas directamente, sino a ser utilizados en la producción de otros bienes. (Zevallos Avilés, 2016).
          div(titulo="Trabajo")
            p.mb-0 Este factor engloba todos los recursos humanos que se pueden emplear en la producción de bienes y servicios. Esto incluye tanto las capacidades físicas como intelectuales de las personas, como el obrero de la construcción, el médico, el profesor universitario, entre otros. Sin embargo, dentro del trabajo, existe un recurso especial conocido como la #[b capacidad empresarial], que se refiere a aquellas personas especializadas en maximizar los beneficios de las empresas, mediante la toma de decisiones estratégicas en el proceso productivo (Zevallos Avilés, 2016).
    p.mb-5(data-aos="flip-up") Así mismo, el concepto de economía puede abordarse desde diferentes perspectivas, dependiendo de cómo se interprete el papel de los recursos y las necesidades humanas. Estas perspectivas son:
    .bg-full-width.bg-fondo-slider.mb-5(data-aos="flip-up")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Subjetiva
              p Desde una perspectiva subjetiva, la economía se centra en la conducta humana, entendida como una relación entre los fines que los individuos buscan alcanzar y los medios limitados disponibles, para satisfacer esas necesidades. En este enfoque, se destaca que la escasez de recursos y la necesidad de elegir entre alternativas, son los problemas fundamentales que enfrenta la economía. Según Robbins, la economía se define como la ciencia que estudia “la conducta humana como una relación de fines a medios de satisfacción que, siendo escasos, tienen usos alternativos entre los cuales hay que optar” (Tavera Camacho, 2020, p. 15).
            .col-lg-5.d-none.d-lg-block
                img(src="@/assets/curso/t1/6.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/t1/7.png")
            .col-lg-7
              h5 Objetiva
              p.mb-0 Desde una perspectiva objetiva, la economía se enfoca en las leyes que rigen la producción, circulación, distribución y consumo de los bienes materiales dentro de un período histórico determinado. En este enfoque, se analiza cómo la sociedad organiza los procesos productivos y distributivos para satisfacer las necesidades humanas en función de los recursos disponibles. Engels definió la economía, desde este punto de vista, como "la ciencia que estudia las leyes que rigen la producción, circulación, distribución y consumo de los bienes materiales de vida en un período históricamente determinado" (Tavera Camacho, 2020, p. 15).
    .bg-2.py-4.px-4.mb-5(data-aos="flip-up")
      p.mb-0 Ambos enfoques, subjetivo y objetivo, son fundamentales para comprender la economía, puesto que ambos subrayan dos puntos claves: primero, que los bienes son escasos, y segundo, que la sociedad debe organizar su producción para satisfacer las necesidades humanas y procurar el bienestar colectivo.
    p.mb-5(data-aos="flip-up") A partir de estas ideas, se puede analizar cómo la sociedad genera y emplea recursos, así como también tratar de comprender la realidad económica al integrar todos los aspectos vinculados a las actividades económicas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-8
        .bg-color-white.shadow-soft.py-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-md-auto.d-none.d-lg-block
              img(src="@/assets/template/bg-icono-video.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Y es importante que visualice el siguiente video:
                  p.mb-0 Profe de Economía (2017). La razón de ser de la economía 1 ¿Qué es la economía? (video). YouTube.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href='https://youtu.be/SbM6Tx_MkBU?si=na4Ca6msHpl09HWu' target="_blank")
                    span Ver Video
                    i.fas.fa-arrow-right

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Concepto de macroeconomía
    p.mb-5(data-aos="flip-up") La macroeconomía, por su parte, es la rama de la economía que se enfoca en el estudio de los grandes agregados económicos. Según Zevallos Avilés (2016), la macroeconomía analiza fenómenos como el Producto Interno Bruto (PIB), el desempleo, la inflación y la balanza de pagos, entre otros. Esta disciplina se interesa por el comportamiento global de la economía, cómo interactúan los diferentes sectores económicos y cómo las políticas públicas (fiscal y monetaria), pueden influir en el crecimiento económico y la estabilidad de un país.
    .bg-full-width.bg-4.mb-lg-5(data-aos="flip-up")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4  Macroeconomía
            p.mb-4 La macroeconomía es una disciplina esencial para comprender cómo se determinan variables fundamentales como el nivel de producción, el empleo, los precios y las relaciones internacionales de un país. Este campo de estudio, establecido formalmente con las aportaciones de John Maynard Keynes, permite analizar los grandes agregados económicos y diseñar políticas que fomenten el crecimiento económico, la estabilidad de precios y el bienestar social. En el PDF #[b Macroeconomía], se estudiarán conceptos clave, teorías y herramientas necesarias para interpretar las dinámicas económicas, evaluar tendencias y entender su impacto en la vida cotidiana de las personas

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Macroeconomía.

          .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/8.png', alt='')


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
                  p.mb-0 Agencia Audiovisual (2018). ¿Qué es la macroeconomía? (video). YouTube.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href='https://youtu.be/F7ubOpGbdbs?si=Nina31XI8wL6ASom' target="_blank")
                    span Ver Video
                    i.fas.fa-arrow-right
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Objetivos de la macroeconomía
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up") 
      .col-sm-12.col-lg-4
        img(src="@/assets/curso/t1/9.png")
      .col-sm-12.col-lg-8
        p.mb-0 Dando continuidad al concepto de macroeconomía y de acuerdo con la explicación de su campo de acción, su principal objetivo es el análisis del funcionamiento de la economía en su conjunto, con un enfoque particular en las fluctuaciones a corto plazo de la producción, el ingreso y la inversión. 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-8
        .bg-4.p-4
          p.mb-0.px-4.py-2 A través de este análisis, se busca identificar las tendencias a largo plazo que permitan lograr el crecimiento económico y tomar medidas adecuadas para corregir desequilibrios económicos que puedan afectar el bienestar de la población. Este enfoque global de la actividad económica, en gran medida, surgió como respuesta al estancamiento económico generado por la crisis de 1929-1933.
      .col-sm-12.col-lg-4
          img(src='@/assets/curso/t1/10.png', alt='')
    p.mb-5(data-aos="flip-up") Fue durante este período cuando John Maynard Keynes sentó las bases de la macroeconomía moderna, al proponer que las fluctuaciones económicas podían ser gestionadas mediante políticas gubernamentales que regulaban la demanda agregada, estableciendo así la importancia de la intervención del Estado en la economía (Tavera Camacho, 2020).
    p.mb-5(data-aos="flip-up") #[b Los principales objetivos de la macroeconomía] se centran en propiciar el bienestar económico y social, mediante el manejo adecuado de las variables económicas. Entre estos objetivos destacan:
    h3.mb-5(data-aos="flip-up") Objetivos de la macroeconomía
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-sm-12.col-lg-10
        ImagenInfografica.color-acento-botones(data-aos="flip-up")
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/t1/12.svg', alt='', style="max-width: 887px;").mx-auto

            .bg-5.p-3(x="23.5%" y="19%" numero=" ")
              p.mb-0 Búsqueda de un crecimiento económico sostenido, donde la economía genere bienes y servicios, de manera eficiente, para satisfacer las necesidades de la sociedad.
            .bg-5.p-3(x="23.5%" y="60%" numero=" ")
              p.mb-0 Optimizar el uso de los recursos disponibles, como la mano de obra, el capital y los recursos naturales, para maximizar la producción y el bienestar.
            .bg-5.p-3(x="50%" y="96%" numero=" ")
              p.mb-0 Busca evitar la inflación desmedida o la deflación, que pueden generar inestabilidad económica y afectar negativamente al poder adquisitivo de la población.
            .bg-5.p-3(x="75%" y="60%" numero=" ")
              p.mb-0 El objetivo es el de reducir el desempleo, garantizando que más personas participen activamente en el proceso productivo, contribuyendo al desarrollo económico.
            .bg-5.p-3(x="76%" y="20%" numero=" ")
              p.mb-0 Esto implica lograr un balance adecuado entre las exportaciones e importaciones de un país, lo que contribuye a la estabilidad económica y la solvencia financiera.
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-12
        .bg-1.p-4
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/t1/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estos objetivos son alcanzados a través de políticas económicas implementadas por los gobiernos, tales como el manejo del ingreso y gasto público, la política monetaria y la política fiscal. Además, la macroeconomía tiene aplicaciones prácticas dentro de la toma de decisiones gubernamentales y las estrategias de las empresas para abordar y corregir los problemas financieros y desequilibrios económicos, mejorando así el bienestar de la sociedad en su conjunto (Tavera Camacho, 2020).









</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
