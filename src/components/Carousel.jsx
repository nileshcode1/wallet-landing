import { useState } from 'react';
// Import asssets 
import { customer1, customer2, customer3, stars, left_icon, right_icon } from '../assets';
// importing slides content 
import { slides } from '../constants/ContentConstants';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Sets initial slide to the first slide
  const slideImages = [customer1, customer2, customer3];

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="mx-auto">
      <div className="flex flex-col md:flex-row items-center">
          {/* Previous Slide Flex  */}
          <div className="lg:flex hidden">
            <div className="relative cursor-pointer" onClick={goToPreviousSlide}>
                {/* Previous Slide Image  */}
                <img
                  src={slideImages[(currentSlide - 1 + slides.length) % slides.length]}
                  alt="Previous Slide"
                  className="max-w-[800px] max-h-[300px]" // Larger size
                />
                  {/* Previous Slide Image Overlay  */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}>
                  {/* Overlay Icon*/}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-10 h-10 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 19l-7-7 7-7m8 14l-7-7 7-7"
                        />
                      </svg>
                </div>
            </div>
          </div>
          {/* Main Slide Flex  */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform transform max-w-[100%] " 
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${slides.length * 100}%`,
              }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="w-full flex-shrink-0 md:p-4 mx-auto justify-center"
                >
                  <div className="flex flex-row flex-nowrap justify-center md:items-center mx-auto">
                    <div className="flex justify-center items-center"> 
                      <img src={slide.image} className="w-full md:h-[28rem] md:max-w-[350px]" alt="" />
                    </div>
                    <div className="flex bg-white p-3 md:p-6">
                      <div className="md:max-w-[430px] border border-[#C5E1C4] py-5 md:p-12 ml-[-1.2rem] md:ml-[-3.2rem] flex items-center">
                        <div className="pl-6 md:pl-10 px-4">
                          <p className="font-primary font-normal text-[#6F6F6F] text-[10px] md:text-[16px] leading-[18px] md:leading-[28px]">
                            {slide.content}
                          </p>
                          <div className="mt-5 md:mt-16">
                            <h1 className="font-primary font-semibold text-[#222222] text-[12px] md:text-[20px] leading-[11px] md:leading-[24px]">
                              {slide.name}
                            </h1>
                            <p className="font-primary font-normal text-[#8D8A8A] text-[10px] md:text-[16px] leading-[11px] md:leading-[24px]">
                              {slide.title}
                            </p>
                            <img src={stars} className='w-auto h-auto mt-2' alt="" />
                          </div>
                        </div>
                      </div>            
                    </div>
                  </div>
                </div>
              ))}
            </div>
      
          </div>
            {/* Previous Slide Flex  */}
          <div className="lg:flex hidden">
          <div className="relative cursor-pointer" onClick={goToNextSlide}>
              {/* Next Slide Image  */}
              <img
                src={slideImages[(currentSlide + 1) % slides.length]}
                alt="Next Slide"
                className="max-w-[800px] max-h-[300px]" // Larger size
              />
                {/* Next Slide Image Overlay  */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}>
                  {/* Overlay Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-10 h-10 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
              </div>
            </div>
          </div>
      </div>

        {/* Slides Navigations on Medium and Small Screen  */}
      <div className="flex justify-center gap-8 mt-10 lg:hidden">
        <div className="flex">
            <div className='cursor-pointer' onClick={goToPreviousSlide}>
                <img src={left_icon} className='w-full h-full' alt="left_icon" />
            </div>
        </div>
        <div className="flex">
            <div className='cursor-pointer' onClick={goToNextSlide}>
                <img src={right_icon} className='w-full h-full' alt="right_icon" />
            </div>
        </div>
      </div>
    </div>

);
};

export default Carousel;
