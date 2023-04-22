import { useState } from "react";
import Navbar from "./Navbar"
import Discover from "./discover";
import Search from "./search";


const Main = () => {

    const APIKEY = `51e862f24d51b8aa6c09aa02fde190ff`

    const [searchWord, setSearchWord] = useState<string>("");

    const clearSearchWord = () => {
        setSearchWord("")
    }

    const handleSearchWord = (data: string): void => {
        setSearchWord(data)
    }


    console.log(searchWord)
    return (
        <>
            <Navbar handleSearchWord={handleSearchWord} clearSearchWord={clearSearchWord} />
            <div className="pt-20 ">
                {(searchWord.trim().length === 0) && <Discover APIKEY={APIKEY} />}
                {!(searchWord.trim().length === 0) && <Search APIKEY={APIKEY} searchWord={searchWord} />}
            </div>
        </>
    )
}


export default Main;