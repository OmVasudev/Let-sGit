import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClubCard from "@/components/ClubCard";

const LoginPage = () => {
  const clubs = [
    { imageSrc: '/images/quiz_Logo.jpg', title: 'Quiz Club' },
    { imageSrc: '/images/rotaract_logo.jpg', title: 'Rotaract Club' },
    { imageSrc: '/images/iste_logo.jpg', title: 'ISTE Club' },
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-12 bg-blue min-h-screen">
        <h1 className="text-white text-5xl font-bold mb-6">Point Quest</h1>
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Clubs</h2>
          <div className="flex flex-wrap justify-center ">
            {clubs.map((club, index) => (
              <ClubCard key={index} imageSrc={club.imageSrc} title={club.title} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
