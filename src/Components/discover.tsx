import { useEffect, useState } from "react";

type movieType = {
    id:number,
    title:string,
    poster_path:string,
    vote_average: number
}[]

const Discover = (props: any) => {

    const [movies, setMovies] = useState<movieType>([])

   
    const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${props.APIKEY}`;


    const getData = async () => {
        try {
            const response = await fetch(BASE_URL);
            const data = await response.json()
            setMovies(data.results)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <h1 className="text-white font-medium text-3xl">Recomended</h1>
            <div className="flex flex-wrap">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} className="text-white text-center shadow-lg w-35 p-1 m-1 transition-transform ease-in-out delay-150  hover:translate-y-1 hover:scale-110">
                            <div className="p-3">
                                <img className="w-40 h-60 rounded-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
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

export default Discover;


