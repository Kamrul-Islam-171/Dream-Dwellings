import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FaGithub, FaInstagram, FaPrint, FaSkype, FaTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

import { FaFacebook } from "react-icons/fa";



import home from '../../../public/home1.png'
import { Link } from "react-router-dom";
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className="container mx-auto pb-3">
            <div className='text-white pt-20 text-center lg:text-start  grid gap-5 lg:grid-cols-4 md:grid-cols-2 '>
                <div className="">
                    {/* <img src={home} className='mx-auto  w-[70px] h-[70px] bg-white rounded-full' alt="" /> */}
                    <h1 className='text-gray-100 text-2xl font-bold'>Dream Dwelling</h1>
                    <p className='text-gray-400'>Discover your perfect sanctuary with Dream Dwelling, where every home embodies the essence of your dreams. Let us guide you to the doorstep of your ideal living space.</p>
                </div>
                <div className="lg:ml-10">
                    <h1 className="text-gray-100 text-lg">Quick Links</h1>
                    <Link to={'/about'} onClick={scrollToTop}><p className="text-gray-400">About Us</p></Link>
                    <p className="text-gray-400">Properties</p>
                    <p className="text-gray-400">Terms and Condition</p>
                    <p className="text-gray-400">Contact Us</p>
                </div>
                <div>
                    <h1 className="text-gray-100 text-lg">Contact Us</h1>
                    <div className="text-gray-400">
                        <div className="flex items-center gap-2 justify-center lg:justify-start ">
                            <span><IoLocationOutline /></span>
                            <p>Marais, 30, Paris</p>
                        </div>
                        <div className="flex items-center gap-2 justify-center lg:justify-start">
                            <span><FiPhone /></span>
                            <p>(305) 555-4446</p>
                        </div>
                        <div className="flex items-center gap-2 justify-center lg:justify-start">
                            <span><FaPrint /></span>
                            <p>(305) 555-4446</p>
                        </div>
                        <div className="flex items-center gap-2 justify-center lg:justify-start">
                            <span ><MdMailOutline /></span>
                            <p>dreamdwelling@gmil.com</p>
                        </div>
                    </div>


                </div>
                <div>
                    <form>
                        <h6 className="footer-title ">Newsletter</h6>
                        <fieldset className="form-control w-80 mx-auto">
                            <label className="label">
                                <span className="label-text text-gray-400">Enter your email address</span>
                            </label>
                            <div className="join">
                                <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                                <button className="btn bg-primary-color text-white join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <hr className="w-full mt-3" />
            <div className="text-white gap-3 mt-3 flex flex-col items-center">
                <h1 className=" text-xl text-gray-400 font-medium">Follow Us On</h1>
                <div className="flex  gap-4 text-3xl">
                    <span><FaFacebook /></span>
                    <span><FaInstagram /></span>
                    <span><FaTwitter /></span>
                    <span><FaSkype /></span>
                </div>
            </div>
            <hr className="w-full mt-3" />

            <div className="text-center text-gray-600 mt-3 ">
                <p>&#169; 2022, Copy Right By Solverwp. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;