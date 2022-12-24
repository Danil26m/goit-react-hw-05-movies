import { useEffect, useState } from 'react';
import { Link,Outlet, useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useSearchParams();
  const name = search.get('query') ?? '';
    const handelSubmit = even => {
    even.preventDefault();
    setSearch(even.target[0].value ? { query: even.target[0].value } : {});
    }
    
 
  useEffect(() => {
    if (!name) {
     
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=74e6158a65e53d6dc937ccdd03fe4703&language=en-US&query=${name}&page=1&include_adult=false`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({ results }) => {
        setFilms(results);
      }).catch(console.log);
      
  }, [search,name]);
  
  return <><form action="" onSubmit={handelSubmit}>
        <input type="text" autoComplete="off" />
        <button type="submit">Searsh</button>
      </form>
      <ul >
    {name?
            films.map(({original_title,id})=><Link to={`/movies/${id}`}><li key={id}>{original_title}</li></Link>)
        :''}  
      </ul>
      <Outlet />
      </>


}
