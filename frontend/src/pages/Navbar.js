import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <h1>FOOD HUT</h1>
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
            <ul className={menuOpen ? "show" : ""}>
                <li>Home</li>
                <li>About</li>
                <li>Add Recipe</li>
                <li>Recipes</li>
                <li>Register</li>
                <li>Login</li>
            </ul>
        </nav>
    );
};