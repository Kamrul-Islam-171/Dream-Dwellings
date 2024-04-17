import { Link } from "react-router-dom";
import { format } from "date-fns";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import '../Properties/card.css';
import PropTypes from 'prop-types'; 


const BlogCard = ({ blog }) => {
    useEffect(() => {
        AOS.init();
    }, [])
    const { id, title, postedDate, description, images } = blog;
    return (
        <div className="card-img-zoom1">
            <div data-aos={id%2 ? 'fade-down':'fade-up'} data-aos-duration='1000' data-aos-delay='300' className="card card-compact  bg-base-100 shadow-xl h-[500px]">
                <figure className="h-[300px]"><img className="card-img1 h-full w-full object-cover" src={images[0]} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-primary-color">{title}</h2>
                    <p className="text-gray-600">{format(postedDate, 'MMMM do, yyyy')}</p>
                    <p className="text-gray-600 text-justify">{description.slice(0, 150)}</p>
                    <div className="card-actions">
                        {/* <button className="btn btn-primary">Continue Reading</button> */}
                        <Link to={`/blogs/${id}`} ><button className="text-primary-color ">Continue Reading...</button></Link>
                    </div>
                </div>
            </div>

            
        </div>
    );
};
BlogCard.propTypes = {
    blog : PropTypes.object
}

export default BlogCard;