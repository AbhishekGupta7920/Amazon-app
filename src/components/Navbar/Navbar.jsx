import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import { IoMdNotifications } from "react-icons/io";

// List of categories for the navigation menu
const categoryList = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  // "home-decoration",
  // "kitchen-accessories",
  "laptops",
  // "mens-shirts",
  // "mobile-accessories",
  // "skin-care",
  // "womens-jewellery",
  "tops",
  "smartphones",
  // "mens-shoes",
  // "mens-watches",
  "motorcycle",
  // "sports-accessories",
  "sunglasses",
  "tablets",
  "vehicle",
  // "womens-bags",
  // "womens-dresses",
  // "womens-shoes",
  // "womens-watches"
]

const Navbar = () => {
  // State variables to handle UI and data layer
  const [showMenu, setShowMenu] = useState(false);
  const [textValue, setTextValue] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  // Get cart items from the Redux store
  const cartItems = useSelector((store) => store.cartSlice.items);
  const totalCartItems = cartItems.reduce((val, item) => val + item.quantity, 0);

  // Get wishlist items from the Redux store
  const wishlistItems = useSelector((store) => store.wishlistSlice.items);
  const totalWishlistItems = wishlistItems.reduce(
    (val, item) => val + item.quantity,
    0
  );

  // Toggle the responsive menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (textValue.trim()) {
      navigate(`/searchResultsProducs/${textValue}`);
      setTextValue(""); // Clear input after navigating
    }
  };

  return (
    <div className="bg-white px-4 mb-12 fixed w-full z-50 shadow-sm top-0 shadow-gray-400">
      <div className="max-w-7xl mx-auto  px-5 flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-14 w-30" />
        </Link>

        {/* Search bar */}
        <form
          className="relative group hidden sm:block"
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            placeholder="Search"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            className="w-[300px] sm:w-[300px] text-gray-800 group-hover:w-[400px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2
              text-sm focus:outline-none focus:border-1 focus:border-primary"
          />
          <button type="submit">
            <IoMdSearch className="text-slate-800 absolute top-1/2 -translate-y-1/2 right-3" />
          </button>
        </form>

        <div className="flex items-center gap-5">
          {/* Cart icon */}
          <Link to="/cart" className="relative w-10">
            <ShoppingCart className="text-2xl" />
            <div className="bg-red-500 w-5 absolute -top-2 right-2 flex items-center justify-center rounded-full text-white">
              {totalCartItems}
            </div>
          </Link>

          {/* Wishlist icon */}
          <Link to="/wishlist" className="relative w-10">
            <FaRegHeart className="text-2xl" />
            <div className="bg-red-500 w-5 absolute -top-2 right-2 flex items-center justify-center rounded-full text-white">
              {totalWishlistItems}
            </div>
          </Link>

          {/* Notifications icon */}
          <Link to="/notifications" className="relative w-10 hidden md:block">
            <IoMdNotifications className="text-2xl " />
            <div className="bg-red-500 w-5  absolute -top-2 right-2 flex items-center justify-center rounded-full text-white">
              3
            </div>
          </Link>
           {/* profile icon */}
          <Link to="/profile"><FaUserCircle className="text-2xl" /></Link>

          {/* Mobile hamburger icon */}
          {showMenu ? (
            <HiMenuAlt1
              onClick={toggleMenu}
              className="cursor-pointer transition-all md:hidden"
              size={30}
            />
          ) : (
            <HiMenuAlt3
              onClick={toggleMenu}
              className="cursor-pointer transition-all md:hidden"
              size={30}
            />
          )}
        </div>
      </div>
       {/* navbar links of category wise products */}
      <div className="border-t-2">
        <nav className="hidden md:block">
          <ul className="flex items-center  text-xl gap-7 py-1">
            <Link to="/"><li>Home</li></Link>
            {
              categoryList.map((listItem, index) => (
                <Link key={index} to={/category/ + listItem}><li>{listItem}</li></Link>
              ))
            }
          </ul>
        </nav>
      </div>
      {/* Only show in mobile */}
      <div className=" my-1 text-center sm:block md:hidden lg:hidden">
        {/* 2nd Search bar */}
        <form
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text" 
            placeholder="Search"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            className="w-[300px] sm:w-[300px] text-gray-800   rounded-lg border border-gray-300 py-1 px-2
              text-sm focus:outline-none focus:border-1 focus:border-primary"
          />
          {/* <button type="submit">
            <IoMdSearch className="text-slate-800 absolute top-1/2 -translate-y-1/2 right-3" />
          </button> */}
        </form>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;
