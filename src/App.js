import { useContext } from "react";
import { MovieContext } from "./index";
import MovieDetail from "./MovieDetail";
import MovieList from "./MovieList";
import { Route } from "./router";

function App() {
  const movieId = useContext(MovieContext);

  return (
    <>
      <Route path={"/"}>
        <MovieList />
      </Route>
      <Route path={`/movie/${movieId}`}>
        <MovieDetail />
      </Route>
    </>
  );
}

export default App;
