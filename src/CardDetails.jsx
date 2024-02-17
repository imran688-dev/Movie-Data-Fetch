import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CardDetails() {

  // url = 'https://api.themoviedb.org/3/movie/634649?&api_key=2c15c2d2980befd2ad86274b6b9564c9'

  const params = useParams();
  // console.log(params);

  const BASE_URL = `https://api.themoviedb.org/3/movie/${params.id}?`
  const API_KEY = `&api_key=2c15c2d2980befd2ad86274b6b9564c9`;
  const IMG_URL = `https://image.tmdb.org/t/p/original`;

  const [movies, setMovies] = useState([]);

  const showDetails = async () => {
    const res = await fetch(BASE_URL + API_KEY);
    const data = await res.json();
    setMovies(data);
    // console.log(data);
  }

  useEffect(() => {
    showDetails();
  }, []);

  return (
    <>
      <section className='max-w-[1100px] my-20 mx-auto px-8'>
        {
          movies.backdrop_path ? (
            <img src={IMG_URL + movies.backdrop_path} alt={movies.title} className='shadow-lg rounded-2xl' />
          ) : (
            <div>
              <h1>We are sorry bro!</h1>
            </div>
          )
        }
        <h1 className='text-5xl text-emerald-400 font-bold mt-5'>{movies.title}</h1>
        <p className='text-xl font-light mt-5'>{movies.overview}</p>
        {/* <ul>
          {
            movies.production_countries.map((country) => (
              <li>{country.name}</li>
            ))
          }
        </ul> */}
      </section>
    </>
  )
}

