import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from './CultomLink';


const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    const menuItems = <>
        <li><CustomLink to='/home'>Home</CustomLink></li>

        <li><CustomLink to='/makeappoinment'>Appointment</CustomLink></li>
        <li><CustomLink to='/about'>About</CustomLink></li>
        {
        user && <li><CustomLink to='/dashboard'>Dashboard</CustomLink></li>
        }
        <li><CustomLink to='/'>Reviews</CustomLink></li>
        <li><CustomLink to='/'>Contact Us</CustomLink></li>
        <li>{user ? <button className='text-primary' onClick={logout} > Log Out</button> : <CustomLink to='/login'>Login</CustomLink>}</li>
    </>

    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeeidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;