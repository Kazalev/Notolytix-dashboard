import React, { useContext } from "react"
import './style.scss';
import { BiBell } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { SearchContext } from "../../contexts/SearchContext";

function Navbar() {
    const [ search, setSearch ] = useContext(SearchContext);

    return (
        <nav>
            <div className="links">
                <ul>
                    <Link className="navStyle" to="/">
                        <li>Dashboard</li>
                    </Link>
                    <Link className="navStyle" to="/projects">
                        <li>Projects</li>
                    </Link>
                    <Link className="navStyle" to="/calendar">
                        <li>Calendar</li>
                    </Link>
                    <Link className="navStyle" to="/statuses">
                        <li>Statuses</li>
                    </Link>
                    <Link className="navStyle" to="/people">
                        <li>People</li>
                    </Link>
                </ul>
            </div>

            <div className="profile">
                <input className="search" id="search" placeholder="&#x1F50D; Search" onChange={(e) => {setSearch(e.target.value)}} />
                <BiBell className="bell" />
                <img alt="just-img" src={"https://i.pinimg.com/originals/e5/3c/1f/e53c1fad5d2be558238d64ae45cc01b6.jpg"} />
                <div className="dropdown">
                    <button className="btn-profile"><MdKeyboardArrowDown /></button>
                    <div className="dropdown-content">
                        <a href="#">Profile</a>
                        <a href="#">Stats</a>
                        <a href="#">Logout</a>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
