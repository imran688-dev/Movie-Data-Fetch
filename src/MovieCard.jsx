import { Link } from "react-router-dom";

export default function MovieCard({ data }) {

  const { title, backdrop_path, overview, id, name } = data;

  return (
    <>
      <div className="card bg-base-100 shadow-xl max-w-[1100px] mx-auto">
        <figure className="px-10 pt-10">

          {
            backdrop_path ? (
              <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title} className="rounded-xl" />
            ) : (
              <img src="https://miro.medium.com/max/2400/0*hDAyhnOx767w5qma.jpg" alt={title} className="rounded-xl" />
            )
          }


        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title ? title : name}!</h2>
          <p>{overview.slice(0, 100)}...</p>
          <div className="card-actions">
            <Link to={`/details/${id}`}>
              <button className="btn btn-primary">View Movie</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}


