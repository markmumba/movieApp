import { useState } from "react";
import Navbar from "./Navbar"
import Discover from "./discover";
import Search from "./search";
import Genre from "./genre";
import SingleMovie from "./singleMovie";


const Main = () => {

    const APIKEY = `51e862f24d51b8aa6c09aa02fde190ff`


    const [searchWord, setSearchWord] = useState<string>("");
    const [genreData, setGenreData] = useState<any>({});
    const [movieId, setMovieId] = useState(0);


    const clearSearchWord = () => {
        setSearchWord("")
    }

    const handleSearchWord = (data: string): void => {
        setSearchWord(data)
    }

    const getGenreData = (data: Object) => {
        setGenreData(data)
    }
    const clearGenreData = () => {
        setGenreData({});
    }

    const getMovieId = (id: number) => {
        setMovieId(id)

    }
    const clearMovieId = () => {
        setMovieId(0)
    }
    return (
        <>

            <Navbar handleSearchWord={handleSearchWord} clearSearchWord={clearSearchWord} APIKEY={APIKEY} getGenreData={getGenreData} clearGenreData={clearGenreData} clearMovieId={clearMovieId} />
            <div className="pt-20 ">
                {Object.keys(genreData).length == 0 && (searchWord.trim().length === 0) && movieId === 0 && <Discover APIKEY={APIKEY} getMovieId={getMovieId} />}
                {Object.keys(genreData).length == 0 && !(searchWord.trim().length === 0) && movieId === 0 && <Search APIKEY={APIKEY} searchWord={searchWord} getMovieId={getMovieId} />}
                {!(Object.keys(genreData).length == 0) && movieId === 0 && <Genre APIKEY={APIKEY} genreData={genreData} getMovieId={getMovieId} />}
                {movieId > 0 && <SingleMovie APIKEY={APIKEY} movieId={movieId} />}
            </div>

        </>
    )
}


export default Main;