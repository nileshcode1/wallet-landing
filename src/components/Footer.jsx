import { footerLinks } from "../constants/ContentConstants";

function Footer() {
  return (
  <section className="mx-auto">
      <section className="bg-[#385334] py-6">
          <div className="flex flex-col md:flex-row px-6 md:px-48 gap-6 justify-between">
              <div className="flex gap-10 items-center">
                   <div className="flex flex-wrap gap-3">
                   <a href="#!" className="font-primary font-normal text-[#E4E4E4] text-[14px] md:text-[16px]">
                    <i className="fa-solid fa-envelope border p-[0.40rem] rounded-full mr-1"></i> sentrysupport@yahoo.com</a>

                    <a href="#!" className="font-primary font-normal text-[#E4E4E4] text-[14px] md:text-[14px]"> 
                    <i className="fa-solid fa-phone border p-[0.40rem] rounded-full mr-1"></i> <span className="text-[14px] md:text-[16px]">+2349087654362</span></a>
                   </div>
              </div> 

              <div className="flex">
              <ul className="flex flex-wrap gap-6">
                  <li>
                      <a href="#!"><i className="fa-brands fa-linkedin text-[#E4E4E4] border p-[0.40rem] rounded-full"></i></a>
                  </li>
                  <li>
                    <a href="#!"><i className="fa-brands fa-twitter text-[#E4E4E4] border p-[0.40rem] rounded-full"></i></a>
                  </li>
                  <li>
                      <a href="#!"><i className="fa-brands fa-facebook-f text-[#E4E4E4] border py-[0.40rem] px-[0.60rem] rounded-full"></i></a>
                    </li>
                  <li>
                    <a href="#!"><i className="fa-brands fa-instagram text-[#E4E4E4] border p-[0.40rem] rounded-full"></i></a>
                  </li>
              </ul>
              </div>       
          </div>
      </section>

      <section className="bg-[#0A2102] py-7">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 px-6 md:px-48">
            <div className="flex">
            <ul className="flex flex-wrap gap-5 md:gap-16">
                  {footerLinks.map((Link) => (
                    <li
                      key={Link.id}
                      className={`font-primary font-medium leading-normal text-[15px] text-[#FFFFFF] hover:font-semibold`}
                    >
                      <a href="#!">{Link.title}</a>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="flex">
                  <ul className="flex flex-wrap gap-3 md:gap-8">
                    <li><a href="#!" className="font-primary text-[14px] md:text-[16px] text-[#B8BABD] leading-normal">© 2023 Wallet Sentry</a></li>
                  </ul>
            </div>
          </div>
      </section>
  </section>
  )
}

export default Footer
