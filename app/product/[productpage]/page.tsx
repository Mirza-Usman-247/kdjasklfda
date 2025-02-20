import React from 'react'
import Productpage from '@/components/ProductDetails';
import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';
import ProductListing from '@/components/ProductListing';
import EmailSignup from '@/components/EmailSignup';
import Footer from '@/components/Footer';

export default async function page ({params} : {params: Promise<{productpage: string}>}) {
    const slug = await params;
  return (
    <div>
        <Productpage Pathname={slug.productpage}></Productpage>
        <Banner/>
        <Navbar/>
        <ProductListing></ProductListing>
        <EmailSignup/>
        <Footer/>
    </div>
  )
}
