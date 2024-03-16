import { Link, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "./Register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useTitle } from "../../components/CustomHook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { sendEmailVerification } from "firebase/auth";
const Register = () => {
  const { handleRegister, updateUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const location = useLocation();
  useTitle("Register");
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const navigate = useNavigate();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image_hosting_token = import.meta.env.VITE_Image_Upload_token;
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
    const formData = new FormData();
    const image = event.target.image.files[0];
    formData.append("image", image);
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageURL = imageData?.data?.display_url;
        handleRegister(email, password)
          .then((result) => {
            const user = result.user;
            // handleEmailVerification(user)
            console.log(user);
            updateData(result.user, name, imageURL);
            toast("registered successfully");
            navigate("/login");
          })
          .catch((error) => {
            console.log(error.message);
          });
        const updateData = (user, name, photo) => {
          updateUser(user, {
            displayName: name,
            photoURL: photo,
          })
            .then(() => {
              console.log("updated");
            })
            .catch((error) => {
              console.log(error.message);
            });
        };
      });
  };

  // const handleEmailVerification = (user) =>{
  //   sendEmailVerification(user)
  //   .then(result =>{
  //     console.log(result);
  //     toast("Please verify your email address")

  //   })
  // }
  return (
    <div className="hero min-h-min bg-base-200 py-10">
      <div className="hero-content flex-col lg:flex-row gap-5 lg:gap-10">
        <div data-aos="fade-right" className="text-center lg:text-left">
          <img
            src="https://i.ibb.co/kX1Trqj/user-registration-removebg-preview.png"
            alt="Register Image"
            className="lg:w-[600px] lg:h-[500px] w-full"
          />
        </div>
        <div
          data-aos="fade-left"
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="font-Montserrat label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-Montserrat label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-Montserrat label-text">Photo</span>
              </label>
              <input type="file" placeholder="photo URL" name="image" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-Montserrat label-text">Password</span>
              </label>
              <input
                type={show ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered relative"
              />
              <p
                className="absolute top-[21rem] right-12"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  <FaEye className="w-5 h-5"></FaEye>
                  ) : (
                  <FaEyeSlash className="w-5 h-5"></FaEyeSlash>
                )}
              </p>
            </div>
            <div className="form-control mt-6">
              <input className="button" type="submit" value="Register" />
            </div>
            <label className="text-base flex gap-1">
              Have an account? Please
              <Link to="/login" className="text-blue-800 underline">
                Login
              </Link>
            </label>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
