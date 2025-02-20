import AboutFeatures from "@/components/AboutFeatures"
import AboutUspageHeader from "@/components/AboutUspageHeader"
import AboutFeatures2 from "@/components/AboutFeatures2"
import Features from "@/components/Features"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import EmailSignup from "@/components/EmailSignup"

export default function AboutUs() {
  return (
    <div>
      <Navbar/>
      <AboutUspageHeader />
      <AboutFeatures/>
      <AboutFeatures2/>
      <Features className="bg-[#F9F9F9]"/>
      <EmailSignup/>
      <Footer/>
    </div>
  )
}