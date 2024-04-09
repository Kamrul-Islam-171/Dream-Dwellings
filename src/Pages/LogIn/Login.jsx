import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Login = () => {
    const refpass = useRef();
    const handleShowPass = () => {
        // console.log('iam ')
    }
    return (
        <div>
            <Helmet>
                <title>User LogIn</title>
            </Helmet>
            
            <div className="hero min-h-screen bg-third-color">
                <div className="hero-content flex-col lg:flex-col  w-full lg:w-1/2  ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 bg-transparent w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <div className="cursor-pointer">
                                    <span onClick={handleShowPass}>show pass</span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-primary-color">Login</button>
                            </div>
                        </form>
                        <div className="text-center mb-5">
                            <p>New User? <Link to={'/register'} className="text-primary-color underline "> Register Now</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;