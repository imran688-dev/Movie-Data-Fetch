import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

export default function Home() {

  const API_KEY = `&api_key=2c15c2d2980befd2ad86274b6b9564c9`;
  const API_URL = `https://api.themoviedb.org/3/search/movie?query=`;
  const GENRE_URL = "https://api.themoviedb.org/3/genre/movie/list?language=en"

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const fetchGenres = async () => {
    const response = await fetch(GENRE_URL + API_KEY);
    const data = await response.json();
    setGenres(data.genres);
    console.log(data.genres);

  }



  const showGenre = async (genre) => {
    const res = await fetch(`https://api.themoviedb.org/3/search/collection?query=${genre}&include_adult=false&language=en-US&page=1${API_KEY}`);
    const date = await res.json();
    setMovies(date.results)
    // console.log(date)
  }


  useEffect(() => {
    fetchGenres();
    showGenre("Action");
  }, []);


  return (
    <>
      <section className='overflow-x-hidden max-w-[1050px] mx-auto'>
        <div className='flex gap-4 py-8 overflow-x-scroll'>
          {
            genres.map((genre) => (
              <button className="btn btn-outline btn-warning"
                onClick={() => showGenre(genre.name)}
              >{genre.name}</button>
            ))
          }
        </div>
        <div>
          {
            movies.length > 0 ? (
              <div className='grid grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1100px] mx-auto mt-10'>
                {/* {search.length} */}
                {movies.map((data) => (
                  <MovieCard key={data.id} data={data} />
                ))}
              </div>
            ) : (

              <div>
                <h2 className='text-center text-2xl font-semibold text-yellow-500 py-12'>Loading...</h2>
              </div>

            )
          }

        </div>
      </section>
    </>
  )
}

// 36:09 / 57: 17
