// pages/index.js
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudentProfile from "@/components/StudentProfile";

export default function Home() {
    const student = {
        image: '/images/profile.png', // Ensure you replace this with the actual path to your image
        name: 'John Doe',
        usn: '2GI21CS000',
        email: 'johndoe@gmail.com',
        phone: '9876543210',
        branch: 'Computer Science',
        activityPoints: 50
      };
    
      return (
        <>
        <Navbar />
        <div>
          <StudentProfile student={student} />
        </div>
        <Footer />
    </>
      );
}
