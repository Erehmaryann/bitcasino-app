import type { NextPage } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home: NextPage = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-primary main">
				<div className="container pt-6 lg:pl-32 lg:pr-28">
					<Header />
					<Hero />
				</div>
			</div>
			<div className="container py-6 bg-white lg:pl-32">
				<Footer />
			</div>
			<ToastContainer />
    </>
  )
}

export default Home
