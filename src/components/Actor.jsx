import { useEffect, useState  } from "react"
import {useParams } from "react-router-dom";

export default function Actor() {
    const {id} = useParams();
    const [actor, setActor] = useState([])
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=74e6158a65e53d6dc937ccdd03fe4703&language=en-US`).then(response => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          }).then(({cast})=>setActor(cast)).catch(console.log)
    },[id])
    return actor.length ? actor.map(({characte,profile_path,name})=>
    <div key={name}>
        <img src={`https://www.themoviedb.org/t/p/w138_and_h175_bestv2/${profile_path}`} alt={name} />
        <p>{name}</p>
        <p>Characte: {characte}</p>
    </div>
    ):'No cast'
}