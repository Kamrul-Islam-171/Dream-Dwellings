import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HouseCard = ({ houseInfo }) => {
    const { image, estate_title, description, segment_name, price, status, area, location, facilities, id } = houseInfo;
    // console.log(houseInfo)
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl relative">
                <figure className="p-2"><img className="rounded-lg h-[300px]" src={image} alt="Shoes" /></figure>
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
                    <div className="card-actions">
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

export default HouseCard;