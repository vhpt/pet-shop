import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const getSlide = async () => {
        const response = await fetch("http://localhost:8000/api/slides");

        const result = await response.json();

        setData(result);
        console.log("slide", result);
    };
    getSlide()
  }, []);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
     {data.map(slide => (
         <Carousel.Item key={slide.id}>
         <img src={`http://localhost:8000/${slide.image}`} alt={slide.title} style={{width: '100%'}} height={600} />
         <Carousel.Caption>
           <h3>First slide label</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </Carousel.Caption>
       </Carousel.Item>
     ))
     }
     
    </Carousel>
  );
}

export default Slider;