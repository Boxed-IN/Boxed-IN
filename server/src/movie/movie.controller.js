const userModel = require("./movie.model");
const { genres, languageMap } = require("./data");


const genreMap = genres.reduce((acc, genre) => {
    acc[genre.id] = genre.name;
    return acc;
}, {});

let data = [];

async function fetchData() {
    for (let i = 1; i < 19; i++) {
        try {
          const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d2b986552cf0ae809bb988285b30c070&page=${i}`);
          if (response.ok) {
            const responseData = await response.json();
            data = data.concat(responseData.results);
          } else {
            console.error(`Error at page ${i}`);
          }
        } catch (err) {
          console.error(err);
        }
      }
    
      const movies = data.map((movie) => {
        if (!movie.adult && movie.poster_path && languageMap[movie.original_language]) {
          return {
            title: movie.title,
            genre: genreMap[movie.genre_ids[0]],
            language: languageMap[movie.original_language],
            overview: movie.overview,
            poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + movie.poster_path,
            year: new Date(movie.release_date).getFullYear(),
          };
        } else {
          return null;
        }
      }).filter((movie) => movie !== null);
}

async function insertMovies() {
    await fetchData();

    const movies = data.map((movie) => {
        if (!movie.adult && movie.poster_path && languageMap[movie.original_language]) {
            return {
                title: movie.title,
                genre: genreMap[movie.genre_ids[0]],
                language: languageMap[movie.original_language],
                overview: movie.overview,
                poster_link: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + movie.poster_path,
                year: new Date(movie.release_date).getFullYear(),
            };
        } else {
            return null;
        }
    }).filter((movie) => movie !== null);
    
    for (const movie of movies) {
        await userModel.insert(movie);

    }
}

async function getAllMovies() {
  const result = await userModel.getAll();
  return result;
}


module.exports = {
  fetchData,
  insertMovies,
  getAllMovies
};