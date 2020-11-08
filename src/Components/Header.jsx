import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-blue-300 p-5 mb-5">
            <h1>Superheroes DB</h1>
            <h3>Your favorite heroes all in one place</h3>

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
