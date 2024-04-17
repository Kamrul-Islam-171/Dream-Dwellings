import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import  './card.css';
import PropTypes from 'prop-types';

const HouseCard = ({ houseInfo }) => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        AOS.init();
    }, [])
    const { image, estate_title, price, status, area, location, facilities, id } = houseInfo;
    // console.log(houseInfo)
    return (
        <div className="card-img-zoom1 overflow-hidden rounded-2xl">
            <div data-aos={id % 2 ? 'zoom-in' : 'zoom-out'} data-aos-delay={id <=3 ? '500' : '100'} data-aos-duration='1000' className="card  bg-base-100 shadow-xl relative">
                <figure className="h-[300px]"><img className="h-full w-full card-img1 rounded-lg " src={image} alt="not found" /></figure>
                <div className="card-body h-[250px] flex flex-col relative">
                    <h2 className="card-title text-primary-color">{estate_title}</h2>
                    <div className="flex gap-2">
                        <span className="text-primary-color mt-[5px]"><FaLocationDot /></span>
                        <p>{location}</p>
                    </div>
                    <div className="flex text-lg w-full  left-0 px-5  text-white font-bold absolute -top-10">
                        <p className="">{price}</p>
                        <p className="text-end">{area}</p>
                    </div>
                    <hr className="border-secondary-color" />
                    <div className="flex-grow">
                        <div className="flex gap-1">
                            {
                                facilities.map((item, idx) => <p className="" key={idx}>{item}</p>)
                            }
                        </div>
                        <hr className="border-secondary-color mt-2" />
                    </div>
                    <div onClick={scrollToTop} className="card-actions">
                        <Link to={`/propertyDetails/${id}`}><button className="btn border border-primary-color text-primary-color bg-white hover:bg-primary-color hover:text-white">View Property</button></Link>
                    </div>
                </div>
                <div className="bg-primary-color text-sm w-[80px] py-1  text-center rounded-lg text-white absolute top-6 right-6">
                    <p>For {status}</p>
                </div>
            </div>
        </div>
    );
};

HouseCard.propTypes = {
    houseInfo: PropTypes.object
}

export default HouseCard;