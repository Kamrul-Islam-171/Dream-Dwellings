import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HouseCard = ({ houseInfo }) => {
    const { image, estate_title, description, segment_name, price, status, area, location, facilities , id} = houseInfo;
    // console.log(houseInfo)
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl relative">
                <figure className="p-2"><img className="rounded-lg h-[300px]" src={image} alt="Shoes" /></figure>
                <div className="card-body h-[275px] flex flex-col ">
                    <h2 className="card-title text-primary-color">{estate_title}</h2>
                    <div className="flex gap-2">
                        <span className="text-primary-color mt-[5px]"><FaLocationDot /></span>
                        <p>{location}</p>
                    </div>
                    <div className="flex text-lg font-medium">
                        <p className="">{price}</p>
                        <p className="">{area}</p>
                    </div>
                    <div className="flex-grow">
                        <div className="flex gap-1">
                            {
                                facilities.map((item, idx) => <p className="" key={idx}>{item}</p>)
                            }
                        </div>
                    </div>
                    <div className="card-actions">
                        <Link to={`/propertyDetails/${id}`}><button className="btn bg-primary-color text-white ">View Property</button></Link>
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