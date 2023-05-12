import { Carousel } from 'react-bootstrap';

// import img3 from './img/delicious-italian-pizza-wooden-table.jpg'
// import img18 from './img/wp11989806-chicken-pizza-wallpapers.jpg'

// import img13 from './img/wc1813161-pizza-wallpapers.jpg'
// import img10 from './img/top-view-pepperoni-pizza-with-mushroom.jpg'

import img15 from './img/wp10732078-pizza-and-wine-wallpapers.jpg'
import img30 from './img/wp8620196-cheese-pizza-wallpapers.jpg'


const SliderSection = () => {
  return (
    <Carousel indicators={false}>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={img15}
        />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={img30}
        />
      </Carousel.Item>


    </Carousel>
  )
}

export default SliderSection