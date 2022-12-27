import "./Movie.css";
import { Link } from "./router";

function Movie({ id, coverImg, title, description, year, genres }) {
  return (
    <li className="movie">
      <Link href={`/movie/${id}`}>
        <img className="movie-img" src={coverImg} alt="영화 포스터" />
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <p>{year}</p>
        <p>{genres.join(" ")}</p>
      </Link>
    </li>
  );
}

export default Movie;
