/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash, FaGoogle, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useTitle } from "../../components/CustomHook";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const { handleLogin, handleGoogleSignIn, ResetPassword } =
    useContext(AuthContext);
  useTitle("login");
  const location = useLocation();
  const emailRef = useRef();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const from = location.state?.from?.pathname || "/";
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    handleLogin(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "center",
          icon: "success",
          title: "user logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGoogleLogin = () => {
    handleGoogleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        alert("logged in successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleReset = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.warning("Please provide your email");
      return;
    }
    ResetPassword(email)
      .then(() => {
        toast.success("please check your email");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="hero min-h-min bg-base-200 py-10">
      <div className="hero-content flex-col lg:flex-row gap-5 lg:gap-10">
        <div data-aos="fade-right" className="text-center lg:text-left">
          <img
            src="https://i.ibb.co/9sp2CwF/istockphoto-1281150061-612x612-removebg-preview.png"
            className="lg:w-[600px] lg:h-[500px] w-full"
            alt="Login Image"
          />
        </div>
        <div
          data-aos="fade-left"
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-Poppins">Email</span>
              </label>
              <input
                type="text"
                ref={emailRef}
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-Poppins">Password</span>
              </label>
              <input
                type={show ? "password" : "type"}
                placeholder="password"
                name="password"
                className="input input-bordered relative"
              />
              <p
                className="absolute top-44 right-12"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  <FaEyeSlash className="w-5 h-5"></FaEyeSlash>
                  ) : (
                  <FaEye className="w-5 h-5"></FaEye>
                )}
              </p>
              <a
                onClick={handleReset}
                className="text-sm cursor-pointer font-medium text-blue-600 hover:underline dark:text-primary-500"
              >
                Forget password?
              </a>
            </div>
            <div className="form-control mt-6">
              <input className="button" type="submit" value="Login" />
            </div>
            <div className="divider">OR</div>
            <div className="mb-3">
              <img
                onClick={handleGoogleLogin}
                className=" social-button cursor-pointer"
                src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                alt=""
              />
            </div>
            <label className="flex gap-1">
              New to the Shak_mart? Please
              <Link to="/register" className="text-blue-700 underline">
                Register
              </Link>
            </label>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
