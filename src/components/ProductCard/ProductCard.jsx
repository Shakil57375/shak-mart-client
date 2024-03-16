import { useState } from "react";
import { FaRegHeart, FaHeart, FaStar } from "react-icons/fa";
const ProductCard = ({ product, onFav }) => {
  const {
    id,
    name,
    brand,
    price,
    discountPrice,
    stock,
    inStock,
    isFav,
    category,
    description,
    features,
    rating,
    location,
    main_image,
    sample_one,
    sample_two,
    sample_three,
    sample_four,
  } = product;

  return (
    <div>
      <div className="relative min-h-screen flex flex-col items-center justify-center ">
        <div className="container">
          <div className="max-w-md w-full shadow-2xl rounded-xl p-6">
            <div className="flex flex-col ">
              <div className="">
                <div className="relative h-62 w-full mb-3">
                  <div className="absolute flex flex-col top-0 right-0 p-3">
                    <button
                      onClick={() => onFav(id)}
                      className={`w-8 h-8 p-1 ${
                        isFav ? "text-red-500" : "text-red-500"
                      }`}
                    >
                      {isFav ? <FaHeart /> : <FaRegHeart />}
                    </button>
                  </div>
                  <img
                    src={main_image}
                    alt="Just a flower"
                    className=" w-full h-[400px] object-fill  rounded-2xl"
                  />
                </div>
                <div className="flex-auto justify-evenly">
                  <div className="flex flex-wrap ">
                    <div className="w-full flex-none gap-1 text-sm flex items-center text-red-600">
                      <FaStar className="text-red-600" />
                      <span className="text-red-600 whitespace-nowrap mr-3">
                        {rating}
                      </span>
                      <span className="mr-2 text-red-600">{location}</span>
                    </div>
                    <div className="flex items-center w-full justify-between min-w-0 ">
                      <h2 className="text-lg mr-auto cursor-pointer text-orange-600 truncate font-bold ">
                        {name}
                      </h2>
                      <div>
                        {inStock ? (
                          <div className="bg-green-500 rounded-lg  text-white p-2">
                            instock
                          </div>
                        ) : (
                          <div className="bg-red-500 rounded-lg  text-white p-2">
                            out of stock
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-xl text-white font-semibold mt-1">
                    $ {price}
                  </div>
                  <div className="lg:flex  py-4  text-sm text-red-600">
                    <div className="flex-1 inline-flex items-center  mb-3">
                      <div className="w-full flex-none text-sm flex items-center text-red-600">
                        <ul className="flex flex-row justify-center items-center space-x-2">
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                              <a
                                href="#blue"
                                className="block w-3 h-3 bg-blue-600 rounded-full"
                              ></a>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                              <a
                                href="#yellow"
                                className="block w-3 h-3  bg-yellow-400 rounded-full"
                              ></a>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                              <a
                                href="#red"
                                className="block w-3 h-3  bg-red-500 rounded-full"
                              ></a>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                              <a
                                href="#green"
                                className="block w-3 h-3  bg-green-500 rounded-full"
                              ></a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex items-center mb-3">
                      <span className="text-red-600 whitespace-nowrap mr-3">
                        Size
                      </span>
                      <div className="cursor-pointer text-red-600 ">
                        <span className="hover:text-orange-600  p-3 hover:p-3 hover:border hover:border-red-600 hover:transition-all hover:ease-in-out hover:duration-500 hover:rounded-full">
                          S
                        </span>
                        <span className="hover:text-orange-600 p-3 hover:p-3 hover:border hover:border-red-600 hover:transition-all hover:ease-in-out hover:duration-500 hover:rounded-full">
                          M
                        </span>
                        <span className="hover:text-orange-600 p-3 hover:p-3 hover:border hover:border-red-600 hover:transition-all hover:ease-in-out hover:duration-500 hover:rounded-full">
                          L
                        </span>
                        <span className="hover:text-orange-600 p-3 hover:p-3 hover:border hover:border-red-600 hover:transition-all hover:ease-in-out hover:duration-500 hover:rounded-full">
                          XL
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 text-sm font-medium justify-start">
                    <button className="bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 !rounded-full hover:bg-gradient-to-l hover:to-orange-500 hover:from-red-500 font-bold text-white">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
