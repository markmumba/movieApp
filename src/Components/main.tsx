import { useState } from "react";
import Navbar from "./Navbar"
import Discover from "./discover";
import Search from "./search";


const Main = () => {

    const APIKEY = `51e862f24d51b8aa6c09aa02fde190ff`

    const [searchWord, setSearchWord] = useState<string>();

    const handleSearchWord = (data: string): void => {
        setSearchWord(data)
    }



    return (
        <>
            <Navbar handleSearchWord={handleSearchWord} />
            <div className="pt-20 ">
                {!searchWord && <Discover APIKEY={APIKEY} />}
                {searchWord && <Search APIKEY={APIKEY} searchWord={searchWord} />}
            </div>
        </>
    )
}


export default Main;