import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="bg-orange-300 p-5 flex flex-col justify-center items-center w-screen" style={{height:"69.4vh"}}>
            <h2 className="text-3xl">Welcome to the Superhero DB!</h2>
            <h3 className="text-2xl">Choose your party...</h3>
            <div className="flex">
            <Link to="/heroes/dc">
                <button className="pick text-3xl w-48 m-5 py-1 px-3 rounded border-2 border-black bg-red-500 hover:bg-red-400 shadow-xl transition duration-500">DC</button>
            </Link>
            <Link to="/heroes/marvel">
                <button className="pick text-3xl w-48 m-5 py-1 px-3 rounded border-2 border-black bg-red-500 hover:bg-red-400 shadow-xl transition duration-500">Marvel</button>
            </Link>
            </div>
        </div>
    )
}
