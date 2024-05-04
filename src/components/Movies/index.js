import { NavLink, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import MovieDetails from "../MovieDetails";

function Movies({ movies }) {
  return (
    <div className='comp orange'>
      <h1>Movies Component</h1>
      <nav>
        <ul>
          {movies.map(movie => {
            return (<li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`}>{movie.id}</NavLink>
            </li>
            )
          })}
        </ul>
      </nav>
      <Switch>
        <Route path='/movies/:movieId'>
          <MovieDetails movies={movies} />
        </Route>
      </Switch>
    </div >
  );
}

export default Movies;
