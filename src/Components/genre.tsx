import { useEffect, useState } from "react";

type genreMoviesT = {
    id: number,
    poster_path: string,
    title: string,
    vote_average: number
}[]

const Genre = (props: any) => {

    const [genreMovies, setGenreMovies] = useState<genreMoviesT>([])

    const BASEURL = `https://api.themoviedb.org/3/discover/movie?api_key=${props.APIKEY}&with_genres=${props.genreData.id}`

    const getMoviesByGenre = async () => {
        try {
            const response = await fetch(BASEURL)
            if (!response.ok) {
                throw new Error("Did not get movies of this genre");
            }
            const data = await response.json()
            setGenreMovies(data.results)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getMoviesByGenre();
    }, [props.genreId])

    return (
        <>
            <h1 className="text-white text-3xl font-bold m-4">{props.genreData.name}</h1>
            <div className="flex flex-wrap">
                {genreMovies.map((movie) => {
                    return (
                        <div key={movie.id} className="text-white text-center shadow-lg w-35 p-1 m-1 transition-transform ease-in-out delay-150  hover:translate-y-1 hover:scale-110">
                            <div className="p-3">
                                <img onClick={() => props.getMovieId(movie.id)} className="w-40 h-60 rounded-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                <p className=" text-sm w-40 "> {movie.title}</p>
                                <p>{movie.vote_average}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Genre;