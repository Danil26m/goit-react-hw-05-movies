import { Link, Navigate, Route, Routes } from "react-router-dom";
import Actor from "./Actor";
import Home from "./Home";
import InfoPopularMovie from "./InfoPopularMovie";
import Movies from "./Movies";
import Reviews from "./Reviews";
export const App = () => {
  return (
    <>
    
    <Link to='/'>Home</Link>
    <Link to='movies'>Movies</Link>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="movies" element={<Movies/>}>
      <Route path=":id" element={<InfoPopularMovie/>}>
        <Route path="cast" element={<Actor/>}/>
        <Route path="reviews" element={<Reviews/>}/>
      </Route>
    </Route>
    <Route path="*" element={<Navigate to='/'/>}/>
   </Routes>
   </>
  );
};
