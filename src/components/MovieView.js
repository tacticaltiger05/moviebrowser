import React from "react";
import Hero from "./Hero";
import { useParams } from 'react-router-dom';
import {useEffect, useState } from 'react';


const MovieView = () => {
const {id} = useParams()

useEffect(()=> {
  console.log('make an api request', id)
}, [id]

)

const [movieDetails, setMovieDetails] = useState({})

  return (
    <>
      <Hero text="Movie detail view" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Hi
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieView;
