let API_KEY = process.env.API_KEY;

export default{
    Trending: {
        title: 'Trending',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    TopRated: {
        title: 'Top Rated',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    Action: {
        title: 'Action',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    Comedy: {
        title: 'Comedy',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    Horror: {
        title: 'Horror',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    Romance: {
        title: 'Romance',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    Mystery: {
        title: 'Mystery',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    SkiFi: {
        title: 'Ski-Fi',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    Western: {
        title: 'Western',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    Animation: {
        title: 'Animation',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    TvMovies: {
        title: 'Tv Movies',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
}

