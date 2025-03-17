import './carousel.css';
import Song_card from './song_card';
import { Contestant } from './content';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselApi,
    CarouselPrevious,
  } from "../components/ui/carousel"
import { getRoundInfo, useWindowSize } from '../api/helpers';
import { Link } from "react-router";
import { useEffect, useState } from 'react';
import Number_input from './number_input';

type CarrousselProps = {
    contestants: Contestant[],
    rounds: any[],
    selectedYear: number;
}

const MyCarousel = ({contestants, rounds, selectedYear}: CarrousselProps) => {
    const { width } = useWindowSize();
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!api) {
          return;
        }
        
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);
        
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    useEffect(() => {
        if (!api) {
          return;
        }

        api.scrollTo(value);
      }, [value]);
    return (
    <>
        <Carousel opts={{
            loop: true,
            align: "start"
        }} setApi={setApi} className='w-full '>
            <CarouselContent>
                {contestants.map((contestant, index) => {
                    const roundInfo = getRoundInfo(rounds, contestant.id);
                    const contestantWithPoints = { ...contestant, points: roundInfo.totalPoints, roundName: roundInfo.roundName, isDisqualified: roundInfo.isDisqualified};
                    return (
                        //Compruebo el ancho de la pantalla para establecer un tipo de carrusel u otro. 
                        <CarouselItem key={contestant.id} className={`flex justify-center ${width > 1000 ? width > 2000 ? 'basis-1/3': 'basis-1/2' : ''}`} >
                        <Link to={`/contestant/${selectedYear}/${contestant.id}`}><Song_card contestant={contestantWithPoints} rounds={rounds}/></Link>
                    </CarouselItem>
                )})}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        <div className="flex justify-center mt-4">
            <Number_input value={value} setValue={setValue}/>
        </div>
    </>
    )
}

export default MyCarousel;