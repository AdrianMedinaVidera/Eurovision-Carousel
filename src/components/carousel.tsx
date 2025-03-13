import './carousel.css';
import Song_card from './song_card';
import { Contestant } from './content';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../components/ui/carousel"
import { getRoundInfo, useWindowSize } from '../api/helpers';
  

type CarrousselProps = {
    contestants: Contestant[],
    rounds: any[];
}

const MyCarousel = ({contestants, rounds}: CarrousselProps) => {
    const { width } = useWindowSize();

    return (
        <Carousel className='w-full '>
            <CarouselContent>
                {contestants.map((contestant) => {
                    const roundInfo = getRoundInfo(rounds, contestant.id);
                    const contestantWithPoints = { ...contestant, points: roundInfo.totalPoints, roundName: roundInfo.roundName, isDisqualified: roundInfo.isDisqualified};
                    return (
                    //Compruebo el ancho de la pantalla para establecer un tipo de carrusel u otro. 
                    <CarouselItem key={contestant.id} className={`flex justify-center ${width > 1000 ? width > 2000 ? 'basis-1/3': 'basis-1/2' : ''}`} >
                        <Song_card contestant={contestantWithPoints} />
                    </CarouselItem>
                )})}
            </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>

    )
}

export default MyCarousel;