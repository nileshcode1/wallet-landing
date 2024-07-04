
// eslint-disable-next-line no-unused-vars
import { dowloadAds_phone_mockup, dowloadAds_phone_mockup_sm, applestore, playstore } from "../assets";

function DownloadAds() {
  return (
    <section className="mt-2">
          <div className="flex flex-col md:flex-row items-center justify-center mx-auto md:px-28 px-6">
            <div className="flex-1">
               <div className="md:ml-10 mt-20 md:mt-0">
                  <h1 className="font-primary font-bold text-[#fff] text-[32px] md:text-[40px] leading-normal md:max-w-[380px]">Begin Smart Money Management</h1>
                    <p className="font-primary font-normal text-[#F3F3F3] text-[16px] leading-[26px] md:max-w-[474px] mt-2">Download our app now and begin to explore ways to achieve your financial goals.</p>
                    <div className="flex flex-nowrap gap-6 md:gap-10 mt-8 items-center">
                      <img src={playstore} className="cursor-pointer w-[45%] md:w-auto" alt="playstore_image" />
                      <img src={applestore} className="cursor-pointer w-[45%] md:w-auto" alt="applestore_image" />
                    </div>

               </div>
            </div>
            <div className="flex-1 z-0">
                <img src={dowloadAds_phone_mockup} className="w-[100%] h-[100%] hidden md:block" alt="wallet_centry_app_mockup" />
                <img src={dowloadAds_phone_mockup_sm} className="w-[100%] h-[100%] md:hidden" alt="wallet_centry_app_mockup" />
            </div>
          </div>
    </section>
  )
}

export default DownloadAds
