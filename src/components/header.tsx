import { FC, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMoviesInfo } from "../actions/tvAsyncActions";
import Validate from "./validate";

export interface HeaderProps {
  title: string;
  setTmdbId: React.Dispatch<React.SetStateAction<string>>;
  validate: boolean;
  setValidate:any
}

export interface DataProps {
  data: {
    Title: string;
    Year: string;
    Plot: string;
    Poster: string;
    Released: string;
    Director: string;
    imdbID: string;
    Response: string;
  };
  loading: boolean;
}

const Header: FC<HeaderProps> = ({ title, setTmdbId, validate,setValidate }) => {
  const [movie, setMovie] = useState("");
  const [search, setSearch] = useState("");
  const { isLoading, data, error } = useQuery({
    queryKey: ["movieSearch", movie],
    queryFn: () => fetchMoviesInfo(movie),
    enabled: !!search,
  });

  const setMovieToReset = () => {
    setSearch(movie);
    setTimeout(() => {
      setSearch("");
    }, 1000);
  };

  const Card: FC<DataProps> = ({ data }) => {
    return (
      <div className="card card-sm sm:max-w-sm mt-3">
        <div className="card-header">
          <h5 className="card-title">{data.Title}</h5>
        </div>
        <div className="card-body">
          <p>{data.Plot}</p>
        </div>
        <div className="card-footer text-center">
          <img src={data.Poster} width={100} height={100} />
          <button
            onClick={() => setTmdbId(data.imdbID)}
            className="btn btn-circle btn-gradient btn-primary"
            aria-label="Circle Gradient Icon Button"
          >
            {" "}
            <i className="fa-solid fa-play"></i>
          </button>
        </div>
      </div>
    );
  };

  return (
    <header
      style={{
        marginTop: "180px",
      }}
      className="mb-7 flex justify-center flex-col items-center"
    >
      <h1 className="text-3xl mb-5">{title}</h1>
      {validate ? (
        <div className="flex flex-col">
          <input
            type="text"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            placeholder="Search a movie... / Buscar pelicula..."
            className="input input-sm w-100 focus:outline-none focus:ring-2 transition-all placeholder:text-gray-100 pr-10"
          />

          <button className="btn mt-3" onClick={setMovieToReset}>
            Search
          </button>
          {isLoading ? (
            <div className="card card-sm sm:max-w-sm mt-3 p-4 text-center">
              <span className="loading loading-spinner loading-lg"></span>
              <p className="mt-2">Loading...</p>
            </div>
          ) : data && !error ? (
            <Card data={data} loading={isLoading} />
          ) : (
            <div className="card card-sm sm:max-w-sm mt-3 p-4 text-sm">
              <p className="mb-3">
                <strong>ESP:</strong> Para usar busca el nombre especifico de la
                pelicula (en ingles) y si el resultado de la pelicula aparece
                solo haz click en el boton de "PLAY" (boton morado) y despues
                solo click en play en la TV. En caso de que no funcione o no
                cargue la pelicula, pon el navegador en modo incognito e intenta
                de nuevo.
              </p>
              <p className="mb-3">
                <strong>ENG:</strong> To use, search for the specific movie name
                (in English) and if the movie result appears, just click on the
                "PLAY" button (purple button) and then just click play on the
                TV. If it doesn't work or the movie doesn't load, put the
                browser in incognito mode and try again.
              </p>
              <p>
                <strong>ITA:</strong> Per usare, cerca il nome specifico del
                film (in inglese) e se appare il risultato del film, fai
                semplicemente clic sul pulsante "PLAY" (pulsante viola) e poi
                fai clic su play sulla TV. Se non funziona o il film non si
                carica, metti il browser in modalità incognito e riprova.
              </p>
            </div>
          )}
        </div>
      ) : (
        <Validate setValidate={setValidate} />
      )}
    </header>
  );
};

export default Header;
