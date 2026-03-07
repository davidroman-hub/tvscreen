import { FC } from "react";

export interface TVprops {
  turnOn: boolean;
  setTurnOn: any;
}

const TV: FC<TVprops> = () => {
  return (
    <div className="tv-container">
      <div className="tv-body">
        <div className="tv-screen-frame">
          <div className="tv-glass"></div>
          <div className="tv-screen">
            {/* <!-- Aquí pon tu <video> para streaming --> */}
            Selecciona un canal
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
