import { FC } from "react";

export interface LogOutButtonParams {
  logout: () => void;
}

export const LogOutButton: FC<LogOutButtonParams> = ({ logout }) => {
  return (
    <div className="absolute top-20">
      <button
        onClick={() => logout()}
        className="btn btn-circle btn-gradient btn-error"
        aria-label="Circle Gradient Icon Button"
      >
        {" "}
     <i className="fa-solid fa-power-off"></i>
      </button>
    </div>
  );
};
