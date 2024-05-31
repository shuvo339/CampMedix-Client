import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLocation,  useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Register = () => {
    const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword]= useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const {createUser, profileUpdate} = useAuth();

      const onSubmit = (data) => {
        const {email, password, name, photo} = data;
        console.log(name, photo)
        if(password.length<6){
            toast.error("Password should be at least 6 characters");
            return;
        }
        if(!/(?=.*[A-Z])/.test(password)){
            toast.error("Password must have an uppercase letter");
            return;
        }
        if(!/(?=.*[a-z])/.test(password)){
            toast.error("Password must have an lowercase letter");
            return;
        }
        createUser(email, password)
        .then((result)=>{
            toast.success("User created successfully")
            profileUpdate(name, photo)
            if(result.user){
              setTimeout(()=>{
                navigate(location?.state || "/")
              }, 3000)
            }
        })
        .catch(error=>{
           toast.error(error.message.split(":")[1])
        })
        
      }

    
    return (
        <div className="card shrink-0 w-3/4 md:w-1/2 mx-auto shadow-2xl bg-base-100 mb-4 mt-6">
            <h2 className="text-2xl md:text-4xl font-semibold text-center">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Please provide your name"
            className="input input-bordered"
            {...register("name", { required: true })}
          />
          {errors.name && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Please provide your email"
            className="input input-bordered"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Please provide your photo url"
            className="input input-bordered"
            {...register("photo", { required: true })}
          />
          {errors.photo && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <div className="relative">
          <input
            type={showPassword? "text":"password"}
            name="password"
            placeholder="password"
            className="input input-bordered w-full"
            {...register("password", { required: true })}
          />
          <span className="absolute top-1/3 right-3 text-xl" onClick={()=>setShowPassword(!showPassword)}>{showPassword? <FaEye />:<FaEyeSlash/>}</span>
          </div>
          {errors.password && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control mt-6">
            <button className="btn text-white text-lg font-semibold bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80">Register</button>
        </div>
      </form>
      <p className="pb-3 px-6">Already have an account? Please <Link className="text-green-700 font-medium underline" to="/login">Login</Link></p>
      </div>
    );
};

export default Register;