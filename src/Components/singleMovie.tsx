import { useEffect, useState } from "react";
import debounce from "lodash.debounce";

type movieDataT = {
    title: string,
    tagline: string,
    overview: string,
    popularity: number,
    poster_path: string,
    adult: boolean,
}


const SingleMovie = (props: any) => {

    const [movieData, setMovieData] = useState<movieDataT>();


    const BASE_URL = `https://api.themoviedb.org/3/movie/${props.movieId}?api_key=${props.APIKEY}`

    const getMovieDetails = async () => {
        try {

            const response = await fetch(BASE_URL)
            const data = await response.json()
            setMovieData(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    const debouncedGetMovieDetails = debounce(getMovieDetails, 600);

    useEffect(() => {
        debouncedGetMovieDetails();
    }, [props.movieId])




    console.log(movieData)
    return (
        <>
            <div className="flex text-white">

                <div className="p-7">
                    <h2>{movieData.title}</h2>
                </div>
            </div>

        </>
    )
}

export default SingleMovie;