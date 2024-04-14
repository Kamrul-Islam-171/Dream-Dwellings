import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const NavBar = () => {

    const { user, userLogOut } = useContext(AuthContext);
    const [photo, setPhoto] = useState(null);
    // console.log(user);

    // useEffect(() => {
    //     setPhoto(user?.photoUrl);
    // }, [user])
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    // console.log(photo)

    const handleLogout = () => {
        console.log('please logout');
        userLogOut()
            .then(() => {
                console.log('sign out successfully');
            })
            .catch(error => {
                console.log(error)
            })
    }
    const navlinks = <>
        {/* <NavLink className={({ isActive }) =>
            isActive ? "  font-medium border border-primary-color rounded-lg text-primary-color p-2" : " font-medium hover:bg-secondary-color p-2 rounded-lg hover:text-white"
        } to='/'>Home</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "  font-medium border border-primary-color rounded-lg text-primary-color p-2" : " font-medium hover:bg-secondary-color p-2 rounded-lg hover:text-white"
        } to='/userProfile'>User Profile</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "  font-medium border border-primary-color rounded-lg text-primary-color p-2" : " font-medium hover:bg-secondary-color p-2 rounded-lg hover:text-white"
        } to='/updateProfile'>Update Profile</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "  font-medium border border-primary-color rounded-lg text-primary-color p-2" : " font-medium hover:bg-secondary-color p-2 rounded-lg hover:text-white"
        } to='/about'>About Us</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "  font-medium border border-primary-color rounded-lg text-primary-color p-2" : " font-medium hover:bg-secondary-color p-2 rounded-lg hover:text-white"
        } to='/feedbacks'>Feedbacks</NavLink> */}

        <NavLink className={({ isActive }) =>
            isActive ? "  font-medium border-b-2 border-primary-color text-primary-color p-2" : " font-medium  p-2 rounded-lg hover:text-primary-color"
        } to='/'>Home</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "  font-medium border-b-2 border-primary-color text-primary-color p-2" : " font-medium  p-2 rounded-lg hover:text-primary-color"
        } to='/userProfile'>User Profile</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "  font-medium border-b-2 border-primary-color text-primary-color p-2" : "font-medium  p-2 rounded-lg hover:text-primary-color"
        } to='/updateProfile'>Update Profile</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "  font-medium border-b-2 border-primary-color text-primary-color p-2" : "font-medium  p-2 rounded-lg hover:text-primary-color"
        } to={`/blogs/${1}`}>Blogs</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "  font-medium border-b-2 border-primary-color text-primary-color p-2" : "font-medium  p-2 rounded-lg hover:text-primary-color"
        } to='/about'>About Us</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "  font-medium border-b-2 border-primary-color text-primary-color p-2" : "font-medium  p-2 rounded-lg hover:text-primary-color"
        } to='/feedbacks'>Feedbacks</NavLink>
    </>
    return (
        <div className="fixed top-0 z-10 w-full ">
            <div className="navbar bg-base-100 lg:px-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul onClick={scrollToTop} tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <Link onClick={scrollToTop} to={'/'} className="btn btn-ghost font-bold text-lg md:text-xl lg:text-2xl ">Dream <span className="text-primary-color">Dwellings</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul onClick={scrollToTop} className="menu menu-horizontal px-1 flex gap-5">
                        {navlinks}
                    </ul>
                </div>
                {/* {
                    user ?
                    <>
                    <button className="btn bg-primary-color text-white">Logout</button>
                    </> 
                    : 
                    <p>login</p>
                } */}
                <div className="navbar-end space-x-3 ">
                    {
                        user ?
                            <>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-12 rounded-full">
                                            <img alt="Not found" src={user.photoURL} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link to='/userProfile' className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </Link>
                                        </li>
                                        <li><Link>{user?.displayName}</Link></li>
                                        <li><Link>Logout</Link></li>
                                    </ul>
                                </div>

                                <div onClick={scrollToTop} className='border  rounded-lg hover:border-primary-color'>
                                    <button onClick={handleLogout} className="btn hover:text-primary-color hover:bg-white hover:border-primary-color bg-primary-color text-white font-bold text-lg border-none px-5">LogOut</button>
                                </div>
                            </>
                            :
                            <>
                                <div onClick={scrollToTop} className='border  rounded-lg hover:border-primary-color'>
                                    <Link to='/login' className="btn hover:text-primary-color hover:bg-white hover:border-primary-color bg-primary-color text-white font-bold text-lg border-none px-5">LogIn</Link>
                                </div>
                            </>
                    }
                    {/* <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-12 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>

                    <div onClick={scrollToTop} className='border  rounded-lg hover:border-primary-color'>
                        <Link to='/login' className="btn hover:text-primary-color hover:bg-white hover:border-primary-color bg-primary-color text-white font-bold text-lg border-none px-5">LogIn</Link>
                    </div> */}
                </div>


            </div>

            {/* {

                user ?
                    <>
                        <div>
                            <img src={user.photoUrl} alt="" />
                        </div>
                    </>
                    :
                    <>
                        <h1>photo nai</h1>
                    </>
            } */}



        </div>
    );
};

export default NavBar;