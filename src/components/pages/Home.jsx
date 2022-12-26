import { Suspense, useEffect } from "react";
import { useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Home() {
  const [popular, setPopular] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=74e6158a65e53d6dc937ccdd03fe4703').then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }).then(({ results }) => setPopular(results)).catch(console.log)
  }, [])
  return <>{location.pathname === '/'?<ul>
    {popular.map(({ original_title, id }) =>
      <li key={id}>
        <Link to={`movies/${id}`}>
          {original_title}
        </Link>
      </li>
    )}
  </ul>:<Suspense fallback={null}>
      <Outlet />
    </Suspense>}
    

  </>
}