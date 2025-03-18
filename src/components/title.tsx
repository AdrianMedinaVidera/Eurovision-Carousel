import { useState, useEffect } from 'react';
import { obtenerDatosConcursante } from '../api/api.js';
import { obtenerPaises } from '../api/api.js';
import { Link } from "react-router";

type TitleProps = {
  year: number;
  id: number;
}

const Title = ({ year, id }: TitleProps) => {
  const [contestantData, setContestantData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerDatosConcursante(year, id);
      setContestantData(data);
    };
    fetchData();
  }, [year, id]);

  return (
    <>
    <div className="text-center mb-8 pb-[20px]">
      <h1 className="text-4xl font-bold mb-2">
        Eurovision {year} - {contestantData?.country ? (contestantData.country) : ''}
      </h1>
      <h2 className="text-3xl">
        {contestantData?.artist} - "{contestantData?.song}"
      </h2>
    </div>
    </>
  );
};

export default Title;