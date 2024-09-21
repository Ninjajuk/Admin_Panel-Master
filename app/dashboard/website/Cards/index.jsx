import React, { useState } from "react";
import { carddata } from "./cardData";
import CardForm from "../../components/FormDash/CardForm";
const CardsHome = () => {
  const [cards, setCards] = useState(carddata);

  const [showcard, setShowCard] = useState(false);
  const handleshowCard = () => {
    setShowCard(!showcard);
  };
  return (
    <div className="flex gap-2  mb-4">
      <div className="w-full p-4 bg-gray-100 shadow-md rounded-md">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold mb-4">Manage Cards</h2>
          <button
            // onClick={handleSaveCard}
            onClick={handleshowCard}
            className="bg-primary text-white px-4 py-2 rounded"
          >
            {/* {editing ? "Update Card" : "Add Card"} */}
            Add Card
          </button>
        </div>

        {/* Card List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="p-4 border  bg-white rounded-md shaodw-md"
            >
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="mb-2">{card.description}</p>
              {<card className="img"></card> && (
                <img
                  src={card.img}
                  alt="Card"
                  className="w-full h-32 object-cover mb-2 rounded-md"
                />
              )}
              <div className="flex justify-between">
                <button
                  onClick={() => handleEditCard(card)}
                  className="text-blue-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteCard(card.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showcard && <CardForm handleshowCard={handleshowCard} />}
    </div>
  );
};

export default CardsHome;
