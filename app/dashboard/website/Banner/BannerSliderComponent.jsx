import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel"; // Example package for the slider
import InputDashboard from "../../components/common/InputDashboard";
import { bannerData } from "./bannerdata";
import BannerForm from "../../components/FormDash/BannerForm";

const BannerSlider = () => {
  const [banners, setBanners] = useState(bannerData);
  const [currentBanner, setCurrentBanner] = useState({
    title: "",
    image: "",
    link: "",
  });
  const [editing, setEditing] = useState(false);

  const handleInputChange = (e) => {
    setCurrentBanner({ ...currentBanner, [e.target.name]: e.target.value });
  };

  const handleSaveBanner = () => {
    if (editing) {
      setBanners(
        banners.map((banner) =>
          banner.id === currentBanner.id ? currentBanner : banner
        )
      );
      setEditing(false);
    } else {
      setBanners([...banners, { ...currentBanner, id: Date.now() }]);
    }
    setCurrentBanner({ title: "", image: "", link: "" });
  };

  const handleEditBanner = (banner) => {
    setCurrentBanner(banner);
    setEditing(true);
  };

  const handleDeleteBanner = (id) => {
    setBanners(banners.filter((banner) => banner.id !== id));
  };

  const [showbanner, setShowBanner] = useState(false);
  const handleshowBanner = () => {
    setShowBanner(!showbanner);
  };

  return (
    <div className="flex gap-2  mb-4">
      <div className="w-full p-4 bg-gray-100 shadow-md rounded-md">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold ">Manage Banners Sliders</h2>
          <button
            // onClick={handleSaveBanner}
            onClick={handleshowBanner}
            className="bg-primary text-white px-4 py-2 rounded"
          >
            {/* {editing ? "Update Banner" : "Add Banner"} */}
            Add Banner
          </button>
        </div>

        {/* Banner List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="p-4 border rounded-md shadow-md bg-white"
            >
              <h3 className="text-lg font-bold mb-2">{banner.title}</h3>
              {banner.imgUrl && (
                <img
                  src={banner.imgUrl}
                  alt="Banner"
                  className="w-full h-48 object-cover mb-2"
                />
              )}
              <div className="flex justify-between">
                <button
                  onClick={() => handleEditBanner(banner)}
                  className="text-blue-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteBanner(banner.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Form */}
        {/* <div className="mb-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={currentBanner.title}
            onChange={handleInputChange}
            className="block w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={currentBanner.image}
            onChange={handleInputChange}
            className="block w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            name="link"
            placeholder="Link URL"
            value={currentBanner.link}
            onChange={handleInputChange}
            className="block w-full p-2 mb-2 border rounded"
          />
          <button
            onClick={handleSaveBanner}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {editing ? "Update Banner" : "Add Banner"}
          </button>
        </div> */}

        {/* Banner Preview */}
        {/* <div className="p-4 border rounded mb-4 bg-white">
          <h3 className="text-lg font-bold mb-2">
            {currentBanner.title || "Banner Title"}
          </h3>
          {currentBanner.image && (
            <img
              src={currentBanner.image}
              alt="Banner"
              className="w-full h-48 object-cover"
            />
          )}
          {currentBanner.link && (
            <a href={currentBanner.link} className="text-blue-500 underline">
              {currentBanner.link}
            </a>
          )}
        </div> */}
      </div>
      {showbanner && <BannerForm handleshowBanner={handleshowBanner} />}
    </div>
  );
};

const BannerCarousel = ({ banners }) => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      interval={5000}
      showStatus={false}
      className="my-8"
    >
      {banners.map((banner) => (
        <div key={banner.id} className="relative">
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl text-white bg-black bg-opacity-50 p-2 rounded">
              {banner.title}
            </h2>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export { BannerSlider, BannerCarousel };
