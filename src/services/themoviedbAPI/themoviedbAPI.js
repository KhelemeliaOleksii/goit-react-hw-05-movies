// trending movies : 'https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>'
// search movie: 'https://api.themoviedb.org/3/search/movie?api_key=70c5c640dcd47438a9460ce1b8e1a5b1&language=en-US&page=1&include_adult=false&query=king'
// film info: 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US'
// reviews: 'https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1'
// credits: 'https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US'

import http from './requestAPI'

const API_KEY = '70c5c640dcd47438a9460ce1b8e1a5b1';
const BASE_URL = 'https://api.themoviedb.org/3';
const DEFAULT_LANGUAGE = 'en-US'

export const fetchTrendingMovies = (page = 1) => {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`;
    return http.get(url);
}
export const fetchByName = (value, page = 1, language = DEFAULT_LANGUAGE) => {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${language}&page=${page}&include_adult=false&query=${value}`;
    return http.get(url);
}
export const fetchFilmDetails = (movieId, language = DEFAULT_LANGUAGE) => {
    const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=${language}`;
    // throw new Error("error in fetch")
    return http.get(url)
        .then((results) => {
            console.log("results", results);
            return results
        })
    // .catch(errorResponse => {
    //     console.log(errorResponse);
    //     throw new Error('Error in fetch');
    // });
    // } catch (error) {
    //     console.log("error in fetch", error);
    //     throw new Error("in fetch")
    // }
}
export const fetchFilmReviews = (movieId, language = DEFAULT_LANGUAGE) => {
    const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=${language}`;
    return http.get(url);
}
export const fetchFilmCredits = (movieId, language = DEFAULT_LANGUAGE) => {
    const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=${language}`;
    return http.get(url);
}

const themoviedbAPI = {
    fetchTrendingMovies,
    fetchByName,
    fetchFilmDetails,
    fetchFilmReviews,
    fetchFilmCredits,
}

export default themoviedbAPI;