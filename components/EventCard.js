import React from "react";

const EventCard = ({ image, title, description, contactDetails }) => {
  return (
    <div className="border border-gray-400 max-w-xs rounded-lg overflow-hidden shadow-lg m-4 bg-black text-white border border-white-400 flex flex-col">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4 flex-1">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        <p className="text-gray-400 text-base">{description}</p>
        <div className="mt-4">
          <p className="text-gray-200 font-semibold">Contact Details:</p>
          <p className="text-gray-400">{contactDetails}</p>
        </div>
      </div>
      <div className="px-6 py-4 text-center">
        <button className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded w-full" style={{ backgroundColor: '#6850FF' }} >
          Register
        </button>
      </div>
    </div>
  );
};

export default EventCard;
