/* eslint-disable react-refresh/only-export-components */
import { faq_search } from "../assets"
import Accordion from './faqAccordion';
import { faq } from '../constants/ContentConstants';

function FAQ() {
  return (
   <section className="py-32 px-6 container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1">
              <img src={faq_search} className="w-auto h-auto hidden md:block ml-28" alt="search" />
          </div>
          <div className="flex-1">
            <h1 className="font-primary font-bold text-[#222222] text-center md:text-left text-[32px] md:text-[40px]">Frequently Asked Questions</h1>
                <div className="mt-10">
                    {
                      faq.map((item, index) => (
                        <div key={index}>
                          <Accordion datas={item} />
                          <hr />
                        </div>
                      ))
                    }
                </div>
          </div>
        </div>
   </section>
  )
}

export default FAQ
