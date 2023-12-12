import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import AboutView from './components/AboutView';
import { Route, Routes } from 'react-router-dom';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';




function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText ] = useState('');


  useEffect(()=> {

    console.log(searchText, "is the search text")
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2IwNWQ4OWYyZGNkYTM4NmUyODk4M2ViMDAyNTAzZSIsInN1YiI6IjY1NmFhMWFlZmNhZGI0MDBjOGRjOTRiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sP3mAUYemfNZXR9IDcIwFGBSdsX8Nylxh_L9URR7Nqo',
      }
    };

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results)
      })

  }, [searchText])


  

  return (
    <div>
      <Navbar searchText = { searchText } setSearchText = {setSearchText}/>
      <Routes>
        <Route path = '/' element = {<Home />} />
    
        <Route path = "/about" element={<AboutView />} />
        <Route path = '/search' element = {<SearchView keyword = {searchText} searchResults = {searchResults} />} />
        <Route path = "/movies/:id" element={<MovieView />} />

      </Routes>
      
    </div>
  );
}

export default App;
