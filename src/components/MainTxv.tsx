import { FC, useEffect } from "react";
import useSWR, { mutate } from "swr";

export interface TVprops {
  turnOn: boolean;
  setTurnOn: any;
  tmdbId: string;
}

function MoviePlayer({ tmdbId }: { tmdbId: string }) {
  // Limpiar caché de películas anteriores (excepto la actual)
  useEffect(() => {
    if (tmdbId) {
      const currentKey = `movie-${tmdbId}`;
      mutate(
        (key) => typeof key === 'string' && key.startsWith('movie-') && key !== currentKey,
        undefined,
        { revalidate: false }
      );
    }
  }, [tmdbId]);

  const { data: movieId } = useSWR(
    tmdbId ? `movie-${tmdbId}` : null,
    () => Promise.resolve(tmdbId),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 0, // No deduplicar requests
    }
  );

  if (!movieId) {
    return (
      <div className="flex items-center justify-center h-full text-white">
        <p>No movie selected</p>
      </div>
    );
  }

  const embedUrl = `https://player.autoembed.cc/embed/movie/${movieId}`;

  return (
    <iframe
      src={embedUrl}
      width="100%"
      height="100%"
      allowFullScreen
      style={{ border: "none" }}
      title="Movie Player"
    />
  );
}

const TV: FC<TVprops> = ({ tmdbId }) => {
  return (
    <div className="tv-container">
      <div className="tv-body">
        <div className="tv-screen-frame">
          <div className="tv-glass" style={{ pointerEvents: "none" }}></div>
          <div className="tv-screen">
        
            {tmdbId ? <MoviePlayer tmdbId={tmdbId} /> : ""}
          </div>
        </div>
        <div className="tv-knobs">
          <div className="knob knob1"></div>
          <div className="knob knob2"></div>
        </div>
        <div className="tv-antennas">
          <div className="antenna left"></div>
          <div className="antenna right"></div>
        </div>
        <div className="tv-legs">
          <div className="leg left"></div>
          <div className="leg right"></div>
        </div>
      </div>
    </div>
  );
};

export default TV;
