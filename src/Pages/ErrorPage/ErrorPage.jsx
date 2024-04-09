import { Link } from 'react-router-dom';
import errorImg from '../../../public/error1.png'

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col items-center gap-5'>
                <img className='' src={errorImg} alt="" />
                <div className='border  rounded-lg hover:border-primary-color'>
                    <Link to='/' className="btn hover:text-primary-color hover:bg-white hover:border-primary-color bg-primary-color text-white font-bold text-lg border-none px-5">Go Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;