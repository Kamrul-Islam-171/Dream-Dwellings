import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Register = () => {
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
        console.log(data)
    }
    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>


            <div className="flex justify-center items-center mt-32 mb-24">
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-primary-color border text-gray-700">
                    <h1 className="text-2xl font-bold text-center text-primary-color">Register Now</h1>
                    <form noValidate=""  className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-gray-700">Your Name</label>
                            <input type="text" {...register('name', {required:true})}  placeholder="Name" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                            {errors?.name?.types?.required && <p className="text-red-500">This field is required</p>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block text-gray-700">Your Email</label>
                            <input type="email" {...register("email", {required:true})}  placeholder="Email" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                            {errors?.email?.types?.required && <p className="text-red-500">This field is required</p>}

                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="photoUrl" className="block text-gray-700">Your Photo URL</label>
                            <input type="text" {...register("photoUrl", {required:true})}  placeholder="URL" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                            {errors?.photoUrl?.types?.required && <p className="text-red-500">This field is required</p>}

                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input type="password" {...register("password", {required:{value:true, message:"This field is required"}, pattern:{value:/^(?=.*[A-Z])(?=.*[a-z])/, message:"At least one Uppercase and lowercase"}, minLength:{value:6, message:"At least 6 character"}})}  placeholder="Password" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                            {/* {errors?.password?.types?.required && <p className="text-red-500">This field is required</p>} */}
                            {/* {errors?.password?.types?.pattern && <p className="text-red-500">Must have at least one Uppercase</p>} */}
                            {errors?.password && <p className="text-red-500">{  errors.password.message}</p>}
                            
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm  bg-primary-color text-gray-100">Register</button>
                    </form>
                    
                  
                    <p className="text-xs text-center sm:px-6 text-black">Already have an account?
                        <Link to={'/login'} className="underline text-sm text-primary-color"> Login Now</Link>
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Register;