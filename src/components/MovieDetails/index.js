import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function MovieDetails({ movies }) {
  const { movieId } = useParams();
  const { title, description } = movies.find(movie => movie.id === parseInt(movieId));
  
  return (
    <div className='comp purple'>
      <h1>MovieDetails Component</h1>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default MovieDetails;
