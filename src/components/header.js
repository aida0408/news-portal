import React from 'react';
import {NavLink, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/actions/userActions";


const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector(store => store.user.user)
    return (
        <header className="bg-red-500 p-4 mb-4">
            <div className="container mx-auto flex justify-between">
                <Link to="/" className="text-white font-bold text-xl">Your Logo</Link>
                <ul className="flex">
                    <li><NavLink to="/" className="text-white">Home</NavLink></li>
                    <li><NavLink to="/news" news className="text-white mx-3">News</NavLink></li>
                    {
                        !user &&
                        <li><NavLink to="/login" login className="text-white">Login</NavLink></li>
                    }
                    {
                        user &&
                        <li><button className="text-white" onClick={() => dispatch(logout())}>logout</button></li>
                    }

                </ul>
            </div>
        </header>
    );
};

export default Header;