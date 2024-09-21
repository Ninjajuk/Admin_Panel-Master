import React, { useState } from "react";
import { MdOutlineClear } from "react-icons/md";

const CardForm = ({ handleshowCard }) => {
  //   const [cards, setCards] = useState(carddata);
  const [currentCard, setCurrentCard] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [editing, setEditing] = useState(false);

  const handleInputChange = (e) => {
    setCurrentCard({ ...currentCard, [e.target.name]: e.target.value });
  };

  const handleSaveCard = () => {
    if (editing) {
      setCards(
        cards.map((card) => (card.id === currentCard.id ? currentCard : card))
      );
      setEditing(false);
    } else {
      setCards([...cards, { ...currentCard, id: Date.now() }]);
    }
    setCurrentCard({ title: "", description: "", image: "" });
  };

  const handleEditCard = (card) => {
    setCurrentCard(card);
    setEditing(true);
  };

  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-gray-50 p-4 max-w-lg w-full rounded-md shadow-md">
        <div
          onClick={() => handleshowCard()}
          className="absolute top-0 right-0 cursor-pointer text-red-600 hover:text-red-800 bg-gray-200 rounded-full "
        >
          <MdOutlineClear className="w-8 h-8 rounded-full " />
        </div>
        {/* Card Form */}
        <div className="my-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={currentCard.title}
            onChange={handleInputChange}
            className="block w-full p-2 mb-2 border rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={currentCard.description}
            onChange={handleInputChange}
            className="block w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={currentCard.image}
            onChange={handleInputChange}
            className="block w-full p-2 mb-2 border rounded"
          />
          <button
            onClick={handleSaveCard}
            className="bg-primary text-white px-4 py-2 rounded"
          >
            {editing ? "Update Card" : "Add Card"}
          </button>
        </div>

        {/* Card Preview */}
        <div className="p-4 border rounded mb-4">
          <h3 className="text-lg font-bold mb-2">
            {currentCard.title || "Card Title"}
          </h3>
          <p className="mb-2">
            {currentCard.description || "Card description goes here."}
          </p>
          {currentCard.image && (
            <img
              src={currentCard.image}
              alt="Card"
              className="w-full h-48 object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardForm;
