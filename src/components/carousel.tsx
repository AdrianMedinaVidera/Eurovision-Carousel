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
import { getRoundInfo } from '../api/helpers';
  

type CarrousselProps = {
    contestants: Contestant[],
    rounds: any[];
}

const MyCarousel = ({contestants, rounds}: CarrousselProps) => {
    return (
        <Carousel className='w-full '>
            <CarouselContent>
                {contestants.map((contestant) => {
                    const roundInfo = getRoundInfo(rounds, contestant.id);
                    const contestantWithPoints = { ...contestant, points: roundInfo.totalPoints, roundName: roundInfo.roundName, isDisqualified: roundInfo.isDisqualified};
                    return (
                    <CarouselItem key={contestant.id} className="basis-1/3 flex justify-center"><Song_card contestant={contestantWithPoints} /></CarouselItem>
                )})}
            </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>

    )
}

export default MyCarousel;