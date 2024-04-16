import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { FaEyeSlash } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import toast from "react-hot-toast";

const Register = () => {
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init();
    }, [])

    const { CreateUser, udpateUserProfile, userLogOut } = useContext(AuthContext);
    // console.log(CreateUser)

    const [showPass, setShowPass] = useState(false);


    // src = https://i.ibb.co/n0w6p8r/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        criteriaMode: "all",
        // mode: "onChange"
    })

    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const photoUrl = data.photoUrl;
        const password = data.password;
        // console.log(name, email, photoUrl, password)

        //new registration
        CreateUser(email, password)
            .then(result => {
                console.log(result.user);
                udpateUserProfile(name, photoUrl)
                    .then(() => {
                        // console.log('user updated')

                        //logout
                        userLogOut()
                            .then(() => {
                                console.log('logout')
                            })
                            .catch(error => console.log(error))
                            toast.success('User Registration successful')
                            navigate('/login')

                    })
                    .catch(error => {
                        console.log(error)
                        toast.error('Somethig went wrong. Please try again')
                    })

            })
            .catch(error => {
                console.log(error)
                toast.error('Somethig went wrong. Please try again')
            })
    }
    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>


            <div className="flex justify-center items-center mt-32 mb-24">
                <div data-aos='fade-right' data-aos-duration = '1000' className="w-full max-w-md p-8 space-y-3 rounded-xl border-primary-color border text-gray-700">
                    <h1 className="text-2xl font-bold text-center text-primary-color">Register Now</h1>
                    <form noValidate="" className="space-y-6 " onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-gray-700">Your Name</label>
                            <input type="text" {...register('name', { required: true })} placeholder="Name" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                            {errors?.name?.types?.required && <p className="text-red-500">This field is required</p>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block text-gray-700">Your Email</label>
                            <input type="email" {...register("email", { required: true })} placeholder="Email" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                            {errors?.email?.types?.required && <p className="text-red-500">This field is required</p>}

                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="photoUrl" className="block text-gray-700">Your Photo URL</label>
                            <input type="text" {...register("photoUrl", { required: true })} placeholder="URL" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                            {errors?.photoUrl?.types?.required && <p className="text-red-500">This field is required</p>}

                        </div>
                        <div className="relative">
                            <div className="space-y-1 text-sm " >
                                <label htmlFor="password" className="block text-gray-700">Password</label>
                                <input type={showPass ? 'text' : 'password'} {...register("password", { required: { value: true, message: "This field is required" }, pattern: { value: /^(?=.*[A-Z])(?=.*[a-z])/, message: "At least one Uppercase and lowercase" }, minLength: { value: 6, message: "At least 6 character" } })} placeholder="Password" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                                <div className="absolute right-4 bottom-8">
                                    <button onClick={() => setShowPass(!showPass)}><span className="text-gray-600 text-xl"><FaEyeSlash /></span></button>
                                </div>
                                {/* {errors?.password?.types?.required && <p className="text-red-500">This field is required</p>} */}
                                {/* {errors?.password?.types?.pattern && <p className="text-red-500">Must have at least one Uppercase</p>} */}
                                {errors?.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm  bg-primary-color text-gray-100 hover:bg-secondary-color">Register</button>
                    </form>


                    <p onClick={scrollToTop} className="text-xs text-center sm:px-6 text-black">Already have an account?
                        <Link to={'/login'} className="underline text-sm text-primary-color"> Login Now</Link>
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Register;