import { useState, useEffect } from 'react';
import { obtenerDatosConcursante, obtenerDatosEdicion } from '../api/api.js';
import { getPointsInfo } from '../api/helpers.js';

type InfoProps = {
  year: number;
  id: number;
}

const Info = ({ year, id }: InfoProps) => {
  const [contestantData, setContestantData] = useState(null);
  const [contestantYearData, setContestantYearData] = useState(null);

  useEffect(() => {
    if (year && id !== undefined) {
      const fetchData = async () => {
        try {
          const data = await obtenerDatosConcursante(year, id);
          console.log('Contestant Data:', data);
          setContestantData(data);
        } catch (error) {
          console.error('Error fetching contestant data:', error);
        }
      };
      fetchData();
    }
  }, [year, id]);

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
    <div className="bg-[#242424] text-white rounded-lg border-2 border-[#003399]">
      <h3 className="text-xl font-bold bg-[#003399] text-white p-3 mb-4 rounded-t-lg">INFO</h3>
      <h2 className="font-bold mb-4 pl-5 pt-1 text-2xl underline underline-offset-4">More Info</h2>
      <div>
        <div className="p-5 pt-0 border-b-2 border-[#003399]/50">
          <p className="text-lg mb-1">Round: {contestantYearData?.roundName || 'Loading...'}</p>
          <p className="text-lg mb-1">Position: {(id + 1) || 'Loading...'}</p>
          <p className="text-lg font-semibold mt-3 mb-2">Points ({contestantYearData?.roundName || ''}):</p>
          {contestantYearData?.juryPoints > 0 && (
            <p className="text-lg mb-1 pl-2">Jury: {contestantYearData.juryPoints} points</p>
          )}
          {contestantYearData?.publicPoints > 0 && (
            <p className="text-lg mb-1 pl-2">Public: {contestantYearData.publicPoints} points</p>
          )}
          <p className="text-lg mb-3 pl-2">Total: {contestantYearData?.totalPoints !== undefined ? `${contestantYearData.totalPoints} points` : 'Loading...'}</p>
        </div>

        <div className="p-5 pt-4 border-b-2 border-[#003399]/50">
          <p className="text-lg mb-3 font-semibold">Artist: {contestantData?.artist || 'Loading...'}</p>
          {contestantData?.writers && contestantData.writers.length > 0 && (
            <>
              <p className="text-lg font-semibold mb-2">SongWriter:</p>
              <div className="pl-2">
                {contestantData.writers.map((writer: string, index: number) => (
                  <p key={index} className="text-lg mb-1">{`• ${writer}`}</p>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Info;