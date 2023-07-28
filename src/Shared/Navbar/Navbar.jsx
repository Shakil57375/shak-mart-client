import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut().then(() => {});
  };
  return (
    <div>
      <div className="flex justify-between items-center bg-gradient-to-r from-yellow-400 to-orange-500 px-2 gap-4 lg:gap-0 lg:px-6 py-6">
        <div className="flex basis-3/4 gap-10 lg:gap-32 lg:flex-row flex-row-reverse">
          <div className="lg:block hidden">
            <div className="flex justify-between gap-16 items-center">
              <div>
                <Link to="/" className="flex items-center text-white">
                  <p>
                    <span className="font-bold text-xl  lg:text-4xl">shak</span>
                    <span className="text-xl lg:text-4xl font-thin underline">
                      mart
                    </span>
                  </p>
                  <span>
                    <FaShoppingCart className="text-white h-8 w-8" />
                  </span>
                </Link>
              </div>

              <div className="lg:block hidden">
                <p className="text-xl text-white">
                  Available 24/7 at
                  <br />
                  091 234-ELLA
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative flex items-center lg:w-[500px] w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <input
                className="peer h-full w-full  outline-none text-sm text-gray-700 pl-4"
                type="text"
                id="search"
                placeholder="Search something.."
              />
              <div className="grid place-items-center h-full w-12 text-orange-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="basis1/4">
          <div className="flex items-center justify-between gap-4 lg:gap-16">
            <div className="flex flex-col items-center justify-center">
              <AiOutlineHeart className="text-white w-5 h-5 lg:w-10 lg:h-10"></AiOutlineHeart>
              <p className="text-white text-sm lg:text-base font-light lg:font-medium">
                Wish
              </p>
            </div>
            <div className="flex flex-col relative items-center justify-center">
              <span className="flex items-center">
                <BsCart className="text-white w-5 h-5 lg:w-10 lg:h-10"></BsCart>{" "}
                <span className="absolute -top-3 -right-2 bg-white text-orange-500 px-1  rounded-full">
                  0
                </span>
              </span>
              <p className="text-white text-sm lg:text-base font-light lg:font-medium">
                Cart
              </p>
            </div>
            <div className="flex items-center gap-2 ">
              {user ? (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar mt-0.5"
                  >
                    <div className="w-12 relative right-5 lg:right-0 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to="/profile" className="hover:!bg-neutral/10">
                        {user?.displayName}
                      </Link>
                    </li>
                    <li onClick={handleLogout}>
                      <a className="hover:!bg-neutral/10">Sign Out</a>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="flex flex-col items-center justify-center"
                  >
                    <AiOutlineUser className="text-white w-5 h-5 lg:w-10 lg:h-10"></AiOutlineUser>
                    <p className="text-white text-sm lg:text-base font-light lg:font-medium">
                      Login
                    </p>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
