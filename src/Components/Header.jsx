import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="relative top-0 bg-blue-300 w-screen">
            <h1 className="text-4xl">Superheroes DB</h1>
            <h3 className="text-2xl">Your favorite heroes all in one place</h3>

            <nav className="bg-blue-600">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/heroes">Heroes</Link>
                    </li>
                    <li>
                        <Link to="/hero">Hero</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
