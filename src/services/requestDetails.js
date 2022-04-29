import {TMDB_API_KEY} from '../data/index';

async function fetchMovieDetail(showId) {
  try {
    const requestMovieDetails = await fetch(`https://api.themoviedb.org/3/movie/${showId}?api_key=${TMDB_API_KEY}&language=pt-BR`)
        .then((response) => response.json());

    const requestTrailerVideo = await fetch(`https://api.themoviedb.org/3/movie/${showId}/videos?api_key=${TMDB_API_KEY}&language=pt-BR`)
        .then((response) => response.json())
        .then((response) => response.results[0]);

    const requestRecomendations = await fetch(`https://api.themoviedb.org/3/movie/${showId}/recommendations?api_key=${TMDB_API_KEY}&language=pt-BR&page=1`)
        .then((response) => response.json())
        .then((response) => response.results);

    const requestProviders = await fetch(`https://api.themoviedb.org/3/movie/${showId}/watch/providers?api_key=${TMDB_API_KEY}`)
        .then((response) => response.json())
        .then((response) => response.results.BR);

    requestMovieDetails['trailer_key'] = requestTrailerVideo;
    requestMovieDetails['recomendations'] = requestRecomendations.slice(0, 4);
    requestMovieDetails['providers'] = requestProviders;
    requestMovieDetails.production_companies = requestMovieDetails
        .production_companies.filter((comp) => comp.logo_path !== null);

    return requestMovieDetails;
  } catch (error) {
    console.log(error);
  }
}

async function fetchSerieDetail(showId) {
}

async function requestDetails(path, showId) {
  switch (path) {
    case 'movies':
      return await fetchMovieDetail(showId);
    case 'series':
      return await fetchSerieDetail(showId);
    default:
      return {};
  }
}

export default requestDetails;
