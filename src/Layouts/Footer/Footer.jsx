import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FaGithub, FaInstagram, FaPrint, FaSkype, FaTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

import { FaFacebook } from "react-icons/fa";



import home from '../../../public/home1.png'
const Footer = () => {
    return (
        <div className="container mx-auto pb-3">
            <div className='text-white pt-20 text-center lg:text-start  grid gap-5 lg:grid-cols-4 md:grid-cols-2 '>
                <div className="">
                    {/* <img src={home} className='mx-auto  w-[70px] h-[70px] bg-white rounded-full' alt="" /> */}
                    <h1 className=' text-xl'>Dream Dwelling</h1>
                    <p className=''>Discover your perfect sanctuary with Dream Dwelling, where every home embodies the essence of your dreams. Let us guide you to the doorstep of your ideal living space.</p>
                </div>
                <div className="lg:ml-10">
                    <h1>Quick Links</h1>
                    <p>About Us</p>
                    <p>Properties</p>
                    <p>Terms and Condition</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <h1>Contact Us</h1>
                    <div className="">
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
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="form-control w-80 mx-auto">
                            <label className="label">
                                <span className="label-text text-white">Enter your email address</span>
                            </label>
                            <div className="join">
                                <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <hr className="w-full mt-3" />
            <div className="text-white gap-3 mt-3 flex flex-col items-center">
                <h1 className=" text-xl">Follow Us On</h1>
                <div className="flex  gap-4 text-3xl">
                    <span><FaFacebook /></span>
                    <span><FaInstagram /></span>
                    <span><FaTwitter /></span>
                    <span><FaSkype /></span>
                </div>
            </div>
            <hr className="w-full mt-3" />

            <div className="text-center text-white mt-3 ">
                <p>&#169; 2022, Copy Right By Solverwp. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;