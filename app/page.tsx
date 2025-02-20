import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductListing from "@/components/ProductListing";
import NewProduct from "@/components/NewProduct";
import EmailSignup from "@/components/EmailSignup";
import Features2 from "@/components/Features2";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <ProductListing/>
      <NewProduct/>
      <EmailSignup/>
      <Features2/>
      <Footer/>
    </div>
  );
}
