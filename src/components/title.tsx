import { useState, useEffect } from 'react';
import { obtenerDatosConcursante } from '../api/api';
import { obtenerPaises } from '../api/api';
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
    <Link to={"/"}><div><h2>ATRAS</h2></div></Link>
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold mb-2">
        Eurovision {year} - {contestantData?.country ? (contestantData.country) : ''}
      </h1>
      <h2 className="text-3xl mb-6">
        {contestantData?.artist} - "{contestantData?.song}"
      </h2>
    </div>
    </>
  );
};

export default Title;