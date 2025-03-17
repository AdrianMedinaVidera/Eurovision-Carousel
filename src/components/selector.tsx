import { obtenerAños, obtenerPaises } from '../api/api';
import './selector.css'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router";

type SelectorProps = {
    selectorType: 'country' | 'year'
    selectedYear: number;
    setCountry?: (country: string) => void;
    selectedCountry?: string;
}

const Selector = ({selectorType, selectedYear, setCountry, selectedCountry}: SelectorProps) => {
    const [years, setYears] = useState([]);
    const [countries, setCountries] = useState<string[]>([]);
    const navigate = useNavigate();

    useEffect(() => { 
        obtenerAños().then((data) => setYears(data));
        obtenerPaises().then((data) => {
        setCountries(data);
        if (data.length > 0 && setCountry && !selectedCountry) {
            setCountry(data[0]);
        }
        });
    }, []);

    return (
        <div className='esc_selector'>
            {selectorType === 'country' ? (
                countries.length > 0 && (
                    <select id="country" name="country" value={selectedCountry} onChange={(e) => setCountry?.(e.target.value)} >
                        {countries.map((country) => (
                            <option key={country} value={country}>{country}</option>
                        ))}
                    </select>
                )
            ) : (
                years.length > 0 && (
                    <select id="year" name="year" value={selectedYear} onChange={(e) => navigate(`/${Number(e.target.value)}`)}>
                        {years.filter(year => year !== 2020).map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                )
            )}
        </div>
    )
}

export default Selector;