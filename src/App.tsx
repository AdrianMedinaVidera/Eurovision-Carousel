import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'
import { obtenerDatosEdicion, obtenerPaises } from './api/api'

function App() {

  const [selectedYear, setSelectedYear] = useState(2024);
  const [countriesName, setCountries] = useState(null);
  const [contestants, setContestants] = useState(null);

  useEffect(() => {
    if (countriesName) {
      obtenerDatosEdicion(selectedYear).then((data) => {
        const dataWithCountry = {
          ...data,
          countryName: countriesName[data.country],
          contestants: data.contestants.map((contestant) => {
            return {
              ...contestant,
              countryName: countriesName[contestant.country],
            };
          }),
        };
        setContestants(dataWithCountry)
      });
    }
  }, [selectedYear, countriesName]); 
  
  useEffect(() => {
    obtenerPaises().then((countriesFromApi) => setCountries(countriesFromApi));
  }, []);
  
  // console.log(contestants);
  return (
    <> {contestants ?
      <>
        <Header year={contestants.year} arena={contestants.arena} city={contestants.city} slogan={contestants.slogan} logoUrl={contestants.logoUrl} voting={contestants.voting} presenters={contestants.presenters} country={{iso:contestants.country, countryName: contestants.countryName}} />
        <Content contestants={contestants.contestants} setSelectedYear={setSelectedYear} selectedYear={selectedYear} countryName={countriesName} rounds={contestants.rounds}/>
        <Footer />
      </> 
    :
    <div>Loading...</div>
    }

    </>
  )
}

export default App
