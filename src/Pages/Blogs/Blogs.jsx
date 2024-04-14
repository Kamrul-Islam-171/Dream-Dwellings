import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsSlide from "../../Layouts/DetailsSlider/DetailsSlide";
import BlogCard from "../../Layouts/BlogCard/BlogCard";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { format } from "date-fns";



const Blogs = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const { id } = useParams();
    // console.log("id = ", id)
    const blogsData = useLoaderData();
    // console.log(blogsData);
    const [blogDetails, setBlogDetails] = useState([]);
    const [remain, setRemain] = useState([]);
    useEffect(() => {
        const filtered = blogsData.filter(item => item.id == id);
        const remaining = blogsData.filter(item => item.id != id);
        setBlogDetails(filtered);
        setRemain(remaining)
    }, [id])


    // console.log(blogDetails)

    console.log(remain)
    return (
        <div className="bg-base-200">
            <Helmet>
                <title>Blogs</title>
            </Helmet>
            {/* <div >
                <DetailsSlide
                    image1={blogDetails[0]?.images[0]}
                    image2={blogDetails[0]?.images[1]}
                    image3={blogDetails[0]?.images[2]}
                >

                </DetailsSlide>
            </div> */}
            <div className=" container mx-auto gap-10  flex flex-col lg:flex-row md:flex-row">
                <div className=" h-[500px] rounded-lg lg:w-[48%] md:w-[48%] mt-16 shadow-2xl">
                    <img className="w-full h-full object-cover rounded-lg" src={blogDetails[0]?.images[0]} alt="" />
                </div>
                <div className=" h-[500px] lg:w-[48%] md:w-[48%] rounded-lg lg:mt-16 md:mt-16 shadow-2xl">
                    <img className="w-full h-full object-cover rounded-lg" src={blogDetails[0]?.images[1]} alt="" />
                </div>
            </div>
            <div className="container mx-auto h-[500px] rounded-lg lg:w-3/5 md:w-[2/3] mt-10 shadow-2xl">
                <img className="w-full h-full object-cover rounded-lg" src={blogDetails[0]?.images[2]} alt="" />
            </div>
            <div className="container mx-auto mt-10 space-y-5 bg-white p-10">
                <h1 className="text-5xl">{blogDetails[0]?.title}</h1>
                <div className=" flex gap-20 text-gray-500">
                    <div className="flex gap-2 items-center">
                        <span><FaRegCalendarAlt /></span>
                        <p>Posted by ,</p>
                        <p>{blogDetails[0]?.postedBy} , </p>
                        <p>{blogDetails[0]?.postedDate}</p>
                        {/* <p>{format(blogDetails[0]?.postedDate, 'MMMM do, yyyy')}</p> */}
                    </div>
                    <div className="flex gap-2 items-center">
                        <span><FaRegComment /></span>
                        <p>{blogDetails[0]?.commentsCount}</p>
                    </div>
                </div>
                <div className="text-gray-500">
                    <p>
                        {blogDetails[0]?.description}
                    </p>
                </div>

                <div className="space-y-5">
                    <h1 className="text-3xl mt-10">Related posts</h1>
                    <div onClick={scrollToTop} className="mb-10 grid lg:grid-cols-3 md:grid-cols-2 gap-10">
                        {
                            remain.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;