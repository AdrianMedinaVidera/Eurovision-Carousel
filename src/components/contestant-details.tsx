import { useParams } from "react-router";
import Selector from "./selector";
import Lyrics from './lyrics';
import Video from './video';
import Title from './title';
import Info from './info';
import { useState } from "react";
import logoEurovision from '../assets/logo_eurovision-removebg-preview.png';
import { Link } from 'react-router';

const ContestantDetails = () => {
  const { year, contestantId } = useParams();
  const numericYear = year ? parseInt(year) : 0;
  const numericId = contestantId ? parseInt(contestantId) : 0;
  
  return (
    <>
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to={`/${numericYear}`} className="block">
        <div className="flex justify-center mb-12 bg-[#003399] py-2 hover:bg-[#004499] transition-colors">
          <img 
            src={logoEurovision}
            alt="Eurovision Logo"
            className="h-20 object-contain"
          />
        </div>
      </Link>
      <Title year={numericYear} id={numericId} />
      <Video year={numericYear} id={numericId} />
      <div className="flex gap-8">
        <div className="w-1/2">
          <Lyrics year={numericYear} id={numericId} />
        </div>
        <div className="w-1/2">
          <Info year={numericYear} id={numericId} />
        </div>
      </div>
    </div>
    </>
  );
};



export default ContestantDetails;