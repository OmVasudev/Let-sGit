import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";

const MyEventPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center my-8">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <EventCard
            image="/images/eventcard2.png"
            title="चैतन्य (Chaitanya) "
            description="Embark on a journey where pixels become the pixels of change. Through every transition, every meticulously crafted edit, we weave the narrative of our democracy"
            contactDetails="Chinmay : +91 87920 84636
          Sushma Naratti: +91 81472 01384 "
          />
          <EventCard
            image="/images/ProjectArthaEventCard.png"
            title="JAAGRUKTA 2.0"
            description="Your generous contributions—whether books, clothes, essential items, blankets, sweaters, toiletries, non-perishable food items, or medical supplies—can bring immense joy and comfort to their lives."
            contactDetails="Chinmay: +91 87920 84636
          Sushma Naratti: +91 81472 01384 "
          />
          <EventCard
            image="/images/eventcard3.png"
            title="MAHADAN 9.0"
            description="Your generous contributions—whether books, clothes, essential items, blankets, sweaters, toiletries, non-perishable food items, or medical supplies—can bring immense joy and comfort to their lives."
            contactDetails="Chinmay: +91 87920 84636
            Sushma Naratti: +91 81472 01384 "
          />
          {/* Add more EventCard components as needed */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyEventPage;
