import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import AppBar from "./AppBar";
import Container from "./Container";
import HomePage from "pages/HomePage";
import MoviesPage from "pages/MoviesPage";
import MovieDetailsPage from "pages/MovieDetailsPage";
import Cast from "./Cast";
import Reviews from "./Reviews";

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Outlet />
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} >
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Container>
  );
};

