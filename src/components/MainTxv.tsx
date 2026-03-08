import { FC, useRef } from "react";


export interface TVprops {
  turnOn: boolean;
  setTurnOn: any;
}

function MoviePlayer({ tmdbId }: { tmdbId: string }) {
  const embedUrl = `https://player.autoembed.cc/embed/movie/${tmdbId}`;

  if (!embedUrl) return <div>No disponible</div>;

  return (
    <iframe
      src={embedUrl}
      width="100%"
      height="230px"
      allowFullScreen
      style={{ border: "none" }}
    />
  );
}

const TV: FC<TVprops> = () => {
  return (
    <div className="tv-container">
      <div className="tv-body">
        <div className="tv-screen-frame">
          <div className="tv-glass" style={{ pointerEvents: "none" }}></div>
          <div className="tv-screen">
            {/* <!-- Aquí pon tu <video> para streaming --> */}
            <MoviePlayer tmdbId="tt0499549" />
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
