import logo_eurovision from '../assets/logo_eurovision.png';
import './header.css';
import { useWindowSize } from '../api/helpers';

type HeaderProps = {
    year: number,
    arena: string,
    city: string,
    presenters: string[],
    voting: string,
    slogan: string,
    logoUrl: string,
    country: {
        iso: string,
        countryName: string,
    };
}

const Header = ({year, arena, city, presenters, voting, slogan, logoUrl, country}: HeaderProps) => {
    const { width } = useWindowSize();
    
    return (
        <header>
            <div className='esc_title'>
                <h1>Eurovision {year}</h1>
            </div>
            <div className='esc_description'>
                <div className={`content-wrapper ${width < 1200 ? 'flex-col' : 'flex-row'} flex items-center gap-4`}>
                    <div className='image_container'>
                        <div className='image_wrapper'>
                            <img src={logoUrl ?? logo_eurovision} id='image' alt="Eurovision Logo"></img>
                        </div>
                    </div>
                    <div id='esc_description_list'>
                        <h1 id='description'>Description: </h1>
                        <ul>
                            <li>
                                <div className='flex items-center gap-2 flex-wrap'>
                                    <h3>Hosting Country:</h3>
                                    <span className='flex items-center gap-2'>
                                        {country.countryName}
                                        <img 
                                            src={`https://flagcdn.com/20x15/${country.iso.toLocaleLowerCase()}.png`} 
                                            alt={`Flag of ${country.countryName}`}
                                            className='inline-block'
                                        />
                                    </span>
                                </div>
                            </li>
                            <li><h3>City: </h3>{city}</li> 
                            <li><h3>Arena: </h3>{arena}</li>
                            <li><h3>Presenters: </h3>{presenters.join(", ")}</li>
                            <li><h3>Voting System: </h3>{voting}</li>
                            <li><h3>Slogan: </h3>{slogan}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;