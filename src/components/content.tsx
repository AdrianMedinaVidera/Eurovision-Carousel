import Selector from './selector'
import './content.css';
import Carrousel from './carousel';
import MyCarousel from './carousel';
import { useState, useEffect } from 'react';

export type Contestant = {
    id: number,
    country: string,
    artist: string,
    song: string,
    url: string,
    countryName: string,
    points: number,
    roundName: string,
    isDisqualified: boolean;
}

type ContentProps = {
    contestants: Contestant[],
    selectedYear: number,
    countryName: Record<string, string>,
    rounds: any[];
}

const   Content = ({contestants, selectedYear, rounds}: ContentProps) => {
    const [selectedCountry, setSelectedCountry] = useState<string>("ES");

    useEffect(() => {
        if (contestants.length > 0) {
            setSelectedCountry(contestants[0].country);
        }
    }, [contestants]);

    return (
        <>
        <div className='esc_selectors'>
            <Selector selectorType='year' selectedYear={selectedYear}/>
            <Selector 
                selectorType="country" 
                selectedYear={selectedYear} 
                setCountry={setSelectedCountry} 
                selectedCountry={selectedCountry} 
            />
        </div>
        <div className='carousel_container'>
            <MyCarousel contestants={contestants} rounds={rounds} selectedYear={selectedYear}/>
        </div>
        </>
    )
}

export default Content;