import Hero from './Hero';


//TMDB API Key = 1abafb04bf673ab0305d0b75f410933c
// 'https://api.themoviedb.org/3/search/movie?query=star%20wars&include_adult=false&language=en-US&page=1' 


const MovieCard = ( {movie}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  return(
    <div className = "col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img src={posterUrl} className="card-img-top" alt={movie.original_title}/>
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <p className="card-text"></p>
          <a href="/" className="btn btn-primary">Show details</a>
        </div>
      </div>

    </div>
    

  )
}

const SearchView = ({keyword, searchResults}) => {
  const title = `You are searching for ${keyword}`

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie = {obj} key = {i} />
  })



    return (
        <>
        <Hero text = {title} />
        {resultsHtml &&
          <div className = 'container'>
            <div className = 'row'>
              {resultsHtml}
            </div>
          </div>
        
        }
        <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              An essay is, generally, a piece of writing that gives the author's
              own argument, but the definition is vague, overlapping with those
              of a letter, a paper, an article, a pamphlet, and a short story.
              Essays have been sub-classified as formal and informal: formal
              essays are characterized by "serious purpose, dignity, logical
              organization, length," whereas the informal essay is characterized
              by "the personal element (self-revelation, individual tastes and
              experiences, confidential manner), humor, graceful style, rambling
              structure, unconventionality or novelty of theme," etc.[1]
            </p>
          </div>
        </div>
      </div>
        </>
        
    )
}

export default SearchView;