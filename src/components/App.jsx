import { Link, Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(()=> import('./pages/Home'))
const Actor = lazy(()=> import('./pages/Actor'))
const Movies = lazy(()=> import('./pages/Movies'))
const Reviews = lazy(()=> import('./pages/Reviews'))
const InfoPopularMovie = lazy(()=> import('./InfoPopularMovie'))
export const App = () => {
  return (
    <>
    <div style={{display:'flex',gap:'20px',marginLeft:'40px'}}>
     <Link to='/'>Home</Link>
    <Link to='movies'>Movies</Link> 
    </div>
    
   <Routes>
    <Route path="/" element={<Home/>}>
    <Route path="movies" element={<Movies/>}/>
    <Route path="movies/:id" element={<InfoPopularMovie/>}>
        <Route path="cast" element={<Actor/>}/>
        <Route path="reviews" element={<Reviews/>}/>
      </Route>
 
    <Route path="*" element={<Navigate to='/'/>}/>
    </Route>
   </Routes>
   </>
  );
};
