/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import Carousel from './Carousel'; // Import the Carousel component
function Testimonials() {

  return (
  <section className="bg-[#F6FFF8] py-20 justify-center px-6  ">
        <h1 className="font-primary font-bold text-[#222] text-[30px] md:text-[40px] text-center leading-normal">What Our Customers Say</h1>
        <p className="font-primary font-normal text-[#8D8A8A] text-[16px] md:text-[18px] text-center leading-[24px] md:max-w-[917px] mx-auto mt-4">Discover how our users' financial lives have been transformed. Hear their stories and success with our budgeting app.</p>
       
        <div className='mt-20 md:px-10 container mx-auto'>
            <Carousel />
        </div>        
  </section>
  )
}

export default Testimonials;
