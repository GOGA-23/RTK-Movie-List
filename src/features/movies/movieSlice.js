import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { API_KEY } from "../../common/apis/MovieApiKey";

// Generates pending, fulfilled & rejected action types for Movies
export const fetchAsyncMovies = createAsyncThunk(
  "movie/fetchAsyncMovies",
  async (term) => {
    const res = await movieApi.get(`?apikey=${API_KEY}&s=${term}&type=movie`);
    return res.data;
  }
);

// Generates pending, fulfilled & rejected action types for Series
export const fetchAsyncSeries = createAsyncThunk(
  "movie/fetchAsyncSeries",
  async (term) => {
    const res = await movieApi.get(`?apikey=${API_KEY}&s=${term}&type=series`);
    return res.data;
  }
);

// Generates pending, fulfilled & rejected action types for Movie or Series using imdb ID
export const fetchAsyncMovieOrSeriesDetail = createAsyncThunk(
  "movie/fetchAsyncMovieOrSeriesDetail",
  async (id) => {
    const res = await movieApi.get(`?apikey=${API_KEY}&i=${id}&Plot=full`);
    return res.data;
  }
);

const initialState = {
  loading: false,
  movies: [],
  series: [],
  movieOrSeries: [],
  selectMovieOrSeries: {},
  error: "",
};

// handle actions in reducers:
export const movieSlice = createSlice({
  name: "movie",
  initialState,
  // standard reducer logic, with auto-generated action types per reducer
  reducers: {
    removeSelectedMovieOrSeries: (state) => {
      state.selectMovieOrSeries = {};
    },
  },
  // Add reducers for additional action types here, and handle loading state as needed
  extraReducers: (builder) => {
    builder
      // handle pending while fetching data from OMDB API
      .addCase(fetchAsyncMovies.pending, (state) => {
        state.loading = true;
      })
      // handle fulfilled movies data while fetching data from OMDB API
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.movies = payload;
        state.error = "";
      })
      // handle fulfilled series data while fetching data from OMDB API
      .addCase(fetchAsyncSeries.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.series = payload;
        state.error = "";
      })
      // handle fulfilled series data while fetching data from OMDB API
      .addCase(
        fetchAsyncMovieOrSeriesDetail.fulfilled,
        (state, { payload }) => {
          state.loading = false;
          state.movieOrSeries = payload;
          state.error = "";
        }
      )
      // handle error while fetching data from OMDB API
      .addCase(fetchAsyncMovies.rejected, (state, action) => {
        state.loading = false;
        state.movies = [];
        state.series = [];
        state.movieOrSeries = [];
        state.error = action.error.message;
      });
  },
});
// Action creators are generated for each case reducer function
export const { removeSelectedMovieOrSeries } = movieSlice.actions; // exporting actions to component tree
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getState = (state) => state.movies;
export const getMovieOrSeries = (state) => state.movies.movieOrSeries;
export default movieSlice.reducer;
