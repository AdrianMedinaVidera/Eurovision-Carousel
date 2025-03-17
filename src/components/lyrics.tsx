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
    <div>
      <h3 className="text-xl font-bold bg-[#003399] text-white p-3 mb-4">LYRICS</h3>
      <div className="whitespace-pre-line">
        <h4 className="font-bold mb-4 pl-5 pt-1">{lyricsData?.lyrics?.[0]?.title || 'Loading...'}</h4>
        <p className="p-5 pt-0">
          {lyricsData?.lyrics?.[0]?.content || 'No lyrics available'}
        </p>
      </div>
    </div>
  );
};

export default Lyrics;