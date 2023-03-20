import CarouselNuka from 'nuka-carousel';
import img from '../Carousel/White-Sneakers-PNG-Clipart 1.png';
import img2 from '../Carousel/Laye 1.png';


export default function Carousel(){
    
    return(
            <div>
            <CarouselNuka>
            <img src={img} />
            <img src={img2} />
            <img src={img} />
            <img src={img} />
            </CarouselNuka>

            </div>

            
    )
}