import { FC, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMovie, fetchMoviesInfo } from "../actions/tvAsyncActions";

export interface HeaderProps {
  title: string;
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

const Header: FC<HeaderProps> = ({ title }) => {
  const [movie, setMovie] = useState("");
  const [search, setSearch] = useState("");
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["repoData"],
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
    console.log(data.imdbID)
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
            onClick={() => fetchMovie(data.imdbID)}
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
    <header className="mb-7 flex justify-center flex-col items-center">
      <h1 className="text-3xl mb-5">{title}</h1>
      <div className="flex flex-col">
        <input
          type="text"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          placeholder="Search movies..."
          className="input input-sm w-64 focus:outline-none focus:ring-2 transition-all placeholder:text-gray-100 pr-10"
        />
        <button className="btn mt-3" onClick={setMovieToReset}>
          Search
        </button>
        {data && !error ? <Card data={data} loading={isPending} /> : ""}
      </div>
    </header>
  );
};

export default Header;
