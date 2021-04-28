const requests = {
  getPopular: `/popular?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=1`,
  getNowPlaying: `/now_playing?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=1`,
  getTopRated: `/top_rated?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=1`,
  getUpcoming: `/upcoming?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=1`,
};

export default requests;
