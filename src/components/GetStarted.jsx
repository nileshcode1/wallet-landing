/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import { holding_phone_mockup, get_started_pattern } from "../assets";

const backgroundPattern = {
  backgroundImage: `url(${get_started_pattern})`,
  backgroundSize: '95%',
  backgroundRepeat: 'no-repeat',
};

function GetStarted() {
  return (
    <section className="py-28 px-6 h-auto mx-auto justify-center">
        <div className="flex flex-col-reverse md:flex-row justify-center gap-20 md:gap-32">
            <div className="flex flex-col">
                <div style={backgroundPattern} className="bg-[#F8F8F8] md:w-[517px] md:h-[474px] flex flex-col items-center justify-end rounded-lg pt-10">
                  <img src={holding_phone_mockup} className="w-[80%] md:w-[75%] h-auto ml-20" alt="phone_mockup" />
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="font-primary font-bold text-[#222] text-[30px] md:text-[40px] md:max-w-[443px] leading-normal">Improve Your Financial Performance</h1>
              <p className="mt-5 font-primary font-normal text-[#8D8A8A] text-[16px] leading-[32px] md:max-w-[517px]">We've created a user-friendly and powerful tool that simplifies budgeting, tracks expenses, and sets you on a path toward your financial goals. Whether you're saving for a dream vacation, working to pay off debt, or simply seeking peace of mind in your financial journey, we're here to support you every step of the way.</p>
              <p className="mt-5 font-primary font-normal text-[#8D8A8A] text-[16px] leading-[32px] md:max-w-[517px]">Our mission is to empower individuals and families to make informed financial decisions.</p>

              <button className="mt-10 flex-shrink-0 w-[160px] h-[48px] rounded-lg bg-primary text-white font-primary font-normal">
                Get Started
              </button>  
            </div>
        </div>
    </section>
  )
}

export default GetStarted
