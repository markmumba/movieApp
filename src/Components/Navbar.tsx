import { BiSearch } from "react-icons/bi";
import { useState, useEffect } from "react";


const Navbar = (props: any) => {

    const [nav, setNav] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [showGenre, setShowGenre] = useState(false);
    const [genre, setGenre] = useState<any[]>([])

    const BASEURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${props.APIKEY}`

    const getGenre = async () => {

        try {
            const response = await fetch(BASEURL)
            if (!response.ok) {
                throw new Error("No genre are available")
            }
            const data = await response.json()

            setGenre(data.genres)
        }
        catch (error) {
            console.log(error)
        }
    }


    const handleGenre = () => {
        setShowGenre(!showGenre)
    }

    const handleInput = (e: any) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = () => {
        props.handleSearchWord(inputValue)
        setInputValue("")
    }

    const handleKeyPress = (e: any) => {
        if (e.key == 'Enter') {
            handleSubmit();
        }
    }

    const handleClick = () => {
        setNav((prevState) => !prevState)
    }

    useEffect(() => {
        getGenre();
    }, [])

    return (
        <>
            <div  className="w-full h-[70px] z-10 bg-zinc-800 text-white  fixed drop-shadow-lg">
                <div className="px-2 flex justify-between items-center w-full h-full">
                    <div className="flex items-center">
                        <h1 className="text-3xl font-bold mr-4  md:text-5xl"
                            onClick={() => { props.clearGenreData(); props.clearSearchWord(); props.clearMovieId();}}>MMM
                            <span className="text-sm border px-3 rounded-md bg-cyan-600">movies</span></h1>
                        <ul   className="hidden md:flex">
                            <li><button onClick={() => { props.clearGenreId; props.clearSearchWord; }}>Home</button></li>
                            <li onClick={handleGenre} ><button>Genre</button></li>
                            <li>Movies</li>
                            <li>Tv show</li>

                        </ul>
                    </div>
                    <div className=" hidden md:pr-20 md:flex">
                        <label htmlFor="search"><BiSearch style={{fontSize:"3rem"}} /></label>
                        <input type="text" id="search"
                            value={inputValue}
                            onChange={handleInput}
                            onKeyDown={handleKeyPress}
                            className=" rounded-xl text-sm  bg-transparent"
                            placeholder='search'
                            
                        />
                    </div>
                    <div className="md:hidden" onClick={handleClick}>
                        {!nav ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        }

                    </div>
                </div>
                {nav && <ul className="absolute bg-slate-200 w-full px-8">
                    <li className="border-b-2 border-slate-300 w-full ">Home</li>
                    <li className="border-b-2 border-slate-300 w-full ">About </li>
                    <li className="border-b-2 border-slate-300 w-full ">Support</li>
                    <li className="border-b-2 border    -slate-300  w-full ">Platforms</li>
                    <div className="flex flex-col pr-4">
                        <button className="bg-transparent text-indigo-500">Sign In </button>
                        <button>Sign Up</button>
                    </div>
                </ul>
                }
            </div>

            <div className={`text-white ${showGenre == false ? 'hidden' : ''} absolute border transition ease-in-out duration-300 bg-zinc-800 z-10 p-5 mt-20 ml-64`}>
                <h1 className="text-center text-2xl">Genres</h1>
                <div className="grid grid-cols-4 ">
                    {genre.map((gen: { id: number, name: string }) => {
                        return (
                            <button key={gen.id}
                                className="p-3 transition ease-in-out hover:scale-110"
                                onClick={() => props.getGenreData(gen)}>
                                {gen.name}
                            </button>
                        )
                    })}
                </div>
            </div>
        </>
    )
}



export default Navbar;