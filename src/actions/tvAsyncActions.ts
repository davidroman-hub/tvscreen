export async function fetchMoviesInfo(movieName: string) {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}&t=${encodeURIComponent(movieName)}`,
  );

  if (!response.ok) {
    throw new Error(`Error fetching movie: ${response.status}`);
  }

  const data = await response.json();

  if (data.Error) {
    throw new Error(data.Error);
  }

  return data;
}

export async function fetchMovie(movieId: string) {
  const response = await fetch(
    `https://player.autoembed.cc/embed/movie/${movieId}`,
  );

  if (!response.ok) {
    throw new Error(`Error fetching movie: ${response.status}`);
  }

  const data = await response.json();

  if (data.Error) {
    throw new Error(data.Error);
  }

  console.log(data);
  return data;
}
