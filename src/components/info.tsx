import { useState, useEffect } from 'react';
import { obtenerDatosConcursante, obtenerDatosEdicion } from '../api/api';
import { getPointsInfo } from '../api/helpers';

type InfoProps = {
  year: number;
  id: number;
}

const Info = ({ year, id }: InfoProps) => {
  const [contestantData, setContestantData] = useState(null);
  const [contestantYearData, setContestantYearData] = useState(null);

  useEffect(() => {
    if (year && id) {
      const fetchData = async () => {
        const data = await obtenerDatosConcursante(year, id);
        setContestantData(data);
      };
      fetchData();
    }
  }, [year, id]);
  console.log(contestantYearData);

  // ! TODO: Debe estar en un contexto!
  useEffect(() => {
    if (year) {
      const fetchData = async () => {
        const data = await obtenerDatosEdicion(year);
        setContestantYearData(getPointsInfo(data.rounds, id)); 
      };
      fetchData();
    }
  }, [year]);

  return (
    <div>
      <h3 className="text-xl font-bold bg-[#003399] text-white p-3 mb-4">INFO</h3>
      <h2 className="font-bold mb-4 pl-5 pt-1">More Info</h2>
      <div>
        <div className="p-5 pt-0">
          <p>ROUND: {contestantData?.round || 'Loading...'}</p>
          <p>POSITION: {(id + 1) || 'Loading...'}</p>
          <p>POINTS:</p>
          <p>Jury: {contestantData?.juryPoints || 0} points</p>
          <p>Public: {contestantData?.publicPoints || 0} points</p>
          <p>Total: {(contestantData?.juryPoints || 0) + (contestantData?.publicPoints || 0)}</p>
        </div>

        <div></div>

        <div className="p-5 pt-0">
          <p>Artist: {contestantData?.artist || 'Loading...'}</p>
          {contestantData?.writers && contestantData.writers.length > 0 && (
            <>
              <p>SongWriter:</p>
              {contestantData.writers.map((writer: string, index: number) => (
                <p key={index}>{writer}</p>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Info;