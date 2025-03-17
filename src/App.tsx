import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'
import { obtenerDatosEdicion, obtenerPaises } from './api/api'
import { useParams } from "react-router";

function App() {
  const params = useParams();
  const [countriesName, setCountries] = useState(null);
  const [contestants, setContestants] = useState(null);

  console.log(params?.year);
  
  useEffect(() => {
    if (countriesName) {
      obtenerDatosEdicion(Number(params?.year) ?? 2024).then((data) => {
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
  }, [params?.year, countriesName]); 
  
  useEffect(() => {
    obtenerPaises().then((countriesFromApi) => setCountries(countriesFromApi));
  }, []);
  
  // console.log(contestants);
  return (
    <> {contestants ?
      <>
        <Header year={contestants.year} arena={contestants.arena} city={contestants.city} slogan={contestants.slogan} logoUrl={contestants.logoUrl} voting={contestants.voting} presenters={contestants.presenters} country={{iso:contestants.country, countryName: contestants.countryName}} />
        <Content contestants={contestants.contestants} selectedYear={Number(params?.year)} countryName={countriesName} rounds={contestants.rounds}/>
        <Footer />
      </> 
    :
    <div>Loading...</div>
    }

    </>
  )
}

export default App
