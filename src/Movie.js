function Movie({ coverImg, title, description, year, genres }) {
  return (
    <li>
      <a href="#">
        <img src={coverImg} alt="영화 포스터" />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{year}</p>
        <p>{genres.join(" ")}</p>
      </a>
    </li>
  );
}

export default Movie;
