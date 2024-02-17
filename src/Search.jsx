// TODO 1 -> API_KEY + API_URL -> Create Link
// TODO 2 -> Fetch Data
// TODO 3 -> Show Data
// TODO 4 -> Make Dynamik Search Work


import { useEffect, useState } from 'react'
import MovieCard from './MovieCard';



const API_KEY = `&api_key=2c15c2d2980befd2ad86274b6b9564c9`;
const API_URL = `https://api.themoviedb.org/3/search/movie?query=`;


export default function Search() {
  // const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([""]);
  const [movies, setMovies] = useState([]);



  // const fetchMovies = async () => {
  //   // console.log(API_URL);
  //   const response = await fetch(API_URL + API_KEY);
  //   // console.log(response);
  //   const data = await response.json();
  //   // console.log(data.results)
  //   setMovies(data.results);
  // }

  const fetchSearch = async (search) => {
    const response = await fetch(`${API_URL}${search}&include_adult=false&language=en-US&page=1${API_KEY}`);
    const data = await response.json();
    // setSearch(data.results)
    setMovies(data.results)
  }


  useEffect(() => {
    // fetchMovies();
    fetchSearch("");
  }, []);


  return (
    <>
      <div className='max-w-[1200px] mx-auto my-10'>
        <div className='border-2 border-cyan-400 max-w-[600px] flex flex-row justify-between rounded-full p-2 mx-auto'>
          <input type="text" placeholder="Type here" className="input focus:border-none focus:outline-none w-full max-w-xs"

            onChange={(e) => setSearch(e.target.value)}
          />

          <button className='btn btn-primary'
            onClick={(e) => {
              e.preventDefault();
              fetchSearch(search);
            }}
          >
            Search
          </button>
        </div>
      </div >

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
            <h2 className='text-center text-2xl font-semibold text-yellow-500'>Search for a movie...</h2>
          </div>

        )
      }


      {/* {
          movies.map((data) => (
            <MovieCard key={data.id} data={data} />
          ))
        } */}
    </>
  );
}




