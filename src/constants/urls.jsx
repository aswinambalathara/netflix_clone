import {API_KEY,baseUrl,imageBaseUrl} from './constants.jsx'
export const banners = `/trending/all/week?api_key=${API_KEY}&language=en-US`
export const netflixOriginals = `/discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const romance = `/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const documentaries = `/discover/movie?api_key=${API_KEY}&with_genres=99`

const videosApi = `movie/{movie_id}/videos?api_key=${API_KEY}&language=en-US`