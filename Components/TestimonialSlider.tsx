 import React from 'react'
import ClientReview from './ClientReview'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  }
};


const TestimonialSlider = () => {
  return (
   <Carousel
  additionalTransfrom={0}
  arrows={true}
  autoPlay={true}
  autoPlaySpeed={5000}
  centerMode={false}
  infinite
  responsive={responsive}
  itemClass="item"
    >
      
      <ClientReview
        image=
        "/images/icon.png"
        name="Luis Medina"
        role="Musico"
        review="Bandera Digital cuenta con desarrollo web excepcional cuya dedicación llevó mi música a nuevas alturas. Su plataforma muestra brillantemente mi trabajo y sus habilidades en comercio electrónico son inigualables. ¡Agradecido por su talento y dedicación al éxito de nuestra banda"
        />
      <ClientReview
        image="/images/ouilogo1000.png"
        name="Manuel Reyna"
        role="Gerente"
        review="La experiencia de desarrollo web y de aplicaciones de Bandera Digital transformó la presencia en línea de nuestro restaurante. Dio vida a nuestra visión con efectos impresionantes. Estamos agradecidos por su talento y dedicación a nuestro éxito. Además, su adición de un menú digital atravez de una app movil ha mejorado significativamente la experiencia de nuestros clientes, facilitando la visualización de nuestros platillos y opciones de manera más accesible y atractiva."/>
      <ClientReview
        image="/images/cazadoresdeclassicoslogo.jpg"
        name="Gabriel Arechiga"
        role="Coleccionista de Automóviles"
        review="Bandera Digital proporcionó una impresionante galería de sitios web para mi intermediación de autos. Ahora, muestro autos, redacto descripciones y monetizo con anuncios sin esfuerzo. Su habilidoso trabajo amplifica el impacto de mi canal de YouTube. Muy recomendado para soluciones web dinámicas.."
      />
      <ClientReview
        image="/images/nightgauger.png"
        name="Jimmy Cutler"
        role="Ingeniero Civil"
        review=" Bandera Digital creó un sitio web sobresaliente que muestra mis bombas de limpieza de pozos de petróleo a nivel nacional. Con precisión y eficiencia, me ayudó a llegar de manera efectiva a los clientes. Agradecido por su dedicación para mejorar la presencia en línea de mi negocio."
       />
      
  
</Carousel>
  )
}

export default TestimonialSlider