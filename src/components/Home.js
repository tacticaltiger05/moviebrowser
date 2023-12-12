import React from 'react';
import Hero from './Hero';


const Home = () => {
    return (
      <div>
        <Hero text = "Welcome to react 201"/>
        <div className = "container">
                <div className = 'row'>
                    <div className = 'col-lg-8 offset-lg-2 my-5'>
                        <p className = 'lead'>
                        An essay is, generally, a piece of writing that gives the author's own argument, but the definition is vague, overlapping with those of a letter, a paper, an article, a pamphlet, and a short story. Essays have been sub-classified as formal and informal: formal essays are characterized by "serious purpose, dignity, logical organization, length," whereas the informal essay is characterized by "the personal element (self-revelation, individual tastes and experiences, confidential manner), humor, graceful style, rambling structure, unconventionality or novelty of theme," etc.[1]
                        </p>


                    </div>
                </div>
        </div>
    </div>
    )
  }
export default Home;