import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Grid container>
          <Grid md={7}>
            <h1 className="text-7xl font-bold text-center">Point Quest</h1>
            <h1 className="text-3xl my-8 font-bold text-center">
              Centralized platform for Club Activities
            </h1>
          </Grid>
          <Grid md={5}>
            <p>Image</p>
          </Grid>
        </Grid>
      </main>
      <Footer />
    </>
  );
}
