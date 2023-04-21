
import { useState } from "react";

const Navbar = (props: any) => {

    const [nav, setNav] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleInput = (e: any) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = () => {
        props.handleSearchWord(inputValue)
    }
    
    const handleKeyPress = (e: any) => {
        if (e.key == 'Enter') {
            handleSubmit();
        }
    }


    const handleClick = () => {
        setNav((prevState) => !prevState)
    }

    return (
        <div className="w-full h-[80px] z-10 bg-zinc-800 text-white  fixed drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold mr-4  sm:text-5xl">NetMovies</h1>
                    <ul className="hidden md:flex">
                        <li>Home</li>
                        <li>Genre</li>
                        <li>Movies</li>
                        <li>Tv show</li>

                    </ul>
                </div>
                <div className=" hidden md:pr-20  md:block">
                    <input type="text" id="search"
                        value={inputValue}
                        onChange={handleInput}
                        onKeyDown={handleKeyPress}
                        className="p-3 rounded-lg bg-zinc-700"
                        placeholder="search movie" />

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
    )
}



export default Navbar;