/* eslint-disable react-refresh/only-export-components */
function CTA() {
  return (
    <section className="py-16 px-6 md:px-6 bg-[#F6FFF8] mx-auto text-center">
        <h1 className="font-primary font-bold text-[#222222] text-[32px] md:text-[40px] leading-normal">Join Our Community</h1>
        <p className="font-primary font-normal text-[#8D8A8A] text-[15px] md:text-[18px] leading-[24px] max-w-[318px] md:max-w-[800px] mx-auto mt-3">
          Subscribe to our newsletter and receive the latest tips and financial news delivered straight to your inbox
        </p>

        <div className="flex flex-nowrap gap-2 mt-12 items-center justify-center">
          {/* Input Field  */}
          <input className="items-center pt-[0.9375rem] md:pt-[1rem] pb-[0.9375rem] md:pb-[1rem] pl-4 md:pl-5 w-[290px] md:w-[480px] border border-[#e4e4e4] focus:outline-none focus:border-[#167E27] rounded-lg text-[#8d8a8a] font-primary text-sm md:text-[16px]" 
          placeholder="Enter your email" />
          {/* Button on large screen */}
          <button className="flex-shrink-0 w-[160px] h-[55px] rounded-lg bg-primary text-white font-primary font-normal hidden md:block">Subscribe</button>
          {/* Button on mobile screen */}
          <button className="justify-center items-center gap-2.5 p-2.5 w-[3.125rem] h-12 rounded-lg bg-[#167e27] md:hidden">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="white" />
              </svg>
          </button>
        </div>

    </section>
  )
}

export default CTA
