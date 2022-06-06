import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css';
import { VscSignOut } from "react-icons/vsc";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import logo from '../../Assets/img/logo.png'
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";


const Navbar = () => {
    const [user] = useAuthState(auth);
    const logOut = e => {
        signOut(auth)
        localStorage.removeItem('accessToken')
    }

    return (
        <div className='bg-light shadow'>
            <div className='border-b'>
                <div class="navbar h-10 w-[85%] mx-auto bg-base-100">
                    <div class="flex-1 gap-5">
                        <FaFacebookF></FaFacebookF>
                        <FaTwitter></FaTwitter>
                        <FaYoutube></FaYoutube>
                        <FaInstagram></FaInstagram>
                    </div>
                    <div class="flex-none gap-3">
                        <div class="form-control">
                            <input type="text" placeholder="Search" class="topsearch py-0" />
                        </div>
                        <div>
                            {
                                user && <ul>
                                    <li className='mr-7'>
                                        <span >
                                            <label tabindex="0" class="btn btn-primary btn-circle avatar">
                                                <div class="w-10 rounded-full" >
                                                    <img src={user?.photoURL} alt='' />
                                                </div>
                                            </label>
                                        </span>
                                    </li>
                                </ul>
                            }


                        </div>
                    </div>
                </div>
            </div>
            <div class="navbar lg:w-4/5 w-[90%] mx-auto ">
                <div className='lg:hidden'>
                    <div className='flex items-center justify-center mr-3'>
                        <label tabindex="1" for="my-drawer-2" className='text-2xl btn btn-ghost'>
                            <BiMenuAltLeft></BiMenuAltLeft>
                        </label>
                        <button >

                        </button>
                    </div>
                </div>
                <div class="navbar-start lg:w-1/5">
                    <img src={logo} alt="" />

                </div>

                <div class="navbar-end lg:w-[80%]">
                    <div className='hidden lg:flex'>
                        <ul class="flex items-center text-[rgb(51, 51, 51)] text-md">
                            <li className='mr-7'><Link to='/'>Home</Link></li>

                            {
                                user && <li className='mr-7'><Link to='dashboard'>Dashboard</Link></li>
                            }
                            <li className='mr-7'><Link to='blogs'>Blogs</Link></li>
                            <li className='mr-7'><Link to='my-portfolio'>Portfolio</Link></li>


                            {
                                user ? <li className='mr-7 flex'>
                                    <button onClick={logOut} className='bg-primary flex items-center text-white border-0 hover:bg-[#609a23] signoutbtn' >
                                        <span className='mr-1'>Sign Out</span>
                                        <span><VscSignOut></VscSignOut></span>
                                    </button></li> : <li className='flex'><Link to='login'>Login</Link></li>
                            }




                        </ul>
                    </div>
                    <div class="dropdown dropdown-end">
                        <div>
                            <label tabindex="0" className='text-2xl btn btn-ghost lg:hidden'>
                                <BiMenuAltRight></BiMenuAltRight>
                            </label>

                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                                {
                                    user && <li><span >
                                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                            <div class="w-10 rounded-full" >
                                                <img src={user?.photoURL} alt='' />
                                            </div>
                                        </label>
                                        <li>{user?.displayName}</li>
                                    </span>
                                    </li>
                                }
                                <li><Link to='/'>Home</Link></li>
                                {
                                    user && <li><Link to='dashboard'>Dashboard</Link></li>
                                }
                                <li><Link to='blogs'>Blogs</Link></li>
                                <li><Link to='my-portfolio'>Portfolio</Link></li>

                                {
                                    user ? <li><button onClick={logOut} className='skybtn' >Sign Out</button></li> : <li><Link to='login'>Login</Link></li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;