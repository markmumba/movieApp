import { useEffect, useState } from "react";


const Search = (props: any) => {

    const [searchedMovies, setSearchedMovies] = useState<any[]>([])

    const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${props.APIKEY}&query=${props.searchWord}`

    const getSearchResult = async () => {

        try {
            const response = await fetch(BASE_URL);
            const data = await response.json()
            setSearchedMovies(data.results.filter((movie: { poster_path: string }) => movie.poster_path))
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getSearchResult()
    }, [props.searchWord])


    return (
        <>
            <div className="flex flex-wrap">
                {searchedMovies.map(searchedMovie => {
                    return (

                        <div key={searchedMovie.id} className="text-white text-center shadow-lg w-35 p-1 m-1 transition-transform ease-in-out delay-150  hover:translate-y-1 hover:scale-110">
                            <div className="p-3">
                                <img className="w-40 h-60 rounded-lg" src={`https://image.tmdb.org/t/p/w500${searchedMovie.poster_path}`} />
                                <p className=" text-sm w-40 "> {searchedMovie.title}</p>
                                <p>{searchedMovie.vote_average}</p>
                            </div>
                        </div>
                    )

                })}

            </div>
        </>
    )
}

export default Search;