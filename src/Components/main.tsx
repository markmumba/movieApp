import { useState } from "react";
import Navbar from "./Navbar"
import Discover from "./discover";
import Search from "./search";
import Genre from "./genre";


const Main = () => {

    const APIKEY = `51e862f24d51b8aa6c09aa02fde190ff`

    const [searchWord, setSearchWord] = useState<string>("");
    const [genreId, setGenreId] = useState<any>(0);

    const clearSearchWord = () => {
        setSearchWord("")
    }

    const handleSearchWord = (data: string): void => {
        setSearchWord(data)
    }

    const getGenreId = (id: number) => {
        setGenreId(id)
    }
    const clearGenreId = () => {
        setGenreId(0);
        console.log(genreId)
    }

    return (
        <>
            <Navbar handleSearchWord={handleSearchWord} clearSearchWord={clearSearchWord} APIKEY={APIKEY} getGenreId={getGenreId} clearGenreId={clearGenreId} />
            <div className="pt-20 ">
                {genreId == 0 && (searchWord.trim().length === 0) && <Discover APIKEY={APIKEY} />}
                {genreId === 0 && !(searchWord.trim().length === 0) && <Search APIKEY={APIKEY} searchWord={searchWord} />}
                {genreId > 0 && <Genre APIKEY={APIKEY} genreId={genreId} />}
            </div>

        </>
    )
}


export default Main;