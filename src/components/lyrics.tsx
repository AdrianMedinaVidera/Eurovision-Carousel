import { useState, useEffect } from 'react';
import { obtenerDatosConcursante } from '../api/api';

type LyricsProps = {
  year: number;
  id: number;
}

const Lyrics = ({ year, id }: LyricsProps) => {
  const [lyricsData, setLyricsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerDatosConcursante(year, id);
      setLyricsData(data);
    };
    fetchData();
  }, [year, id]);

  return (
    <div className="bg-[#242424] text-white rounded-lg border-2 border-[#003399]">
      <h3 className="text-xl font-bold bg-[#003399] text-white p-3 mb-4 rounded-t-lg">LYRICS</h3>
        <div className="whitespace-pre-line">
        <h4 className="font-bold mb-4 pl-5 pt-1 text-2xl underline underline-offset-4">
          {lyricsData?.lyrics?.[0]?.title || 'Loading...'}
        </h4>
        <div className="p-5 pt-0">
          <p className="text-lg pl-2 whitespace-pre-wrap">
            {lyricsData?.lyrics?.[0]?.content || 'No lyrics available'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lyrics;