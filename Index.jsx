import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { MY_API_KEY, TMDB_BASE_URL } from "../Utils/Constant";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

export const getGenres = createAsyncThunk("Netflix/getGenres", async () => {
  const {
    data: { genres },
  } = await axios.get(
    `${TMDB_BASE_URL}/genre/movie/list?api_key=${MY_API_KEY}`
  );
  return genres;
});

const arrayOfMovieData = (arrays, movieArrays, genres) => {
  arrays.forEach((movie) => {
    const movieGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) movieGenres.push(name.name);
    });
    if (movie.backdrop_path)
      movieArrays.push({
        id: movie.id,
        name: movie?.original_name || movie.original_title,
        image: movie.backdrop_path,
        genres: movieGenres.slice(0, 3),
      });
  });
};

const getMovieData = async (api, genres, paging = false) => {
  const movieArrays = [];
  for (let i = 1; movieArrays.length < 80 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    arrayOfMovieData(results, movieArrays, genres);
  }
  return movieArrays;
};

export const fetchMovies = createAsyncThunk(
  "Netflix/getMovies",
  async ({ type }, thunkAPI) => {
    const {
      Netflix: { genres },
    } = thunkAPI.getState();
    return (getMovieData = getMovieData(
      `${TMDB_BASE_URL}/trending/${type}/week?api_key=${MY_API_KEY}`,
      genres,
      true
    ));
  }
);

const Netflixslice = createSlice({
  name: "Netflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});
export const store = configureStore({
  reducer: {
    Netflix: Netflixslice.reducer,
  },
});
