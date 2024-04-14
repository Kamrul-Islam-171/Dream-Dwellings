import { Link } from "react-router-dom";


const BlogCard = ({ blog }) => {
    const { id, title, postedDate, description,images } = blog;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl h-[500px]">
                <figure><img src={images[0]} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-gray-500">{postedDate}</p>
                    <p className="text-gray-500">{description.slice(0,150)}</p>
                    <div className="card-actions">
                        {/* <button className="btn btn-primary">Continue Reading</button> */}
                        <Link to={`/blogs/${id}`} ><button className="text-primary-color ">Continue Reading...</button></Link>
                    </div>
                </div>
            </div>

            {/* <h1>{title}</h1> */}
        </div>
    );
};

export default BlogCard;