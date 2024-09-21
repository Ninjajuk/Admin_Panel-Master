import React, { useState } from "react";
import { MdOutlineClear } from "react-icons/md";

const BannerForm = ({ handleshowBanner }) => {
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
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-gray-50 p-4 max-w-lg w-full rounded-md shadow-md">
        <div
          onClick={() => handleshowBanner()}
          className="absolute top-0 right-0 cursor-pointer text-red-600 hover:text-red-800 bg-gray-200 rounded-full "
        >
          <MdOutlineClear className="w-8 h-8 rounded-full " />
        </div>
        {/* Banner Form */}
        <div className="my-4">
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
            className="bg-primary text-white px-4 py-2 rounded"
          >
            {editing ? "Update Banner" : "Add Banner"}
          </button>
        </div>

        {/* Banner Preview */}
        <div className="p-4 border rounded mb-4 bg-white">
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
        </div>
      </div>
    </div>
  );
};

export default BannerForm;
