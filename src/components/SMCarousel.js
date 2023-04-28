import Carousel from 'react-bootstrap/Carousel';

function SMCarousel(props) {

    const {slides,slide,className} = props


  return (
    <Carousel slide={slide}>

        {
            slides && Array.isArray(slides) && slides.length > 0 ?
            slides.map((e,i)=>{
                return(
                    <Carousel.Item key={i}>
                        <img className={className} src={e.imgLink}/>
                        <Carousel.Caption>
                            <h3>{e.label}</h3>
                            <p>{e.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }) 
            : null

        }
    </Carousel>
  );
}

export default SMCarousel;