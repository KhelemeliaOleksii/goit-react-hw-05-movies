import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import AppBar from "./AppBar";
import Container from "./Container";
import Loader from "./Loader";

// для webpackChunkName є навіть різниця у записі:
// /*webpackChunkName: "home-page"  */ - згенерує webpack Chunk Name як "home-page" 
// /*webpackChunkName : "home-page" */ - згенерує ім'я автоматично
const HomePage = lazy(() => import('pages/HomePage' /*webpackChunkName: "home-page"  */));
const MoviesPage = lazy(() => import('pages/MoviesPage' /* webpackChunkName: "movies-page" */));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage' /*webpackChunkName: "movie-details-page"*/));
const Cast = lazy(() => import('./Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() => import('./Reviews'/* webpackChunkName: "reviews" */));

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Outlet />
      <Suspense fallback={<Loader />}>
        <Routes >
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />} >
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Suspense>
    </Container >
  );
};

