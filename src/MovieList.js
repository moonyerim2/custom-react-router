import { useEffect, useState } from "react";
import Movie from "./Movie";
import "./MovieList.css";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      );
      const {
        status,
        data: { movies },
      } = await response.json();

      if (status === "ok") setMovies(movies);
    })();
  }, []);

  return (
    <section>
      <ul className="movie-list">
        {movies.map(
          ({
            id,
            medium_cover_image,
            title,
            description_full,
            year,
            genres,
          }) => {
            return (
              <Movie
                key={id}
                coverImg={medium_cover_image}
                title={title}
                description={description_full}
                year={year}
                genres={genres}
              />
            );
          }
        )}
      </ul>
    </section>
  );
}

export default MovieList;
