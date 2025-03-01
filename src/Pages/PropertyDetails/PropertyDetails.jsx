import { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import DetailsSlide from '../../Layouts/DetailsSlider/DetailsSlide';
import { Helmet } from 'react-helmet-async';

const PropertyDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(property)
    const [property, setProperty] = useState([]);
    // const [insideImages, setInsideImages] = useState([]);

    useEffect(() => {
        const filteredData = data?.filter(item => item.id == id);
        // console.log("filter = ", filteredData);
        setProperty(filteredData);

      

    }, [])

  
    return (
        <div>
             <Helmet>
                <title>{property[0]?.estate_title}</title>
            </Helmet>
            <div className=''>
                <DetailsSlide
                    image1={property[0]?.insideImage1}
                    image2={property[0]?.insideImage2}
                    image3={property[0]?.insideImage3}
                >
                </DetailsSlide>
            </div>
            <div className='text-gray-600  flex flex-col items-center lg:flex-row gap-8 mt-[90px] container mx-auto pb-10'>
                {/* <h1>hello</h1> */}
                <div className='lg:w-[50%] '>

                    <img src={property[0]?.image} className=' w-full object-cover rounded-lg' alt="" />
                    {/* <img src={property[0]?.insideImage1} className='w-full object-cover rounded-lg' alt="" /> */}
                    {/* image */}
                </div>
                <div className='space-y-3 lg:w-[49%]'>
                    {/* details */}
                    <h1 className='text-2xl font-semibold text-primary-color'>{property[0]?.estate_title}</h1>
                    <p className=''><span className='font-semibold text-gray-800'>Categories : </span>{property[0]?.segment_name}</p>
                    <p className='text-justify'><span className='font-semibold text-gray-800'>Description :</span> {property[0]?.description}</p>
                    <div>
                        <p className='font-semibold text-gray-800'>Facilities : </p>
                        {
                            property[0]?.facilities.map(item => <li  key={id}>{item}</li>)
                        }
                    </div>
                    <p className='text-gray-800 font-semibold'>For : <span className='bg-primary-color text-white px-3 rounded-sm'>{property[0]?.status}</span></p>
                    <p><span className='font-semibold text-gray-800'>Location : </span>{property[0]?.location}</p>
                    <p><span className='font-semibold text-gray-800'>Area : </span>{property[0]?.area}</p>
                    <p className='font-bold text-xl text-gray-800'><span>Price : </span>{property[0]?.price}</p>


                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;