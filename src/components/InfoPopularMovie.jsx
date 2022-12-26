import { Suspense, useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLocation,Outlet } from "react-router-dom";

export default function InfoPopularMovie() {
    const {id} = useParams();
    const [infoFilm, setInfoFilm] = useState([]);
    const location = useLocation();
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=74e6158a65e53d6dc937ccdd03fe4703&language=en-US`).then(response => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          }).then(r=>setInfoFilm(r)).catch(console.log)
    },[id])
    const{original_title,poster_path,genres,overview,vote_average,release_date}=infoFilm;
    const date = new Date(release_date).getFullYear();
    return genres &&
    <> 
    {location.state?<Link to={location.state}><button style={{width:'90px',display:'block',marginTop:'10px',cursor:'pointer'}}> Go to Back</button></Link>
    :<Link to='/'><button style={{width:'90px',display:'block',marginTop:'10px',cursor:'pointer'}}> Go to Back</button></Link>}
    
    <div style={{display:'flex',gap:'20px'}}>
        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`} alt={original_title} />
        <div>
            <h2>{original_title} ({date})</h2>
            <p>User Score: {vote_average}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <ul style={{display:'flex',gap:'10px'}}>
                { genres.map(({name})=><li key={name}>{name}</li>)}
            </ul>
        </div>
    </div>
    <div style={{display:'flex',flexDirection:'column',gap:'10px',margin:'10px 0'}}>
       <Link to={`cast`}>cast</Link>
    <Link to={`reviews`}>reviews</Link> 
    </div>
    <Suspense fallback={null}>
       <Outlet /> 
    </Suspense>
    
    
    </>
    ;
}