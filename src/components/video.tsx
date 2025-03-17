import { useState, useEffect } from 'react';
import { obtenerDatosConcursante } from '../api/api';

type VideoProps = {
  year: number;
  id: number;
}

const Video = ({ year, id }: VideoProps) => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerDatosConcursante(year, id);
      setVideoData(data);
    };
    fetchData();
  }, [year, id]);

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold bg-[#003399] text-white p-3 mb-6">VIDEO</h3>
      <div className="aspect-video w-full bg-black rounded-lg">
        {videoData && videoData.videoUrls && videoData.videoUrls.length > 0 && (
          <iframe
            className="w-full h-full"
            src={videoData.videoUrls[0]}
            title={`${videoData.artist} - ${videoData.song}`}
            allowFullScreen
          />
        )}
      </div>
      <div className="mt-4">
      </div>
    </div>
  );
};

export default Video;